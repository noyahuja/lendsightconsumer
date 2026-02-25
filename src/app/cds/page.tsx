import { PageHeader } from "@/components/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Compare CD Rates — Lendsight" };

export default function CDsPage() {
  return (
    <>
      <PageHeader
        title="Compare CD Rates"
        description="Find the best Certificate of Deposit rates from banks in your area."
      />
      <div
        style={{
          padding: "var(--space-8)",
          color: "var(--color-text-secondary)",
          fontSize: "var(--text-sm)",
        }}
      >
        {/* CD module coming in Milestone 2–4 */}
        <p>Loading CD comparison tool…</p>
      </div>
    </>
  );
}
