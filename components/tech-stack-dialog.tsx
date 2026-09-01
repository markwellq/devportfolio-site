"use client";

import { TechStack } from "@/components/tech-stack";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog";
import { TerminalWindowIcon } from "@phosphor-icons/react/dist/csr/TerminalWindow";
import { useState } from "react";

const STACK_CATEGORIES = [
    { label: "frontend", items: ["react", "nextjs", "typescript", "tailwind"] },
    { label: "backend", items: ["laravel", "php", "redis", "octane"] },
    { label: "devtools", items: ["docker", "git", "stripe"] },
] as const;

interface TechStackProps {
    stack: readonly string[];
}

export function TechStackDialog() {
    const [open, setOpen] = useState(false);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger
                className="flex h-8 w-8 items-center justify-center rounded-md border border-line bg-tinted text-tint transition-colors hover:text-main"
                aria-label="show tech stack"
            >
                <TerminalWindowIcon size={16} />
            </DialogTrigger>

            <DialogContent
                className="w-[90vw] max-w-xl overflow-hidden rounded-lg border border-line bg-background p-0 shadow-2xl"
                showCloseButton={false}
            >
                <div className="flex items-center gap-1.5 border-b border-line bg-tinted px-4 py-2.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                    <span className="ml-2 text-xs text-tint">stack.json</span>
                </div>

                <div className="max-h-[70vh] overflow-y-auto px-5 py-4 font-mono text-sm">
                    <p className="text-main">
                        denoqcore@site <span className="text-tint">~</span> %{" "}
                        <span className="text-tint">show tech stack</span>
                    </p>

                    <div className="mt-4 space-y-4">
                        {STACK_CATEGORIES.map(({ label, items }) => (
                            <div key={label}>
                                <p className="mb-1.5 text-xs uppercase tracking-wide text-tint/70">
                                    {label}
                                </p>
                                <TechStack stack={items} />
                            </div>
                        ))}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}