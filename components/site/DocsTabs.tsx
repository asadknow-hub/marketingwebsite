"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const tabs = [
  { label: "Process Flows", href: "/docs/process-flows" },
  { label: "Technical Reference", href: "/docs/technical" },
  { label: "Implementation", href: "/docs/implementation" },
];

export default function DocsTabs() {
  const pathname = usePathname();
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 pb-8">
      <div className="max-w-[1100px] mx-auto flex flex-wrap items-center justify-center gap-2 p-2 rounded-full bg-white border border-[#15122E]/10">
        {tabs.map((t) => {
          const active = pathname.startsWith(t.href);
          return (
            <Link
              key={t.href}
              href={t.href}
              className={cn(
                "px-5 py-2.5 rounded-full font-poppins text-sm font-semibold transition-colors",
                active
                  ? "bg-[#6C63FF] text-white"
                  : "text-[#15122E]/70 hover:bg-[#6C63FF]/5 hover:text-[#15122E]"
              )}
            >
              {t.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
