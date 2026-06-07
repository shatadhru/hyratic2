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
          height={100}
          className={cn(
            "object-contain",
            isDark && "opacity-90 mt-10",
            textClassName
          )}
          priority
        />
      )}
    </div>
  );
}



export function LogoMain({ className = "", iconClassName = "" }) {
  return (
    <div
      className={cn(
        "flex items-center mt-1.5",
        className
      )}
    >
      <Image
        src="/hyraticdark.png"
        alt="Logo Icon"
        width={120}
        height={120}
        className={cn(
          "object-contain",
          iconClassName
        )}
        priority
      />
    </div>
  );
} 