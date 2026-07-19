
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { GithubLogoIcon } from "@phosphor-icons/react/ssr";
import { ArrowRight, Mail } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";

const STACK = [
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
] as const;

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("home");

  return (
    <>
      <section className="mx-auto flex min-h-[calc(100vh-57px)] max-w-3xl flex-col justify-center gap-6 px-4 py-16 md:min-h-screen">
        <p className="text-sm font-medium text-brand">
          {t("greeting")}
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          {t("title")}
        </h1>
        <p className="max-w-xl text-base text-muted-foreground sm:text-lg">
          {t("description")}
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Button nativeButton={false} render={<Link href="/projects" />}>
            {t("cta.projects")}
            <ArrowRight className="size-4" />
          </Button>
          <Button
            nativeButton={false}
            variant="outline"
            render={<a href="mailto:hello@example.com" />}
          >
            <Mail className="size-4" />
            {t("cta.contact")}
          </Button>
        </div>

        <GithubLogoIcon size={32} />

      </section >

      <section
        id="stack"
        className="border-t border-border bg-surface px-4 py-16"
      >
        <div className="mx-auto max-w-3xl">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-brand">
            {t("stack.title")}
          </h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {STACK.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border bg-background px-3 py-1 text-sm text-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}