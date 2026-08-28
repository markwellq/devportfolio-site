import { DiplomaGallery } from "@/components/diploma-gallery";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { Link } from "@/i18n/navigation";
import { ArrowSquareOutIcon } from "@phosphor-icons/react/ssr";
import { getTranslations, setRequestLocale } from "next-intl/server";

const VERIFY_URL = "https://diploma.itstep.org/";
const DIPLOMA_CODE = "KIY-019053";

export default async function DiplomaPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);

    const t = await getTranslations("diplom");

    return (
        <section className="mx-auto max-w-3xl px-4 pt-20 pb-28 sm:pt-28">
            <div className="flex items-center justify-between font-mono">
                <Link
                    href="/"
                    className="text-lg text-tint transition-colors hover:text-main"
                >
                    <span className="text-main">denoqcore@site\</span>
                    <span className="text-tint/60"> ~ % \</span>{" "}
                    {t("back")}
                </Link>

                <div className="hidden font-body sm:flex">
                    <LocaleSwitcher />
                </div>
            </div>

            <div className="mt-10 overflow-hidden rounded-lg border border-line font-mono sm:mt-12">
                <div className="flex items-center gap-1.5 border-b border-line bg-tinted/40 px-4 py-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/70" />

                    <span className="ml-2 text-xs text-tint/60">
                        diploma.json — zsh
                    </span>
                </div>

                <div className="p-6 sm:p-8">
                    <p className="text-sm text-tint/70">
                        <span className="text-main">denoqcore@site\</span>{" "}
                        ~ % <span className="text-main">cat\</span> diploma.json
                    </p>

                    <div className="mt-6 space-y-1.5 text-sm">
                        <p className="text-tint/80">
                            <span className="text-tint/50">{t('code')}:</span>{" "}
                            <span className="text-main">"{DIPLOMA_CODE}"</span>
                        </p>
                        <p className="text-tint/80">
                            <span className="text-tint/50">{t('surname')}:</span>{" "}
                            <span className="text-main">"Beccev Denis"</span>
                        </p>
                        <p className="text-tint/80">
                            <span className="text-tint/50">{t('verify')}:</span>{" "}
                            <a
                                href={VERIFY_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-main hover:underline"
                            >
                                diploma.itstep.org
                                <ArrowSquareOutIcon size={12} />
                            </a>
                        </p>
                    </div>
                </div>
            </div>

            <DiplomaGallery />
        </section>
    );
}