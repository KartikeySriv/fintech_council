import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { MembersPage } from "@/components/pages/MembersPage";

export const metadata: Metadata = {
  title: "Our Members — Fintech Convergence Council",
  description:
    "Fintech Convergence Council (FCC) — the industry voice for regulated financial service providers and fintech companies in India.",
};

export default function Page() {
  return (
    <PageShell active="/members">
      <MembersPage />
    </PageShell>
  );
}
