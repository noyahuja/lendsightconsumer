import { PageHeader } from "@/components/PageHeader";
import { ComingSoon } from "@/components/ComingSoon";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Auto Loans — Lendsight" };

export default function AutoLoansPage() {
  return (
    <>
      <PageHeader title="Auto Loans" />
      <ComingSoon
        title="Auto Loans Coming Soon"
        cta={{ label: "Compare CD Rates", href: "/cds" }}
      />
    </>
  );
}
