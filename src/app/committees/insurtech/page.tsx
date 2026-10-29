import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { InsurTechPage } from "@/components/pages/InsurTechPage";

export const metadata: Metadata = {
  title: "InsurTech Committee — Fintech Convergence Council",
  description:
    "Fintech Convergence Council (FCC) — the industry voice for regulated financial service providers and fintech companies in India.",
};

export default function Page() {
  return (
    <PageShell active="/committees/insurtech">
      <InsurTechPage />
    </PageShell>
  );
}
