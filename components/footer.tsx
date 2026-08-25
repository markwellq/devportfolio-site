import {
    EnvelopeIcon,
    GithubLogoIcon,
    XLogoIcon,
} from "@phosphor-icons/react/ssr";
import Image from "next/image";

const SOCIALS = [
    {
        key: "github",
        label: "markwellq",
        href: "https://github.com/markwellq",
        icon: GithubLogoIcon,
    },
    {
        key: "x",
        label: "@denoqcore",
        href: "https://x.com/denoqcore",
        icon: XLogoIcon,
    },
    {
        key: "mail",
        label: "deni.core@icloud.com",
        href: "mailto:deni.core@icloud.com",
        icon: EnvelopeIcon,
    },
] as const;

export function Footer() {
    return (
        <footer className="mx-auto max-w-3xl px-4 py-10">
            <div className="flex w-full flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-tinted/60 pt-6">
                {SOCIALS.map(({ key, label, href, icon: Icon }) => (
                    <a
                        key={key}
                        href={href}
                        target={key === "mail" ? undefined : "_blank"}
                        rel={key === "mail" ? undefined : "noreferrer"}
                        className="flex items-center gap-1.5 text-sm text-tint transition-colors hover:text-main"
                    >
                        <Icon size={18} weight="regular" />
                        {label}
                    </a>
                ))}
            </div>

            <div className="mt-8 flex justify-center">
                <Image
                    src="/logo-d.png"
                    alt="Denis Beccev"
                    width={64}
                    height={64}
                    className="opacity-60  hover:opacity-100 hover:scale-105 transition-all"
                />
            </div>
        </footer>
    );
}