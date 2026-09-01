import { LocaleSwitcher } from "@/components/locale-switcher";
import { TechStackDialog } from "@/components/tech-stack-dialog";
import database from "@/data/site.json";
import { Link } from "@/i18n/navigation";
import type { Availability } from "@/types/project";
import {
  BookIcon,
  CertificateIcon,
  FileTextIcon,
  GithubLogoIcon,
  TelegramLogoIcon,
} from "@phosphor-icons/react/ssr";
import { getTranslations, setRequestLocale } from "next-intl/server";

const LINKS = [
  { key: "content", labelKey: "content", href: "/projects", icon: BookIcon, external: false },
  { key: "github", label: "denoqcore", href: "https://github.com/denoqcore", icon: GithubLogoIcon, external: true },
  { key: "telegram", label: "@markwellxd", href: "https://t.me/markwellxd", icon: TelegramLogoIcon, external: true },
] as const;

const DOCS = [
  { key: "diploma", label: "diploma", href: "/diploma", icon: CertificateIcon, external: false },
  { key: "cv", label: "cv", href: "CV/CV_Beccev_Denis.pdf", icon: FileTextIcon, external: true },
] as const;



export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("main");
  const { availability } = database as { availability: Availability };
  const { available, location } = availability;

  return (
    <section className="mx-auto max-w-3xl px-4 pt-16 sm:pt-24">

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-medium tracking-tight text-main">
            Hello, i'm Denis Beccev
          </h1>

          <div className="hidden sm:flex">
            <LocaleSwitcher />
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-x-2 text-md text-tint">
          <span>{t("role")}</span>
          <span className="text-tint/50">/</span>
          <span className="flex items-center justify-center gap-1.5">
            <span
              className={`h-2.5 w-2.5 rounded-full border-2 ${available ? "border-[#07821a]" : "border-[#ff5f57]"
                }`}
            />
            {t(available ? "availableStatus" : "unavailableStatus", { location })}
          </span>
        </div>

        <p className="mt-10 max-w-lg text-sm leading-7 text-tint">
          {t("description")}
        </p>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-tint">
        {LINKS.map(({ key, href, icon: Icon, external, ...rest }) => {
          const label = "labelKey" in rest ? t(rest.labelKey) : rest.label;
          return external ? (
            <a
              key={key}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 transition-colors hover:text-main"
            >
              <Icon size={16} />
              {label}
            </a>
          ) : (
            <Link
              key={key}
              href={href}
              className="group flex items-center gap-1.5 rounded-md border border-line bg-main px-3 py-1.5 text-background transition-all duration-200 hover:bg-main/90"
            >
              <Icon size={16} />
              {label}
              <span className="ml-0.5 transition-transform duration-200 group-hover:translate-x-0.5">
                →
              </span>
            </Link>
          );
        })}
      </div>

      <div className="mt-auto flex flex-wrap items-center justify-center gap-x-3 gap-y-3 pt-84 pb-4 text-sm text-tint">
        {DOCS.map(({ key, label, href, icon: Icon, external }) =>
          external ? (
            <a
              key={key}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-1.5 transition-colors hover:border-main hover:text-main"
            >
              <Icon size={16} />
              {label}
            </a>
          ) : (
            <Link
              key={key}
              href={href}
              className="flex items-center gap-1.5 px-3.5 py-1.5 transition-colors hover:border-main hover:text-main"
            >
              <Icon size={16} />
              {label}
            </Link>
          )
        )}
      </div>

      <div>
        <TechStackDialog />
      </div>
    </section >
  );
}