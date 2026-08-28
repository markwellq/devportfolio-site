"use client";

import { SquaresFourIcon } from "@phosphor-icons/react";
import { useTranslations } from "next-intl";
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
    const t = useTranslations("main");

    const openAt = (i: number) => {
        setIndex(i);
        setOpen(true);
    };

    const main = images[0];
    const rest = images.slice(1, 5);
    const remaining = images.length - 5;
    const hasRest = rest.length > 0;

    return (
        <>
            <div className="relative grid grid-cols-4 grid-rows-2 gap-2 overflow-hidden rounded-2xl">
                <button
                    onClick={() => openAt(0)}
                    className={`relative aspect-square overflow-hidden ${hasRest
                        ? "col-span-4 row-span-2 sm:col-span-2"
                        : "col-span-4 row-span-2"
                        }`}
                >
                    <Image
                        src={main}
                        alt={alt}
                        fill
                        sizes="(min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
                        priority
                    />
                </button>

                {rest.map((src, i) => (
                    <button
                        key={`${i}-${src}`}
                        onClick={() => openAt(i + 1)}
                        className="relative col-span-1 row-span-1 hidden aspect-square overflow-hidden sm:block"
                    >
                        <Image
                            src={src}
                            alt={`${alt} ${i + 2}`}
                            fill
                            sizes="25vw"
                            className="object-cover transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
                        />
                        {i === rest.length - 1 && remaining > 0 && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-lg font-medium text-white">
                                +{remaining}
                            </div>
                        )}
                    </button>
                ))}
                <button
                    onClick={() => openAt(0)}
                    className="absolute right-4 bottom-4 flex items-center gap-1.5 rounded-sm bg-background px-3 py-2 text-xs font-medium text-main shadow-sm transition-colors hover:bg-tinted cursor-pointer"
                >
                    <SquaresFourIcon size={14} weight="fill" />
                    {t("show-all")}· {images.length}
                </button>
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