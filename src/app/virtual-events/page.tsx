import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { VirtualEventsPage } from "@/components/pages/VirtualEventsPage";

export const metadata: Metadata = {
  title: "Virtual Events — Fintech Convergence Council",
  description:
    "Fintech Convergence Council (FCC) — the industry voice for regulated financial service providers and fintech companies in India.",
};

export default function Page() {
  return (
    <PageShell active="/virtual-events">
      <VirtualEventsPage />
    </PageShell>
  );
}
