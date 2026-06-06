"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";


export default function Logo({
  showText = true,
  className = "",
  iconClassName = "",
  textClassName = "",
}) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={cn(
          "flex items-center gap-2",
          className
        )}
      >
        <Image
          src="/logoicon.png"
          alt="Logo Icon"
          width={36}
          height={36}
          className={cn(
            "object-contain",
            iconClassName
          )}
        />
      </div>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <div
      className={cn(
        "flex items-center gap-2",
        className
      )}
    >
      {/* ICON */}
      <Image
        src="/logoicon.png"
        alt="Logo Icon"
        width={36}
        height={36}
        className={cn(
          "object-contain",
          iconClassName
        )}
        priority
      />

      {/* TEXT */}
      {showText && (
        <Image
          src="/hyratic.svg"
          alt="Logo Text"
          width={120}
          height={40}
          className={cn(
            "object-contain",
            isDark && "opacity-90",
            textClassName
          )}
          priority
        />
      )}
    </div>
  );
}