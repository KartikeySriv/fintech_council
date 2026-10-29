import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { MembershipBenefitsPage } from "@/components/pages/MembershipBenefitsPage";

export const metadata: Metadata = {
  title: "Membership Benefits — Fintech Convergence Council",
  description:
    "Fintech Convergence Council (FCC) — the industry voice for regulated financial service providers and fintech companies in India.",
};

export default function Page() {
  return (
    <PageShell active="/membership-benefits">
      <MembershipBenefitsPage />
    </PageShell>
  );
}
