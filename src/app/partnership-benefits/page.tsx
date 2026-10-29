import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { PartnershipBenefitsPage } from "@/components/pages/PartnershipBenefitsPage";

export const metadata: Metadata = {
  title: "Partnership Benefits — Fintech Convergence Council",
  description:
    "Fintech Convergence Council (FCC) — the industry voice for regulated financial service providers and fintech companies in India.",
};

export default function Page() {
  return (
    <PageShell active="/partnership-benefits">
      <PartnershipBenefitsPage />
    </PageShell>
  );
}
