import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { AnnualReportPage } from "@/components/pages/AnnualReportPage";

export const metadata: Metadata = {
  title: "Annual Reports — Fintech Convergence Council",
  description:
    "Fintech Convergence Council (FCC) — the industry voice for regulated financial service providers and fintech companies in India.",
};

export default function Page() {
  return (
    <PageShell active="/annual-report">
      <AnnualReportPage />
    </PageShell>
  );
}
