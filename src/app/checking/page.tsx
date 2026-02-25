import { PageHeader } from "@/components/PageHeader";
import { ComingSoon } from "@/components/ComingSoon";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Checking Accounts — Lendsight" };

export default function CheckingPage() {
  return (
    <>
      <PageHeader title="Checking Accounts" />
      <ComingSoon
        title="Checking Accounts Coming Soon"
        cta={{ label: "Compare CD Rates", href: "/cds" }}
      />
    </>
  );
}
