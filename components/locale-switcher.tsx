"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

const labels: Record<string, string> = {
  ru: "RU",
  en: "EN",
  ro: "RO",
};

export function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-1 text-xs font-mono">
      {routing.locales.map((l, i) => (
        <span key={l} className="flex items-center gap-1">
          {i > 0 && <span className="text-muted-foreground/40">/</span>}
          <button
            type="button"
            onClick={() => router.replace(pathname, { locale: l })}
            className={cn(
              "px-1.5 py-1 rounded-md transition-colors hover:text-foreground",
              l === locale
                ? "text-foreground"
                : "text-muted-foreground"
            )}
            aria-current={l === locale}
          >
            {labels[l] ?? l.toUpperCase()}
          </button>
        </span>
      ))}
    </div>
  );
}
