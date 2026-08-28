"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { GlobeIcon } from "@phosphor-icons/react/ssr";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";

const labels: Record<string, string> = {
  en: "english",
  ro: "romania",
  ru: "russian",
};

export function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 640px)");
    const close = () => setOpen(false);
    mql.addEventListener("change", close);
    return () => mql.removeEventListener("change", close);
  }, []);

  return (
    <Select
      open={open}
      onOpenChange={setOpen}
      value={locale}
      onValueChange={(value) => router.replace(pathname, { locale: value as Locale })}
    >
      <SelectTrigger
        size="sm"
        className="w-auto gap-1.5 rounded-full border-none bg-transparent px-2.5 text-xs font-medium text-tint shadow-none transition-colors hover:bg-tinted/40 hover:text-main focus-visible:ring-1 focus-visible:ring-main/20 data-[state=open]:bg-tinted/40 data-[state=open]:text-main cursor-pointer"
      >
        <GlobeIcon size={14} weight="bold" className="shrink-0" />
        <SelectValue />
      </SelectTrigger>
      <SelectContent
        align="end"
        alignItemWithTrigger={false}
        className="min-w-24 rounded-xl border border-tinted/60 bg-background p-1"
      >
        {routing.locales.map((l) => (
          <SelectItem
            key={l}
            value={l}
            className="rounded-lg text-xs text-tint transition-colors data-highlighted:bg-tinted/50 data-highlighted:text-main cursor-pointer"
          >
            {labels[l] ?? l.toUpperCase()}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}