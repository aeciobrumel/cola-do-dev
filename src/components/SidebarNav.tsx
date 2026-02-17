import { LayoutGrid, Star } from "lucide-react";
import { CATEGORY_META } from "@/src/config/categories";
import type { CheatCategory } from "@/src/types/cheats";

export type SidebarFilter = "Todas" | CheatCategory | "Favoritos";

type SidebarNavProps = {
  options: readonly SidebarFilter[];
  activeOption: SidebarFilter;
  counts: Record<SidebarFilter, number>;
  onOptionChange: (option: SidebarFilter) => void;
};

function isCheatCategory(option: SidebarFilter): option is CheatCategory {
  return option !== "Todas" && option !== "Favoritos";
}

export function SidebarNav({
  options,
  activeOption,
  counts,
  onOptionChange,
}: SidebarNavProps) {
  return (
    <nav aria-label="Categorias">
      <ul className="space-y-1">
        {options.map((option) => {
          const isActive = option === activeOption;

          return (
            <li key={option}>
              <button
                type="button"
                onClick={() => onOptionChange(option)}
                className={[
                  "flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2",
                  isActive
                    ? "bg-[var(--accent)]/12 text-[var(--accent-strong)]"
                    : "text-[var(--muted)] hover:bg-[var(--surface-strong)] hover:text-[var(--text)]",
                ].join(" ")}
                aria-current={isActive ? "page" : undefined}
              >
                {option === "Todas" ? (
                  <LayoutGrid className="h-4 w-4 shrink-0" aria-hidden="true" />
                ) : option === "Favoritos" ? (
                  <Star className="h-4 w-4 shrink-0" aria-hidden="true" />
                ) : (
                  (() => {
                    const Icon = CATEGORY_META[option].icon;
                    return <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />;
                  })()
                )}

                <span className="truncate">
                  {isCheatCategory(option) ? CATEGORY_META[option].label : option}
                </span>

                <span
                  className={[
                    "ml-auto rounded-md px-1.5 py-0.5 text-xs",
                    isActive
                      ? "bg-[var(--accent)]/18 text-[var(--accent-strong)]"
                      : "bg-slate-100 text-slate-500",
                  ].join(" ")}
                >
                  {counts[option] ?? 0}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
