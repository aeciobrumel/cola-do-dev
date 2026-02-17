type SubFilterBarProps = {
  options: string[];
  activeOption: string;
  onOptionChange: (option: string) => void;
};

export function SubFilterBar({
  options,
  activeOption,
  onOptionChange,
}: SubFilterBarProps) {
  if (options.length === 0) {
    return null;
  }

  return (
    <nav aria-label="Filtro por subcategoria">
      <div className="flex flex-wrap gap-1.5">
        {options.map((option) => {
          const isActive = option === activeOption;

          return (
            <button
              key={option}
              type="button"
              onClick={() => onOptionChange(option)}
              className={[
                "h-6 rounded-md px-2 text-[11px] font-medium transition",
                isActive
                  ? "bg-slate-800 text-slate-100"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200",
              ].join(" ")}
              aria-pressed={isActive}
            >
              {option}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
