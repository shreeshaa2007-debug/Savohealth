"use client";

import { useEffect } from "react";

export function DynamicBackground({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      document.body.style.setProperty("--mouse-x", event.clientX.toString());
      document.body.style.setProperty("--mouse-y", event.clientY.toString());
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <>{children}</>;
}
