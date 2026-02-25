import { PageHeader } from "@/components/PageHeader";
import { ComingSoon } from "@/components/ComingSoon";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Student Loans — Lendsight" };

export default function StudentLoansPage() {
  return (
    <>
      <PageHeader title="Student Loans" />
      <ComingSoon
        title="Student Loans Coming Soon"
        cta={{ label: "Compare CD Rates", href: "/cds" }}
      />
    </>
  );
}
