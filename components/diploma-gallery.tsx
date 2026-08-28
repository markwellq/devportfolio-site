"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const IMAGES = [
    "/diplom/diplom-top.jpg",
    "/diplom/diplom-back.jpg",
];

export function DiplomaGallery() {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    const openAt = (i: number) => {
        setIndex(i);
        setOpen(true);
    };

    return (
        <>
            <div className="mt-6 flex flex-col gap-4 sm:mt-8">
                {IMAGES.map((src, i) => (
                    <button
                        key={src}
                        onClick={() => openAt(i)}
                        className="relative w-full overflow-hidden rounded-sm"
                    >
                        <Image
                            src={src}
                            alt={
                                i === 0
                                    ? "Diploma front side"
                                    : "Diploma back side"
                            }
                            width={1200}
                            height={800}
                            sizes="(min-width: 640px) 768px, 100vw"
                            className="h-auto w-full object-contain transition-transform duration-300 hover:scale-[1.01] cursor-pointer"
                            priority={i === 0}
                        />
                    </button>
                ))}
            </div>

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                index={index}
                slides={IMAGES.map((src) => ({ src }))}
                styles={{
                    container: {
                        backgroundColor: "rgba(0, 0, 0, 0.9)",
                    },
                }}
            />
        </>
    );
}