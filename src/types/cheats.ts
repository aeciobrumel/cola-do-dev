export const categories = ["Docker", "Laravel", "Git", "SQL", "Prompts"] as const;

export type CheatCategory = (typeof categories)[number];

type BaseEntry = {
  id: string;
  category: CheatCategory;
  subCategory?: string;
  title: string;
};

export type InfoEntry = BaseEntry & {
  type: "info";
  items: string[];
};

export type CodeEntry = BaseEntry & {
  type: "code";
  description: string;
  code: string;
};

export type CheatEntry = InfoEntry | CodeEntry;

export function isInfoEntry(entry: CheatEntry): entry is InfoEntry {
  return entry.type === "info";
}

export function isCodeEntry(entry: CheatEntry): entry is CodeEntry {
  return entry.type === "code";
}
