import { PageHeader } from "@/components/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Settings — Lendsight" };

export default function SettingsPage() {
  return (
    <>
      <PageHeader title="Settings" description="Manage your preferences." />
      <div
        style={{
          padding: "var(--space-8)",
          maxWidth: "480px",
          color: "var(--color-text-secondary)",
          fontSize: "var(--text-sm)",
        }}
      >
        <p>Settings are not yet available. Check back soon.</p>
      </div>
    </>
  );
}
