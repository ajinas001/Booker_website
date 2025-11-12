"use client";

import useLenis from "@/lib/lenis";

export default function LenisWrapper({ children }) {
  useLenis();
  return <>{children}</>;
}
