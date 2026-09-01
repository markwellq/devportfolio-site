import type { IconType } from "react-icons";
import {
    SiAlpinedotjs,
    SiCss,
    SiDocker,
    SiFigma,
    SiGit,
    SiGithub,
    SiJavascript,
    SiLaravel,
    SiLivewire,
    SiMongodb,
    SiMysql,
    SiNextdotjs,
    SiNodedotjs,
    SiPhp,
    SiPostgresql,
    SiPostman,
    SiReact,
    SiRedis,
    SiSass,
    SiStripe,
    SiTailwindcss,
    SiTypescript,
    SiVercel,
    SiVuedotjs,
    SiXcode
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

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
    mongodb: { icon: SiMongodb, color: "#00ED64" },
    postgresql: { icon: SiPostgresql, color: "#4169E1" },
    alpine: { icon: SiAlpinedotjs, color: "#77C1D2" },
    javascript: { icon: SiJavascript, color: "#F7DF1E" },
    typescript: { icon: SiTypescript, color: "#3178C6" },
    livewire: { icon: SiLivewire, color: "#FF4D92" },
    vue: { icon: SiVuedotjs, color: "#4FC08D" },
    tailwind: { icon: SiTailwindcss, color: "#06B6D4" },
    css: { icon: SiCss, color: "#2862E9" },
    sass: { icon: SiSass, color: "#C66394" },
    redis: { icon: SiRedis, color: "#FF4438" },
    stripe: { icon: SiStripe, color: "#533AFD" },
    "node.js": { icon: SiNodedotjs, color: "#5CAD47" },
    octane: { icon: SiLaravel, color: "#FF2D20" },
    git: { icon: SiGit, color: "#E94D32" },
    vscode: { icon: VscVscode, color: "#25AEF3" },
    github: { icon: SiGithub, color: "#FFF" },
    figma: { icon: SiFigma, color: "#9D56F7" },
    xcode: { icon: SiXcode, color: "#25AEF3" },
    postman: { icon: SiPostman, color: "#F76936" },
    vercel: { icon: SiVercel, color: "#FFF6" },


};

export function getTechIcon(name: string) {
    return TECH_MAP[name.trim().toLowerCase()] ?? null;
}