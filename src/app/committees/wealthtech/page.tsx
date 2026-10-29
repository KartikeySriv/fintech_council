import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { WealthTechPage } from "@/components/pages/WealthTechPage";

export const metadata: Metadata = {
  title: "WealthTech Committee — Fintech Convergence Council",
  description:
    "Fintech Convergence Council (FCC) — the industry voice for regulated financial service providers and fintech companies in India.",
};

export default function Page() {
  return (
    <PageShell active="/committees/wealthtech">
      <WealthTechPage />
    </PageShell>
  );
}
