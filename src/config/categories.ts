import { FaDocker, FaGitAlt, FaLaravel } from "react-icons/fa";
import { LuMessageSquareText } from "react-icons/lu";
import { SiMysql } from "react-icons/si";
import type { IconType } from "react-icons";
import type { CheatCategory } from "@/src/types/cheats";

type CategoryMeta = {
  label: string;
  className: string;
  icon: IconType;
};

export const CATEGORY_META = {
  Docker: {
    label: "Docker",
    className: "border-sky-300 bg-sky-50 text-sky-700",
    icon: FaDocker,
  },
  Laravel: {
    label: "Laravel",
    className: "border-rose-300 bg-rose-50 text-rose-700",
    icon: FaLaravel,
  },
  Git: {
    label: "Git",
    className: "border-amber-300 bg-amber-50 text-amber-700",
    icon: FaGitAlt,
  },
  SQL: {
    label: "SQL",
    className: "border-emerald-300 bg-emerald-50 text-emerald-700",
    icon: SiMysql,
  },
  Prompts: {
    label: "Prompts",
    className: "border-violet-300 bg-violet-50 text-violet-700",
    icon: LuMessageSquareText,
  },
} satisfies Record<CheatCategory, CategoryMeta>;
