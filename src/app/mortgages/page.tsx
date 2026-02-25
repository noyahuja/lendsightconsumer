import { PageHeader } from "@/components/PageHeader";
import { ComingSoon } from "@/components/ComingSoon";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Mortgages — Lendsight" };

export default function MortgagesPage() {
  return (
    <>
      <PageHeader title="Mortgages & Refinancing" />
      <ComingSoon
        title="Mortgages Coming Soon"
        cta={{ label: "Compare CD Rates", href: "/cds" }}
      />
    </>
  );
}
