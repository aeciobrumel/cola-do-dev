"use client";

import { Copy, Maximize2, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { CATEGORY_META } from "@/src/config/categories";
import type { CodeEntry } from "@/src/types/cheats";

type CheatCardProps = {
  cheat: CodeEntry;
  isFavorite: boolean;
  onCopied: () => void;
  onToggleFavorite: (id: string) => void;
};

async function copyText(value: string): Promise<boolean> {
  if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value);
    return true;
  }

  if (typeof document === "undefined") {
    return false;
  }

  const textarea = document.createElement("textarea");
  textarea.value = value;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "absolute";
  textarea.style.left = "-9999px";

  document.body.appendChild(textarea);
  textarea.select();

  const copied = document.execCommand("copy");
  document.body.removeChild(textarea);
  return copied;
}

export function CheatCard({
  cheat,
  isFavorite,
  onCopied,
  onToggleFavorite,
}: CheatCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const categoryMeta = CATEGORY_META[cheat.category];

  useEffect(() => {
    if (!isExpanded) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsExpanded(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isExpanded]);

  const handleCopy = async () => {
    try {
      const success = await copyText(cheat.code);

      if (!success) {
        return;
      }

      onCopied();
    } catch {
      return;
    }
  };

  return (
    <>
      <article className="flex h-full flex-col rounded-xl border border-[var(--border)] bg-[var(--surface)]/88 p-3">
        <div className="mb-2 flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h2 className="text-sm font-semibold leading-tight md:text-base">
              {cheat.title}
            </h2>
            <p className="mt-1 text-xs text-[var(--muted)]">{cheat.description}</p>
          </div>

          <button
            type="button"
            onClick={() => onToggleFavorite(cheat.id)}
            aria-label={
              isFavorite
                ? `Remover ${cheat.title} dos favoritos`
                : `Adicionar ${cheat.title} aos favoritos`
            }
            aria-pressed={isFavorite}
            className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] transition hover:bg-[var(--surface-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2"
          >
            <Star
              className={[
                "h-3.5 w-3.5",
                isFavorite
                  ? "fill-[var(--accent)] text-[var(--accent)]"
                  : "text-[var(--muted)]",
              ].join(" ")}
              aria-hidden="true"
            />
          </button>
        </div>

        <div className="mb-2">
          <span className="rounded-md bg-slate-100 px-1.5 py-0.5 text-[10px] font-medium text-slate-600">
            {categoryMeta.label}
          </span>
        </div>

        <div className="relative mt-auto rounded-lg border border-slate-800/80 bg-slate-950">
          <div className="absolute right-2 top-2 z-10 flex gap-1.5">
            <button
              type="button"
              onClick={handleCopy}
              aria-label={`Copiar código do card ${cheat.title}`}
              className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-slate-700 bg-slate-900 text-slate-100 transition hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-slate-300 focus-visible:outline-offset-2"
            >
              <Copy className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => setIsExpanded(true)}
              aria-label={`Ver comando completo de ${cheat.title}`}
              className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-slate-700 bg-slate-900 text-slate-100 transition hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-slate-300 focus-visible:outline-offset-2"
            >
              <Maximize2 className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
          </div>

          <pre className="max-h-32 overflow-hidden rounded-lg p-3 pb-8 pr-20 text-xs leading-relaxed text-slate-100">
            <code>{cheat.code}</code>
          </pre>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-slate-950 to-transparent" />

          <button
            type="button"
            onClick={() => setIsExpanded(true)}
            className="absolute bottom-1.5 left-2 rounded px-1.5 py-0.5 text-[11px] font-medium text-slate-300 transition hover:bg-slate-900 hover:text-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-slate-300 focus-visible:outline-offset-2"
          >
            Ver completo
          </button>
        </div>
      </article>

      {isExpanded ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`Comando completo: ${cheat.title}`}
          onClick={() => setIsExpanded(false)}
        >
          <div
            className="w-full max-w-3xl rounded-xl border border-slate-700 bg-slate-900 p-3 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-2 flex items-center justify-between gap-2">
              <h3 className="text-sm font-semibold text-slate-100">{cheat.title}</h3>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="rounded-md border border-slate-600 bg-slate-800 px-2.5 py-1 text-xs font-medium text-slate-100 transition hover:bg-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-slate-300 focus-visible:outline-offset-2"
                >
                  Copiar
                </button>
                <button
                  type="button"
                  onClick={() => setIsExpanded(false)}
                  className="rounded-md border border-slate-600 bg-slate-800 px-2.5 py-1 text-xs font-medium text-slate-100 transition hover:bg-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-slate-300 focus-visible:outline-offset-2"
                >
                  Fechar
                </button>
              </div>
            </div>

            <pre className="max-h-[70vh] overflow-auto rounded-lg border border-slate-800 bg-slate-950 p-3 text-xs leading-relaxed text-slate-100 md:text-sm">
              <code>{cheat.code}</code>
            </pre>
          </div>
        </div>
      ) : null}
    </>
  );
}
