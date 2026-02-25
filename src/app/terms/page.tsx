import { PageHeader } from "@/components/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms of Service — Lendsight" };

export default function TermsPage() {
  return (
    <>
      <PageHeader title="Terms of Service" />
      <div
        style={{
          padding: "var(--space-8)",
          maxWidth: "720px",
          color: "var(--color-text-secondary)",
          fontSize: "var(--text-sm)",
          lineHeight: "var(--leading-normal)",
        }}
      >
        <p>Terms of service content coming soon.</p>
      </div>
    </>
  );
}
