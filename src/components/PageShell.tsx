import type { ReactNode } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteInteractions } from "@/components/SiteInteractions";

export function PageShell({
  active,
  children,
}: {
  active: string;
  children: ReactNode;
}) {
  return (
    <>
      <SiteHeader active={active} />
      <main>{children}</main>
      <SiteFooter />
      <SiteInteractions />
    </>
  );
}
