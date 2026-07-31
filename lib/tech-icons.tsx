import type { IconType } from "react-icons";
import {
    SiDocker,
    SiJavascript,
    SiLaravel,
    SiMysql,
    SiNextdotjs,
    SiPhp,
    SiPostgresql,
    SiReact,
    SiTailwindcss,
    SiTypescript,
    SiVuedotjs,
} from "react-icons/si";

type TechIcon = {
    icon: IconType;
    color: string;
};

const TECH_MAP: Record<string, TechIcon> = {
    laravel: { icon: SiLaravel, color: "#FF2D20" },
    mysql: { icon: SiMysql, color: "#4479A1" },
    tailwind: { icon: SiTailwindcss, color: "#06B6D4" },
    javascript: { icon: SiJavascript, color: "#F7DF1E" },
    php: { icon: SiPhp, color: "#777BB4" },
    react: { icon: SiReact, color: "#61DAFB" },
    nextjs: { icon: SiNextdotjs, color: "#000000" },
    "next.js": { icon: SiNextdotjs, color: "#000000" },
    typescript: { icon: SiTypescript, color: "#3178C6" },
    postgresql: { icon: SiPostgresql, color: "#4169E1" },
    docker: { icon: SiDocker, color: "#2496ED" },
    vue: { icon: SiVuedotjs, color: "#4FC08D" },
};

export function getTechIcon(name: string) {
    return TECH_MAP[name.trim().toLowerCase()] ?? null;
}