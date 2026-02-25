import { PageHeader } from "@/components/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy — Lendsight" };

export default function PrivacyPage() {
  return (
    <>
      <PageHeader title="Privacy Policy" />
      <div
        style={{
          padding: "var(--space-8)",
          maxWidth: "720px",
          color: "var(--color-text-secondary)",
          fontSize: "var(--text-sm)",
          lineHeight: "var(--leading-normal)",
        }}
      >
        <p>Privacy policy content coming soon.</p>
      </div>
    </>
  );
}
