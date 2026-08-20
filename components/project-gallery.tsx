"use client";

import { Image as ImageIcon } from "@phosphor-icons/react";
import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export function ProjectGallery({
    images,
    alt,
}: {
    images: string[];
    alt: string;
}) {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    const openAt = (i: number) => {
        setIndex(i);
        setOpen(true);
    };

    const main = images[0];
    const rest = images.slice(1, 5);
    const remaining = images.length - 5;

    return (
        <>
            <div className="grid grid-cols-4 grid-rows-2 gap-2 overflow-hidden rounded-xl border border-line">
                <button
                    onClick={() => openAt(0)}
                    className="relative col-span-4 row-span-2 aspect-video sm:col-span-2 sm:aspect-auto"
                >
                    <Image
                        src={main}
                        alt={alt}
                        fill
                        sizes="(min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-opacity hover:opacity-90"
                        priority
                    />
                </button>

                {rest.map((src, i) => (
                    <button
                        key={src}
                        onClick={() => openAt(i + 1)}
                        className="relative hidden aspect-square sm:block"
                    >
                        <Image
                            src={src}
                            alt={`${alt} ${i + 2}`}
                            fill
                            sizes="25vw"
                            className="object-cover transition-opacity hover:opacity-90"
                        />
                        {i === 3 && remaining > 0 && (
                            <div className="absolute inset-0 flex items-center justify-center bg-background/70 text-sm font-medium text-main">
                                +{remaining}
                            </div>
                        )}
                    </button>
                ))}
            </div>

            <button
                onClick={() => openAt(0)}
                className="mt-3 flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-xs text-main transition-colors hover:bg-tinted/60 sm:hidden"
            >
                <ImageIcon size={14} />
                показать все фото ({images.length})
            </button>

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