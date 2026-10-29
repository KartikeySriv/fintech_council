import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { ContactPage } from "@/components/pages/ContactPage";

export const metadata: Metadata = {
  title: "Contact — Fintech Convergence Council",
  description:
    "Fintech Convergence Council (FCC) — the industry voice for regulated financial service providers and fintech companies in India.",
};

export default function Page() {
  return (
    <PageShell active="/contact">
      <ContactPage />
    </PageShell>
  );
}
