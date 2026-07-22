import { Header } from "@/components/header";
import { routing } from "@/i18n/routing";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import "../globals.css";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Denis Beccev",
  description: "Full Stack Web Developer",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body className="bg-background">
        <NextIntlClientProvider>
          <Header name="Denis Bekcev" />
          <main>{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}