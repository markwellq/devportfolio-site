import { Link } from "@/i18n/navigation";
import { getAllProjects } from "@/lib/projects";
import { ArrowLeftIcon } from "@phosphor-icons/react/ssr";
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
        <section className="mx-auto max-w-3xl px-4 pt-16 sm:pt-24">
            <Link
                href="/"
                className="inline-flex items-center gap-1.5 text-sm text-tint transition-colors hover:text-foreground"
            >
                <ArrowLeftIcon size={16} />
                {t("back")}
            </Link>

            <div className="mt-6 space-y-2">
                <h1 className="text-2xl font-medium tracking-tight text-main sm:text-1xl">
                    {t("title")}
                </h1>
                <p className="max-w-lg text-sm leading-7 text-tint">
                    {t("description")}
                </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
                {projects.map((project) => (
                    <Link
                        key={project.slug}
                        href={`/projects/${project.slug}`}
                        className="group overflow-hidden rounded-lg border border-line transition-colors hover:border-foreground/30"
                    >
                        <div className="relative aspect-video w-full overflow-hidden bg-line">
                            <Image
                                src={project.cover}
                                alt={project.title}
                                fill
                                sizes="(max-width: 640px) 100vw, 50vw"
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>

                        <div className="p-4">
                            <h2 className="text-base font-medium text-main">
                                {project.title}
                            </h2>
                            <p className="mt-1 text-sm leading-6 text-tint">
                                {project.description}
                            </p>

                            <div className="mt-3 flex flex-wrap gap-2">
                                {project.stack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="rounded-full border border-line px-2.5 py-0.5 text-xs text-tint"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}