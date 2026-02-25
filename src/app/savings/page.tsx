import { PageHeader } from "@/components/PageHeader";
import { ComingSoon } from "@/components/ComingSoon";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Savings Accounts — Lendsight" };

export default function SavingsPage() {
  return (
    <>
      <PageHeader title="Savings Accounts" />
      <ComingSoon
        title="Savings Accounts Coming Soon"
        cta={{ label: "Compare CD Rates", href: "/cds" }}
      />
    </>
  );
}
