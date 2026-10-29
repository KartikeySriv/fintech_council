import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { CommitteesPage } from "@/components/pages/CommitteesPage";

export const metadata: Metadata = {
  title: "Committees — Fintech Convergence Council",
  description:
    "Fintech Convergence Council (FCC) — the industry voice for regulated financial service providers and fintech companies in India.",
};

export default function Page() {
  return (
    <PageShell active="/committees">
      <CommitteesPage />
    </PageShell>
  );
}
