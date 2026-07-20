import { Link } from "@/i18n/navigation";
import {
  BookOpenIcon,
  GithubLogoIcon,
  TelegramLogoIcon,
} from "@phosphor-icons/react/ssr";
import { getTranslations, setRequestLocale } from "next-intl/server";

const LINKS = [
  { key: "content", label: "Content", href: "/projects", icon: BookOpenIcon, external: false },
  { key: "github", label: "denisbekcev", href: "https://github.com/your-username", icon: GithubLogoIcon, external: true },
  { key: "telegram", label: "@your_username", href: "https://t.me/your-username", icon: TelegramLogoIcon, external: true },
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
    <section className="mx-auto max-w-3xl px-4 pt-16 sm:pt-24">
      <div className="space-y-2">
        <h1 className="text-2xl font-medium tracking-tight text-foreground sm:text-1xl">
          Denis Beccev
        </h1>

        <p className="text-lg font-medium text-muted-foreground">
          Full Stack Web Developer
        </p>

        <p className="max-w-lg text-sm leading-7 text-muted-foreground">
          I build modern web applications with Laravel, Next.js, React and TypeScript,
          focusing on performance, clean architecture and user experience.
        </p>
      </div>


      <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
        {LINKS.map(({ key, label, href, icon: Icon, external }) =>
          external ? (
            <a
              key={key}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 transition-colors hover:text-foreground"
            >
              <Icon size={16} />
              {label}
            </a>
          ) : (
            <Link
              key={key}
              href={href}
              className="flex items-center gap-1.5 transition-colors hover:text-foreground"
            >
              <Icon size={16} />
              {label}
            </Link>
          )
        )}
      </div>
    </section >
  );
}