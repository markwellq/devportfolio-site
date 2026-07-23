"use client";

import { LocaleSwitcher } from "./locale-switcher";

export function Header() {
    return (
        <header className="sticky top-0 z-40 flex items-center justify-end bg-background/85 px-4 py-3 backdrop-blur sm:hidden">
            <LocaleSwitcher />
        </header>
    );
}