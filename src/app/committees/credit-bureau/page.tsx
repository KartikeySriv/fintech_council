import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { CreditBureauPage } from "@/components/pages/CreditBureauPage";

export const metadata: Metadata = {
  title: "Credit Bureau Committee — Fintech Convergence Council",
  description:
    "Fintech Convergence Council (FCC) — the industry voice for regulated financial service providers and fintech companies in India.",
};

export default function Page() {
  return (
    <PageShell active="/committees/credit-bureau">
      <CreditBureauPage />
    </PageShell>
  );
}
