import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { PolicyPage } from "@/components/pages/PolicyPage";

export const metadata: Metadata = {
  title: "Policy — Fintech Convergence Council",
  description:
    "Fintech Convergence Council (FCC) — the industry voice for regulated financial service providers and fintech companies in India.",
};

export default function Page() {
  return (
    <PageShell active="/policy">
      <PolicyPage />
    </PageShell>
  );
}
