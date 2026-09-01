"use client";

import { STACK_CATEGORIES } from "@/data/tech-stack";
import { getTechIcon } from "@/lib/tech-icons";
import { CheckIcon } from "@phosphor-icons/react/dist/csr/Check";
import { FlagIcon } from "@phosphor-icons/react/dist/csr/Flag";
import { useEffect, useRef, useState } from "react";

export function TechStackTerminal() {
    const startRef = useRef(performance.now());
    const [renderMs, setRenderMs] = useState<number | null>(null);

    useEffect(() => {
        setRenderMs(Math.round(performance.now() - startRef.current));
    }, []);

    const allTechs = STACK_CATEGORIES.flatMap((category) => category.items);
    const resolvedCount = allTechs.filter((tech) => getTechIcon(tech)).length;
    const percentage = Math.round((resolvedCount / allTechs.length) * 100);

    return (
        <div className="font-mono text-sm">
            <p className="text-main">
                denoqcore@site <span className="text-tint">~</span> %{" "}
                <span className="text-tint">show tech stack</span>
            </p>

            <div className="mt-6 space-y-6">
                {STACK_CATEGORIES.map((category) => (
                    <div key={category.key}>
                        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-green-500">
                            {category.label}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {category.items.map((tech) => {
                                const match = getTechIcon(tech);
                                return (
                                    <span
                                        key={tech}
                                        className="flex items-center gap-2 rounded-lg bg-tinted px-3 py-1.5 text-xs text-main"
                                    >
                                        {match ? (
                                            <match.icon size={14} color={match.color} />
                                        ) : (
                                            <span className="h-3.5 w-3.5 rounded-sm bg-tint/30" />
                                        )}
                                        {tech}
                                    </span>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>

            <div className="my-5 border-t border-dashed border-line" />

            <div className="space-y-1 text-xs">
                <p className="flex items-center gap-2 text-green-500">
                    <CheckIcon size={14} weight="bold" />
                    {resolvedCount} of {allTechs.length} stacks loaded successfully ({percentage}%)
                </p>
                <p className="flex items-center gap-2 text-tint">
                    <FlagIcon size={14} />
                    Render time: {renderMs === null ? "…" : `${renderMs}ms`}
                </p>
            </div>
        </div>
    );
}