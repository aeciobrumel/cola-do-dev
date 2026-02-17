import type { InfoEntry } from "@/src/types/cheats";

type InfoPanelProps = {
  panel: InfoEntry;
};

export function InfoPanel({ panel }: InfoPanelProps) {
  return (
    <article className="rounded-lg bg-[var(--surface)]/65 px-3 py-2">
      <h3 className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">
        {panel.title}
      </h3>
      <ul className="mt-1.5 space-y-1 pl-5 text-sm text-[var(--text)]">
        {panel.items.map((item) => (
          <li key={item} className="list-disc">
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
