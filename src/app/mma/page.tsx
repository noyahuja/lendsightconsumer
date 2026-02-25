import { PageHeader } from "@/components/PageHeader";
import { ComingSoon } from "@/components/ComingSoon";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Money Market Accounts — Lendsight" };

export default function MMAPage() {
  return (
    <>
      <PageHeader title="Money Market Accounts" />
      <ComingSoon
        title="Money Market Accounts Coming Soon"
        cta={{ label: "Compare CD Rates", href: "/cds" }}
      />
    </>
  );
}
