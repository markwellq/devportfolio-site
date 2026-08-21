"use client";

import { CaretRight, Image as ImageIcon, List, SquaresFour } from "@phosphor-icons/react";
import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

function filenameFor(src: string, index: number) {
    const last = src.split("/").pop() ?? "";
    const cleaned = last.split("?")[0];
    if (cleaned && /\.[a-z0-9]+$/i.test(cleaned)) return cleaned;
    return `screenshot-${String(index + 1).padStart(2, "0")}.png`;
}

export function ProjectGallery({
    images,
    alt,
}: {
    images: string[];
    alt: string;
}) {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);
    const [hovered, setHovered] = useState<number | null>(null);

    const openAt = (i: number) => {
        setIndex(i);
        setOpen(true);
    };

    return (
        <>
            <div className="overflow-hidden rounded-lg border border-line font-mono">
                <div className="flex items-center gap-3 border-b border-line bg-tinted/40 px-4 py-3">
                    <div className="flex items-center gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/70" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/70" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/70" />
                    </div>
                    <span className="text-xs text-tint/60">
                        Screenshots — Finder
                    </span>
                </div>

                <div className="flex items-center justify-between border-b border-line px-4 py-2.5 font-body">
                    <div className="flex items-center gap-1 text-xs text-tint/60">
                        <span>Projects</span>
                        <CaretRight size={10} className="text-tint/40" />
                        <span className="text-main">Screenshots</span>
                    </div>
                    <div className="flex items-center gap-2 text-tint/50">
                        <SquaresFour size={14} weight="fill" />
                        <List size={14} />
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-x-2 gap-y-4 p-5 font-body sm:grid-cols-4 md:grid-cols-5">
                    {images.map((src, i) => (
                        <button
                            key={src}
                            onClick={() => openAt(i)}
                            onMouseEnter={() => setHovered(i)}
                            onMouseLeave={() => setHovered(null)}
                            className="flex flex-col items-center gap-1.5 rounded-md p-2 text-center transition-colors"
                            style={{
                                backgroundColor:
                                    hovered === i
                                        ? "color-mix(in srgb, var(--color-tint) 12%, transparent)"
                                        : "transparent",
                            }}
                        >
                            <div className="relative aspect-square w-full overflow-hidden rounded-sm border border-line/60 shadow-sm">
                                <Image
                                    src={src}
                                    alt={`${alt} ${i + 1}`}
                                    fill
                                    sizes="(min-width: 768px) 20vw, 33vw"
                                    className="object-cover"
                                    priority={i === 0}
                                />
                            </div>
                            <span
                                className="max-w-full truncate rounded px-1.5 py-0.5 text-[11px] text-tint/70"
                                style={{
                                    backgroundColor:
                                        hovered === i
                                            ? "var(--color-main)"
                                            : "transparent",
                                    color:
                                        hovered === i
                                            ? "var(--color-background)"
                                            : undefined,
                                }}
                            >
                                {filenameFor(src, i)}
                            </span>
                        </button>
                    ))}
                </div>

                <div className="flex items-center gap-1.5 border-t border-line px-4 py-2 text-[11px] text-tint/50 font-body">
                    <ImageIcon size={12} />
                    {images.length} {images.length === 1 ? "item" : "items"}
                </div>
            </div>

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                index={index}
                slides={images.map((src) => ({ src }))}
                styles={{
                    container: { backgroundColor: "rgba(0, 0, 0, 0.9)" },
                }}
            />
        </>
    );
}
