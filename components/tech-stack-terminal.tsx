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

    const allTechs = STACK_CATEGORIES.flatMap(
        (category) => category.items
    );

    const resolvedCount = allTechs.filter(
        (tech) => getTechIcon(tech)
    ).length;

    const percentage = Math.round(
        (resolvedCount / allTechs.length) * 100
    );

    return (
        <div className="min-w-0 font-mono text-sm text-main">
            {/* Command */}
            <div className="mb-8">
                <p className="text-sm sm:text-base">
                    <span className="font-semibold">
                        denoqcore@site
                    </span>{" "}
                    <span className="text-tint">%</span>{" "}
                    <span>show tech stack</span>
                </p>
            </div>

            {/* Table header */}
            <div className="mb-6 hidden grid-cols-[150px_minmax(0,1fr)] md:grid">
                <span>Category</span>
                <span>Technologies</span>
            </div>

            {/* Separator */}
            <div className="mb-8 border-t border-dashed border-line" />

            {/* Categories */}
            <div className="space-y-7">
                {STACK_CATEGORIES.map((category) => (
                    <div
                        key={category.key}
                        className="
              grid
              min-w-0
              grid-cols-1
              gap-3
              md:grid-cols-[150px_minmax(0,1fr)]
              md:gap-5
            "
                    >
                        {/* Category */}
                        <div className="min-w-0">
                            <p className="text-sm font-semibold tracking-wide text-green-500 sm:text-base">
                                {category.label}
                            </p>
                        </div>

                        {/* Technologies */}
                        <div className="min-w-0">
                            <div className="flex min-w-0 flex-wrap gap-2">
                                {category.items.map((tech) => {
                                    const match = getTechIcon(tech);

                                    if (!match) {
                                        return (
                                            <span
                                                key={tech}
                                                className="
                          inline-flex
                          shrink-0
                          items-center
                          gap-2
                          rounded-xl
                          bg-tinted
                          px-3
                          py-2
                          text-xs
                          text-main
                          sm:px-4
                          sm:text-sm
                        "
                                            >
                                                <span className="h-3.5 w-3.5 rounded-sm bg-tint/30" />
                                                {tech}
                                            </span>
                                        );
                                    }

                                    const Icon = match.icon;

                                    return (
                                        <span
                                            key={tech}
                                            className="
                        inline-flex
                        shrink-0
                        items-center
                        gap-2
                        rounded-xl
                        bg-tinted
                        px-3
                        py-2
                        text-xs
                        text-main
                        transition-colors
                        duration-200
                        hover:bg-tint/10
                        sm:px-4
                        sm:text-sm
                      "
                                        >
                                            <Icon
                                                size={18}
                                                color={match.color}
                                            />

                                            <span>{tech}</span>
                                        </span>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom separator */}
            <div className="my-8 border-t border-dashed border-line" />

            {/* Status */}
            <div className="space-y-3 text-xs sm:text-sm">
                <p className="flex items-start gap-3 text-green-500">
                    <CheckIcon
                        size={18}
                        weight="bold"
                        className="mt-0.5 shrink-0"
                    />

                    <span>
                        {resolvedCount} of {allTechs.length} stacks loaded
                        successfully ({percentage}%)
                    </span>
                </p>

                <p className="flex items-center gap-3 text-main">
                    <FlagIcon
                        size={18}
                        className="shrink-0"
                    />

                    <span>
                        Render time:{" "}
                        {renderMs === null ? "…" : `${renderMs}ms`}
                    </span>
                </p>
            </div>
        </div>
    );
}