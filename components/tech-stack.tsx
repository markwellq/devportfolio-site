import { getTechIcon } from "@/lib/tech-icons";

export function TechStack({ stack }: { stack: string[] }) {
    return (
        <div className="flex flex-wrap gap-1.5">
            {stack.map((tech) => {
                const match = getTechIcon(tech);
                return (
                    <span
                        key={tech}
                        className="flex items-center gap-1.5 rounded-md border border-white/10 bg-background px-2 py-1 font-mono text-[11px] text-tint transition-colors hover:border-white/20 hover:text-main select-none"
                    >
                        {match ? (
                            <match.icon size={12} color={match.color} />
                        ) : (
                            <span className="h-3 w-3 rounded-sm bg-tinted" />
                        )}
                        {tech}
                    </span>
                );
            })}
        </div>
    );
}