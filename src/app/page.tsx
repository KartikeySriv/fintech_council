import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { HomePage } from "@/components/pages/HomePage";

export const metadata: Metadata = {
  title: "FCC Website Redesign",
  description:
    "Fintech Convergence Council (FCC) — the industry voice for regulated financial service providers and fintech companies in India.",
};

export default function Page() {
  return (
    <PageShell active="/">
      <HomePage />
    </PageShell>
  );
}
