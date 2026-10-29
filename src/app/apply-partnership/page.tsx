import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { ApplyPartnershipPage } from "@/components/pages/ApplyPartnershipPage";

export const metadata: Metadata = {
  title: "Apply for Partnership — Fintech Convergence Council",
  description:
    "Fintech Convergence Council (FCC) — the industry voice for regulated financial service providers and fintech companies in India.",
};

export default function Page() {
  return (
    <PageShell active="/apply-partnership">
      <ApplyPartnershipPage />
    </PageShell>
  );
}
