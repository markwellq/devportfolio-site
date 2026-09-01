"use client";

import { TechStackTerminal } from "@/components/tech-stack-terminal";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog";
import { TerminalWindowIcon } from "@phosphor-icons/react/dist/csr/TerminalWindow";
import { useState } from "react";

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
                className="
    !w-[calc(100vw-2rem)]
    !max-w-[1100px]
    overflow-hidden
    rounded-xl
    border
    border-line
    bg-background
    p-0
    shadow-2xl
  "
                showCloseButton={false}
            >
                <div className="flex h-14 items-center gap-2 border-b border-line bg-tinted px-5">
                    <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                    <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                    <span className="h-3 w-3 rounded-full bg-[#28c840]" />

                    <span className="absolute left-1/2 -translate-x-1/2 text-sm text-tint">
                        Tech Stack
                    </span>
                </div>

                <div className="max-h-[80vh] overflow-y-auto px-6 py-7 sm:px-8 sm:py-8">
                    <TechStackTerminal />
                </div>
            </DialogContent>
        </Dialog>
    );
}