import { LocaleSwitcher } from "@/components/locale-switcher";
import { ProjectGallery } from "@/components/project-gallery";
import { TechStack } from "@/components/tech-stack";
import { Link } from "@/i18n/navigation";
import { getAllProjects, getProjectBySlug } from "@/lib/projects";
import {
    ArrowSquareOutIcon,
    GithubLogoIcon,
    YoutubeLogoIcon,
} from "@phosphor-icons/react/ssr";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

export function generateStaticParams() {
    return getAllProjects().map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectPage({
    params,
}: {
    params: Promise<{
        locale: string;
        slug: string;
    }>;
}) {
    const { locale, slug } = await params;

    setRequestLocale(locale);

    const t = await getTranslations("projects");
    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    const links = [
        project.demoUrl && {
            label: "demo",
            href: project.demoUrl,
            icon: ArrowSquareOutIcon,
        },

        project.githubUrl && {
            label: "github project",
            href: project.githubUrl,
            icon: GithubLogoIcon,
        },

        project.youtubeUrl && {
            label: "youtube preview",
            href: project.youtubeUrl,
            icon: YoutubeLogoIcon,
        },
    ].filter(Boolean) as {
        label: string;
        href: string;
        icon: typeof ArrowSquareOutIcon;
    }[];

    return (
        <section className="mx-auto max-w-5xl px-4 pt-20 pb-28 sm:pt-28">
            <div className="flex items-center justify-between font-mono">
                <Link
                    href="/projects"
                    className="text-lg text-tint transition-colors hover:text-main"
                >
                    <span className="text-main">denoqcore@site\</span>
                    <span className="text-tint/60">
                        {" "}
                        ~/projects % \
                    </span>
                    {t("back")}
                </Link>

                <div className="hidden font-body sm:flex">
                    <LocaleSwitcher />
                </div>
            </div>

            <div className="mt-10 overflow-hidden rounded-lg border border-line font-mono sm:mt-12">
                <div className="flex items-center gap-1.5 border-b border-line bg-tinted/40 px-4 py-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/70" />

                    <span className="ml-2 text-xs text-tint/60">
                        {project.slug}.json — zsh
                    </span>
                </div>

                <div className="p-6 sm:p-8">
                    <p className="text-sm text-tint/70">
                        <span className="text-main">denoqcore@site\</span>{" "}
                        ~/projects %{" "}
                        <span className="text-main">cat\</span>{" "}
                        {project.slug}.json
                    </p>

                    <div className="mt-10 flex flex-col gap-4 font-body sm:mt-12 sm:gap-5">
                        <h1 className="text-2xl font-medium text-main">
                            {project.title}
                        </h1>

                        <p className="text-sm leading-6 text-tint/70 sm:leading-7">
                            {t(`${project.slug}.description`)}
                        </p>

                        <div className="mt-2">
                            <TechStack stack={project.stack} />
                        </div>
                    </div>

                    <p className="mt-8 max-w-2xl font-body text-sm leading-7 text-tint/80 sm:mt-10 sm:leading-8">
                        {t(`${project.slug}.content`)}
                    </p>

                    {links.length > 0 && (
                        <div className="mt-8 flex flex-wrap gap-x-5 gap-y-4 font-body sm:mt-10 sm:gap-x-6 sm:gap-y-5">
                            {links.map(({ label, href, icon: Icon }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1.5 py-1 text-sm text-tint transition-colors hover:text-main"
                                >
                                    <Icon size={16} />
                                    {label}
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {project.screenshots.length > 0 && (
                <div className="mt-10 sm:mt-12">
                    <ProjectGallery
                        images={project.screenshots}
                        alt={project.title}
                    />
                </div>
            )}
        </section>
    );
}   