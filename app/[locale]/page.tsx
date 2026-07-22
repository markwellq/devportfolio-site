import { Link } from "@/i18n/navigation";
import {
  BookIcon,
  GithubLogoIcon,
  TelegramLogoIcon
} from "@phosphor-icons/react/ssr";
import { getTranslations, setRequestLocale } from "next-intl/server";

const LINKS = [
  { key: "content", label: "my projects", href: "/projects", icon: BookIcon, external: false },
  { key: "github", label: "markwellq", href: "https://github.com/your-username", icon: GithubLogoIcon, external: true },
  { key: "telegram", label: "@markwellxd", href: "https://t.me/markwellxd", icon: TelegramLogoIcon, external: true },
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
        <h1 className="text-2xl font-medium tracking-tight text-main sm:text-1xl">
          Denis Beccev
        </h1>
        <p className="text-md text-tint">
          {t("role")}
        </p>
        <p className="max-w-lg text-sm leading-7 text-tint mt-10">
          {t("description")}
        </p>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-main">
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
    </section>
  );
}