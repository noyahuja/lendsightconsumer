import type { Metadata } from "next";
import { CDFilterBar } from "./components/CDFilterBar";
import { InsightCards } from "./components/InsightCards";
import { AISearch } from "./components/AISearch";
import { BankTable } from "./components/BankTable";

export const metadata: Metadata = { title: "Compare CD Rates — Lendsight" };

const AI_SUMMARY =
  "Bank of America and JP Morgan Chase offer the highest competitive rates in Fulton county, which are upto 1% more than other banks in the region.";

export default function CDsPage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "var(--color-bg-base)",
      }}
    >
      {/* ── Top filter bar ─────────────────────────────────────── */}
      <CDFilterBar />

      {/* ── Header + Insight Cards ─────────────────────────────── */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "40px",
          padding: "30px 40px 24px",
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        {/* Left: title, AI summary, tabs, AI search */}
        <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
          {/* Title + tabs row */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: "16px",
            }}
          >
            <div>
              <h1
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "24px",
                  fontWeight: 600,
                  color: "#000000",
                  margin: 0,
                  lineHeight: 1.2,
                }}
              >
                Compare CD Rates
              </h1>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "16px",
                  fontWeight: 400,
                  color: "var(--color-text-body)",
                  margin: "8px 0 0",
                  lineHeight: 1.5,
                }}
              >
                <strong
                  style={{ fontWeight: 600, color: "var(--color-text-body)" }}
                >
                  AI Summary:
                </strong>{" "}
                {AI_SUMMARY}
              </p>
            </div>

            {/* Table / Chart toggle */}
            <div
              style={{
                display: "flex",
                backgroundColor: "var(--color-bg-card)",
                borderRadius: "8px",
                padding: "4px",
                gap: "0",
                flexShrink: 0,
              }}
              role="tablist"
              aria-label="View mode"
            >
              {["Table", "Chart"].map((tab, i) => (
                <button
                  key={tab}
                  role="tab"
                  aria-selected={i === 0}
                  style={{
                    padding: "6px 20px",
                    border: "none",
                    borderRadius: "6px",
                    backgroundColor: i === 0 ? "#ffffff" : "transparent",
                    fontFamily: "var(--font-heading)",
                    fontSize: "14px",
                    fontWeight: 600,
                    color: i === 0 ? "var(--color-brand)" : "var(--color-text-body)",
                    cursor: "pointer",
                    transition: "background-color var(--transition-fast), color var(--transition-fast)",
                    boxShadow: i === 0 ? "var(--shadow-sm)" : "none",
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* AI Search */}
          <AISearch />
        </div>

        {/* Right: Insight cards */}
        <InsightCards />
      </div>

      {/* ── Bank comparison table ───────────────────────────────── */}
      <div style={{ flex: 1, paddingTop: "24px" }}>
        <BankTable />
      </div>
    </div>
  );
}
