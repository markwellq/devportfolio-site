import type { IconType } from "react-icons";
import {
    SiAlpinedotjs,
    SiDocker,
    SiGit,
    SiJavascript,
    SiLaravel,
    SiLivewire,
    SiMysql,
    SiNextdotjs,
    SiPhp,
    SiPostgresql,
    SiReact,
    SiRedis,
    SiStripe,
    SiTailwindcss,
    SiTypescript,
    SiVuedotjs
} from "react-icons/si";

type TechIcon = {
    icon: IconType;
    color: string;
};

const TECH_MAP: Record<string, TechIcon> = {
    docker: { icon: SiDocker, color: "#2496ED" },
    laravel: { icon: SiLaravel, color: "#FF2D20" },
    react: { icon: SiReact, color: "#61DAFB" },
    nextjs: { icon: SiNextdotjs, color: "#000000" },
    "next.js": { icon: SiNextdotjs, color: "#000000" },
    php: { icon: SiPhp, color: "#777BB4" },
    mysql: { icon: SiMysql, color: "#4479A1" },
    postgresql: { icon: SiPostgresql, color: "#4169E1" },
    alpine: { icon: SiAlpinedotjs, color: "#77C1D2" },
    javascript: { icon: SiJavascript, color: "#F7DF1E" },
    typescript: { icon: SiTypescript, color: "#3178C6" },
    livewire: { icon: SiLivewire, color: "#FF4D92" },
    vue: { icon: SiVuedotjs, color: "#4FC08D" },
    tailwind: { icon: SiTailwindcss, color: "#06B6D4" },
    redis: { icon: SiRedis, color: "#FF4438" },
    stripe: { icon: SiStripe, color: "#533AFD" },
    octane: { icon: SiLaravel, color: "#FF2D20" },
    git: { icon: SiGit, color: "#E94D32" },
};

export function getTechIcon(name: string) {
    return TECH_MAP[name.trim().toLowerCase()] ?? null;
}