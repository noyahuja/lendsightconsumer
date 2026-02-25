import { PageHeader } from "@/components/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "About Our Data — Lendsight" };

export default function AboutDataPage() {
  return (
    <>
      <PageHeader
        title="About Our Data"
        description="How we collect, verify, and display financial product information."
      />
      <div
        style={{
          padding: "var(--space-8)",
          maxWidth: "720px",
          color: "var(--color-text-secondary)",
          fontSize: "var(--text-sm)",
          lineHeight: "var(--leading-normal)",
          display: "flex",
          flexDirection: "column",
          gap: "var(--space-5)",
        }}
      >
        <section>
          <h2
            style={{
              fontSize: "var(--text-base)",
              fontWeight: "var(--font-semibold)",
              color: "var(--color-text-primary)",
              marginBottom: "var(--space-2)",
            }}
          >
            Data Sources
          </h2>
          <p>
            Rate data is sourced from financial institutions operating in the
            selected geographic area. Records are stored in and served from our
            Supabase database.
          </p>
        </section>
        <section>
          <h2
            style={{
              fontSize: "var(--text-base)",
              fontWeight: "var(--font-semibold)",
              color: "var(--color-text-primary)",
              marginBottom: "var(--space-2)",
            }}
          >
            Data Freshness
          </h2>
          <p>
            Rates change frequently. The data shown is not a guarantee of
            current rates offered by any institution. Always verify rates
            directly with the bank or credit union before making a financial
            decision.
          </p>
        </section>
        <section>
          <h2
            style={{
              fontSize: "var(--text-base)",
              fontWeight: "var(--font-semibold)",
              color: "var(--color-text-primary)",
              marginBottom: "var(--space-2)",
            }}
          >
            Definitions
          </h2>
          <ul style={{ paddingLeft: "var(--space-5)", margin: 0 }}>
            <li>
              <strong>APY</strong> — Annual Percentage Yield; the effective
              annual return including compounding.
            </li>
            <li>
              <strong>Interest Rate</strong> — The stated interest rate before
              compounding.
            </li>
            <li>
              <strong>Relationship Rate</strong> — A preferential rate available
              to existing customers or those meeting certain relationship
              criteria.
            </li>
            <li>
              <strong>Withdrawal Penalty</strong> — The fee or foregone interest
              charged for early withdrawal of a CD.
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
