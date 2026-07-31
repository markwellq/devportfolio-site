import { LocaleSwitcher } from "@/components/locale-switcher";
import { TechStack } from "@/components/tech-stack";
import { Link } from "@/i18n/navigation";
import { getAllProjects } from "@/lib/projects";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";

export default async function ProjectsPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations("projects");
    const projects = getAllProjects();

    return (
        <section className="mx-auto max-w-3xl px-4 pt-20 pb-28 font-mono sm:pt-28">
            <div className="flex items-center justify-between">
                <Link
                    href="/"
                    className="text-sm text-tint transition-colors hover:text-main"
                >
                    <span className="text-main">denoqcore@site</span>
                    <span className="text-tint/60"> ~ % </span>
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
                        projects — zsh
                    </span>
                </div>

                <div className="p-5 sm:p-8">
                    <p className="text-sm text-tint/70">
                        <span className="text-main">denoqcore@site</span> ~ %{" "}
                        <span className="text-main">cat</span> about.txt
                    </p>

                    <p className="mt-10 text-sm text-tint/70">
                        <span className="text-main">denoqcore@site</span> ~ %{" "}
                        <span className="text-main">ls</span> -la ./projects
                    </p>

                    <div className="mt-5 flex flex-col gap-1">
                        {projects.map((project, i) => (
                            <Link
                                key={project.slug}
                                href={`/projects/${project.slug}`}
                                className="group block"
                            >
                                <div className="-mx-3 flex flex-col gap-2 rounded-md border-b border-line px-3 py-4 transition-colors hover:bg-tinted/60 sm:flex-row sm:items-center sm:gap-4 sm:py-4">
                                    <div className="flex flex-1 flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4 sm:min-w-0">
                                        <span className="text-tint/40">
                                            {String(i + 1).padStart(2, "0")}
                                        </span>
                                        <span className="font-medium text-main">
                                            {project.title}
                                        </span>
                                        <span className="text-tint/70 sm:min-w-0 sm:flex-1 sm:truncate">
                                            # {project.description}
                                        </span>
                                    </div>

                                    <div className="shrink-0 pl-9 sm:pl-0 flex gap-2 items-center">
                                        <TechStack stack={project.stack} />

                                        <span className="ml-1 text-xs tracking-[0.3em] text-tint/40">
                                            ..
                                        </span>
                                    </div>
                                </div>

                                <div className="grid grid-rows-[0fr] overflow-hidden transition-[grid-template-rows] duration-300 ease-out group-hover:grid-rows-[1fr]">
                                    <div className="min-h-0">
                                        <div className="my-3 flex items-center gap-4 rounded-md border border-line bg-background p-3">
                                            <div className="relative aspect-video w-36 shrink-0 overflow-hidden rounded border border-line bg-tinted sm:w-44">
                                                <Image
                                                    src={project.cover}
                                                    alt={project.title}
                                                    fill
                                                    sizes="176px"
                                                    className="object-cover"
                                                />
                                            </div>
                                            <p className="text-xs leading-5 text-tint/60">
                                                <span className="text-main">
                                                    cat
                                                </span>{" "}
                                                {project.slug}.png
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <p className="mt-6 text-sm text-tint/70">
                        <span className="text-main">denoqcore@site</span> ~ %{" "}
                        <span className="inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-main align-middle" />
                    </p>
                </div>
            </div>
        </section>
    );
}