import { PageHeader } from "@/components/PageHeader";
import { ComingSoon } from "@/components/ComingSoon";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Personal Loans — Lendsight" };

export default function PersonalLoansPage() {
  return (
    <>
      <PageHeader title="Personal Loans" />
      <ComingSoon
        title="Personal Loans Coming Soon"
        cta={{ label: "Compare CD Rates", href: "/cds" }}
      />
    </>
  );
}
