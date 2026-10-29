import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { PartnersPage } from "@/components/pages/PartnersPage";

export const metadata: Metadata = {
  title: "Our Partners — Fintech Convergence Council",
  description:
    "Fintech Convergence Council (FCC) — the industry voice for regulated financial service providers and fintech companies in India.",
};

export default function Page() {
  return (
    <PageShell active="/partners">
      <PartnersPage />
    </PageShell>
  );
}
