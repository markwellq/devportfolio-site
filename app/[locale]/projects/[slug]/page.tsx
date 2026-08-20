import { LocaleSwitcher } from "@/components/locale-switcher";
import { TechStack } from "@/components/tech-stack";
import { Link } from "@/i18n/navigation";
import { getAllProjects, getProjectBySlug } from "@/lib/projects";
import { ArrowSquareOut, GithubLogo, YoutubeLogo } from "@phosphor-icons/react/dist/ssr";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { notFound } from "next/navigation";

export function generateStaticParams() {
    return getAllProjects().map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({
    params,
}: {
    params: Promise<{ locale: string; slug: string }>;
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
            label: "open demo",
            href: project.demoUrl,
            icon: ArrowSquareOut,
        },
        project.githubUrl && {
            label: "open github",
            href: project.githubUrl,
            icon: GithubLogo,
        },
        project.youtubeUrl && {
            label: "open youtube",
            href: project.youtubeUrl,
            icon: YoutubeLogo,
        },
    ].filter(Boolean) as {
        label: string;
        href: string;
        icon: typeof ArrowSquareOut;
    }[];

    return (
        <section className="mx-auto max-w-5xl px-4 pt-20 pb-28 font-mono sm:pt-28">
            <div className="flex items-center justify-between">
                <Link
                    href="/projects"
                    className="text-sm text-tint transition-colors hover:text-main"
                >
                    <span className="text-main">denoqcore@site</span>
                    <span className="text-tint/60"> ~/projects % </span>
                    {t("back")}
                </Link>

                <div className="hidden sm:flex font-body">
                    <LocaleSwitcher />
                </div>
            </div>

            <div className="mt-8 overflow-hidden rounded-lg border border-line">
                <div className="flex items-center gap-1.5 border-b border-line bg-tinted/40 px-4 py-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-tint/30" />
                    <span className="h-2.5 w-2.5 rounded-full bg-tint/30" />
                    <span className="h-2.5 w-2.5 rounded-full bg-tint/30" />
                    <span className="ml-2 text-xs text-tint/60">
                        {project.slug}.json — zsh
                    </span>
                </div>

                <div className="p-5 sm:p-8">
                    <p className="text-sm text-tint/70">
                        <span className="text-main">denoqcore@site</span>{" "}
                        ~/projects %{" "}
                        <span className="text-main">cat</span> {project.slug}
                        .json
                    </p>

                    <div className="mt-8 flex flex-col gap-2">
                        <h1 className="text-2xl font-medium text-main">
                            {project.title}
                        </h1>
                        <p className="text-sm text-tint/70">
                            # {project.description}
                        </p>
                        <div className="mt-2">
                            <TechStack stack={project.stack} />
                        </div>
                    </div>

                    {project.content && (
                        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-tint/80 font-body">
                            {project.content}
                        </p>
                    )}

                    {links.length > 0 && (
                        <div className="mt-6 flex flex-wrap gap-4">
                            {links.map(({ label, href, icon: Icon }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1.5 text-sm text-tint transition-colors hover:text-main"
                                >
                                    <Icon size={16} />
                                    {label}
                                </a>
                            ))}
                        </div>
                    )}

                    <p className="mt-10 text-sm text-tint/70">
                        <span className="text-main">denoqcore@site</span>{" "}
                        ~/projects %{" "}
                        <span className="text-main">ls</span> ./screenshots
                    </p>

                    <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {project.screenshots.map((src, i) => (
                            <div
                                key={src}
                                className="overflow-hidden rounded-md border border-line bg-tinted"
                            >
                                <div className="relative aspect-video w-full">
                                    <Image
                                        src={src}
                                        alt={`${project.title} screenshot ${i + 1}`}
                                        fill
                                        sizes="(min-width: 640px) 50vw, 100vw"
                                        className="object-cover"
                                    />
                                </div>
                                <p className="border-t border-line px-3 py-2 text-xs text-tint/50">
                                    {i + 1}.jpg
                                </p>
                            </div>
                        ))}
                    </div>

                    <p className="mt-10 text-sm text-tint/70">
                        <span className="text-main">denoqcore@site</span>{" "}
                        ~/projects %{" "}
                        <span className="inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-main align-middle" />
                    </p>
                </div>
            </div>
        </section >
    );
}