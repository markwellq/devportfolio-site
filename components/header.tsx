"use client";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { LocaleSwitcher } from "./locale-switcher";

const NAV = [
    { href: "/", key: "home" },
    { href: "/projects", key: "projects" },
    { href: "/#stack", key: "stack" },
] as const;

function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
    const t = useTranslations("nav");
    const pathname = usePathname();

    return (
        <>
            {NAV.map((item) => {
                const active =
                    item.href === "/"
                        ? pathname === "/"
                        : pathname.startsWith(item.href);

                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        onClick={onNavigate}
                        className={cn(
                            "text-sm font-medium transition-colors",
                            active
                                ? "text-foreground"
                                : "text-muted-foreground hover:text-foreground"
                        )}
                    >
                        {t(item.key)}
                    </Link>
                );
            })}
        </>
    );
}

export function Header({ name }: { name: string }) {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-40 flex md:hidden items-center justify-between border-b border-border bg-background/85 px-4 py-3 backdrop-blur">
            <Link href="/" className="font-semibold text-foreground">
                {name}
            </Link>

            <div className="flex items-center gap-2">
                <LocaleSwitcher />
                <Sheet open={open} onOpenChange={setOpen}>
                    <SheetTrigger
                        aria-label="Menu"
                        render={<Button variant="ghost" size="icon" />}
                    >
                        <Menu className="size-5" />
                    </SheetTrigger>
                    <SheetContent side="right" className="w-64">
                        <SheetHeader>
                            <SheetTitle>{name}</SheetTitle>
                        </SheetHeader>
                        <nav className="flex flex-col gap-4 px-4">
                            <NavLinks onNavigate={() => setOpen(false)} />
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}