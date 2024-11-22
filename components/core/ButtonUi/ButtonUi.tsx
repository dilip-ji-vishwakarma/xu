import Link from "next/link";
import React from "react";
import { IconRender } from "../IconRender";
import { icons } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonUiProps = {
  label: string;
  url: string;
  icon: keyof typeof icons;
  className?: string; // Optional className prop
};

export const ButtonUi: React.FC<ButtonUiProps> = ({ label, url, icon, className }) => {
  return (
    <Link
      href={url}
      className={cn(
        "flex justify-between px-[15px] py-3 rounded-xl border-[3px] border-solid border-white md:text-[20px] text-[16px]",
        className // Merge additional class names if provided
      )}
    >
      <span>{label}</span>
      <IconRender name={icon} />
    </Link>
  );
};
