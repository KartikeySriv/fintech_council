import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { LiveEventsPage } from "@/components/pages/LiveEventsPage";

export const metadata: Metadata = {
  title: "Live Events — Fintech Convergence Council",
  description:
    "Fintech Convergence Council (FCC) — the industry voice for regulated financial service providers and fintech companies in India.",
};

export default function Page() {
  return (
    <PageShell active="/live-events">
      <LiveEventsPage />
    </PageShell>
  );
}
