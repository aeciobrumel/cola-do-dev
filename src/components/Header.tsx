import { Menu, Search, Star } from "lucide-react";
import type { RefObject } from "react";

type HeaderProps = {
  query: string;
  total: number;
  filteredTotal: number;
  onQueryChange: (value: string) => void;
  onShowFavorites: () => void;
  onOpenMenu: () => void;
  inputRef: RefObject<HTMLInputElement | null>;
};

export function Header({
  query,
  total,
  filteredTotal,
  onQueryChange,
  onShowFavorites,
  onOpenMenu,
  inputRef,
}: HeaderProps) {
  return (
    <header className="py-3">
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onOpenMenu}
          className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] transition hover:bg-[var(--surface-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2 lg:hidden"
          aria-label="Abrir menu de categorias"
        >
          <Menu className="h-4 w-4" aria-hidden="true" />
        </button>

        <div className="relative min-w-0 flex-1">
          <Search
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--muted)]"
            aria-hidden="true"
          />
          <label htmlFor="search" className="sr-only">
            Buscar cheat
          </label>
          <input
            ref={inputRef}
            id="search"
            type="search"
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="Busque por comando, descrição ou tecnologia..."
            className="h-11 w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] pl-10 pr-3 text-sm text-[var(--text)] outline-none transition focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/15"
          />
        </div>

        <div className="flex shrink-0 items-center gap-1.5">
          <button
            type="button"
            onClick={onShowFavorites}
            className="inline-flex h-9 items-center gap-1 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-2.5 text-xs font-medium text-[var(--text)] transition hover:bg-[var(--surface-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2"
            aria-label="Filtrar por favoritos"
          >
            <Star className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="hidden sm:inline">Favoritos</span>
          </button>
        </div>
      </div>

      <p className="mt-1.5 text-xs text-[var(--muted)]">
        Mostrando {filteredTotal} de {total}
      </p>
    </header>
  );
}
