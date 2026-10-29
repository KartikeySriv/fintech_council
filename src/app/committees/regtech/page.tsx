import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { RegTechPage } from "@/components/pages/RegTechPage";

export const metadata: Metadata = {
  title: "RegTech Committee — Fintech Convergence Council",
  description:
    "Fintech Convergence Council (FCC) — the industry voice for regulated financial service providers and fintech companies in India.",
};

export default function Page() {
  return (
    <PageShell active="/committees/regtech">
      <RegTechPage />
    </PageShell>
  );
}
