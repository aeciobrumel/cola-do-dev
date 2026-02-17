import type { CheatCategory } from "@/src/types/cheats";

type CategoryFilterOption = CheatCategory | "Todas";
type CategoryCountMap = Record<CategoryFilterOption, number>;

type FilterBarProps = {
  options: readonly CategoryFilterOption[];
  activeOption: CategoryFilterOption;
  onOptionChange: (option: CategoryFilterOption) => void;
  counts: CategoryCountMap;
};

export function FilterBar({
  options,
  activeOption,
  onOptionChange,
  counts,
}: FilterBarProps) {
  return (
    <nav aria-label="Filtro por categoria">
      <div className="flex flex-wrap gap-1.5">
        {options.map((option) => {
          const isActive = option === activeOption;
          const count = counts[option] ?? 0;

          return (
            <button
              key={option}
              type="button"
              onClick={() => onOptionChange(option)}
              className={[
                "inline-flex h-7 items-center gap-1 rounded-md px-2.5 text-xs font-medium transition",
                isActive
                  ? "bg-slate-900 text-slate-50"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200",
              ].join(" ")}
              aria-pressed={isActive}
            >
              <span>{option}</span>
              <span className={isActive ? "text-slate-300" : "text-slate-500"}>
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
