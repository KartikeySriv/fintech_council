import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { ApplyMembershipPage } from "@/components/pages/ApplyMembershipPage";

export const metadata: Metadata = {
  title: "Apply for Membership — Fintech Convergence Council",
  description:
    "Fintech Convergence Council (FCC) — the industry voice for regulated financial service providers and fintech companies in India.",
};

export default function Page() {
  return (
    <PageShell active="/apply-membership">
      <ApplyMembershipPage />
    </PageShell>
  );
}
