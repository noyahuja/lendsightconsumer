"use client";

import { useState } from "react";

type BankRow = {
  id: string;
  bankName: string;
  branch: string;
  apy: string;
  interest: string;
  relationshipRate: string;
  withdrawalPenalty: string;
  closestTerm?: string;
};

const PLACEHOLDER_ROWS: BankRow[] = [
  {
    id: "wells-fargo",
    bankName: "Wells Fargo",
    branch: "Piedmont Ave",
    apy: "2.3% – 3.1%",
    interest: "2.3% – 4.1%",
    relationshipRate: "2.4% – 3.2%",
    withdrawalPenalty: "90 days of interest",
  },
  {
    id: "ameris-bank",
    bankName: "Ameris Bank",
    branch: "Piedmont Ave",
    apy: "2.3% – 3.1%",
    interest: "2.4% – 3.2%",
    relationshipRate: "2.5% – 3.3%",
    withdrawalPenalty: "22 days of interest",
  },
  {
    id: "truist",
    bankName: "Truist Bank",
    branch: "Piedmont Ave",
    apy: "2.4% – 3.6%",
    interest: "2.4% – 3.7%",
    relationshipRate: "2.5% – 3.7%",
    withdrawalPenalty: "90 days of interest",
  },
  {
    id: "citibank",
    bankName: "Citibank",
    branch: "Piedmont Ave",
    apy: "1.5% – 2.1%",
    interest: "1.3% – 2.2%",
    relationshipRate: "1.6% – 2.3%",
    withdrawalPenalty: "90 days of interest",
    closestTerm: "3 mo",
  },
  {
    id: "georgias-own",
    bankName: "Georgia's Own",
    branch: "Piedmont Ave",
    apy: "4.1% – 4.2%",
    interest: "4.1% – 4.2%",
    relationshipRate: "4.2% – 4.3%",
    withdrawalPenalty: "90 days of interest",
  },
  {
    id: "delta-community",
    bankName: "Delta Community",
    branch: "Piedmont Ave",
    apy: "3.8% – 4.0%",
    interest: "3.8% – 4.0%",
    relationshipRate: "4.0% – 4.1%",
    withdrawalPenalty: "90 days of interest",
  },
  {
    id: "bank-of-america",
    bankName: "Bank of America",
    branch: "Piedmont Ave",
    apy: "2.3% – 4.1%",
    interest: "2.6% – 4.1%",
    relationshipRate: "2.4% – 4.2%",
    withdrawalPenalty: "7 days of interest",
  },
];

type BranchRow = {
  name: string;
  zip: string;
  apy: string;
  interest: string;
  relationshipRate: string;
  penalty: string;
};

const PLACEHOLDER_BRANCHES: BranchRow[] = [
  { name: "Midtown", zip: "30309", apy: "5.625%", interest: "5.625%", relationshipRate: "5.970%", penalty: "7 days" },
  { name: "West Midtown", zip: "30318", apy: "5.625%", interest: "5.625%", relationshipRate: "5.970%", penalty: "7 days" },
  { name: "Virginia Highland", zip: "30306", apy: "5.525%", interest: "5.525%", relationshipRate: "5.870%", penalty: "7 days" },
  { name: "Buckhead", zip: "30305", apy: "5.525%", interest: "5.525%", relationshipRate: "5.865%", penalty: "7 days" },
  { name: "Inman Park", zip: "30307", apy: "5.525%", interest: "5.525%", relationshipRate: "5.865%", penalty: "7 days" },
];

const COLUMN_WIDTHS = {
  bank: "270px",
  apy: "185px",
  interest: "185px",
  relRate: "200px",
  penalty: "220px",
};

const TH: React.CSSProperties = {
  fontFamily: "var(--font-heading)",
  fontSize: "16px",
  fontWeight: 600,
  color: "var(--color-text-heading)",
  textAlign: "left",
  padding: "0 16px",
  height: "72px",
  verticalAlign: "middle",
  borderBottom: "1px solid var(--color-border)",
  whiteSpace: "nowrap",
};

const TD: React.CSSProperties = {
  fontFamily: "var(--font-body)",
  fontSize: "16px",
  fontWeight: 400,
  color: "var(--color-text-body)",
  textAlign: "left",
  padding: "0 16px",
  height: "80px",
  verticalAlign: "middle",
  borderBottom: "1px solid var(--color-border)",
};

function BankInitials({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
  return (
    <div
      style={{
        width: "36px",
        height: "36px",
        borderRadius: "8px",
        backgroundColor: "var(--color-bg-card)",
        border: "1px solid var(--color-border)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font-heading)",
        fontSize: "12px",
        fontWeight: 700,
        color: "var(--color-text-heading)",
        flexShrink: 0,
      }}
      aria-hidden="true"
    >
      {initials}
    </div>
  );
}

function ChevronDownIcon({ rotated }: { rotated: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{
        flexShrink: 0,
        transition: "transform 200ms ease",
        transform: rotated ? "rotate(180deg)" : "rotate(0deg)",
      }}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function ClosestTermBadge({ term }: { term: string }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "2px 8px",
        backgroundColor: "var(--color-brand-light)",
        color: "var(--color-brand)",
        borderRadius: "var(--radius-full)",
        fontFamily: "var(--font-heading)",
        fontSize: "11px",
        fontWeight: 600,
        whiteSpace: "nowrap",
      }}
    >
      Closest term: {term}
    </span>
  );
}

function SubtableRow({ row }: { row: BranchRow }) {
  return (
    <tr style={{ backgroundColor: "var(--color-bg-subtable)" }}>
      <td style={{ ...TD, fontSize: "14px", paddingLeft: "52px" }}>
        <div>
          <div style={{ fontWeight: 500 }}>{row.name}</div>
          <div style={{ fontSize: "12px", color: "var(--color-text-muted)", marginTop: "2px" }}>
            {row.zip}
          </div>
        </div>
      </td>
      <td style={{ ...TD, fontSize: "14px" }}>{row.apy}</td>
      <td style={{ ...TD, fontSize: "14px" }}>{row.interest}</td>
      <td style={{ ...TD, fontSize: "14px" }}>{row.relationshipRate}</td>
      <td style={{ ...TD, fontSize: "14px" }}>{row.penalty}</td>
    </tr>
  );
}

function SubtableHeader() {
  const subTH: React.CSSProperties = {
    fontFamily: "var(--font-heading)",
    fontSize: "14px",
    fontWeight: 600,
    color: "var(--color-text-heading)",
    textAlign: "left",
    padding: "10px 16px",
    backgroundColor: "var(--color-bg-subtable)",
    borderBottom: "1px solid var(--color-border)",
  };
  return (
    <tr>
      <th style={{ ...subTH, paddingLeft: "52px" }}>BRANCH NAME</th>
      <th style={subTH}>APY</th>
      <th style={subTH}>INTEREST</th>
      <th style={subTH}>RELATIONSHIP RATE</th>
      <th style={subTH}>WITHDRAWAL PENALTY</th>
    </tr>
  );
}

function BankTableRow({ row }: { row: BankRow }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <tr
        onClick={() => setExpanded((v) => !v)}
        style={{
          cursor: "pointer",
          backgroundColor: expanded ? "var(--color-bg-card)" : "transparent",
          transition: "background-color var(--transition-fast)",
        }}
        aria-expanded={expanded}
      >
        {/* Bank name + branch */}
        <td style={TD}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <BankInitials name={row.bankName} />
            <div>
              <div style={{ fontWeight: 400 }}>{row.bankName}</div>
              <div
                style={{
                  fontSize: "14px",
                  color: "var(--color-text-muted)",
                  marginTop: "2px",
                }}
              >
                {row.branch}
              </div>
              {row.closestTerm && (
                <div style={{ marginTop: "4px" }}>
                  <ClosestTermBadge term={row.closestTerm} />
                </div>
              )}
            </div>
          </div>
        </td>
        <td style={TD}>{row.apy}</td>
        <td style={TD}>{row.interest}</td>
        <td style={TD}>{row.relationshipRate}</td>
        <td style={TD}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
            <span>{row.withdrawalPenalty}</span>
            <span style={{ color: "var(--color-text-muted)" }}>
              <ChevronDownIcon rotated={expanded} />
            </span>
          </div>
        </td>
      </tr>

      {/* Expanded branch subtable */}
      {expanded && (
        <>
          {/* Bank name header row */}
          <tr style={{ backgroundColor: "var(--color-bg-subtable)" }}>
            <td
              colSpan={5}
              style={{
                padding: "12px 16px 8px 52px",
                fontFamily: "var(--font-heading)",
                fontSize: "20px",
                fontWeight: 600,
                color: "var(--color-text-heading)",
                borderBottom: "none",
              }}
            >
              {row.bankName}
            </td>
          </tr>
          <SubtableHeader />
          {PLACEHOLDER_BRANCHES.map((branch, i) => (
            <SubtableRow key={i} row={branch} />
          ))}
        </>
      )}
    </>
  );
}

export function BankTable() {
  return (
    <div
      style={{
        backgroundColor: "var(--color-bg-base)",
        border: "1px solid var(--color-border)",
        borderRadius: "12px",
        overflow: "hidden",
        margin: "0 40px 40px",
      }}
    >
      <div style={{ overflowX: "auto" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            minWidth: "900px",
          }}
          aria-label="CD rate comparison by bank"
        >
          <colgroup>
            <col style={{ width: COLUMN_WIDTHS.bank }} />
            <col style={{ width: COLUMN_WIDTHS.apy }} />
            <col style={{ width: COLUMN_WIDTHS.interest }} />
            <col style={{ width: COLUMN_WIDTHS.relRate }} />
            <col style={{ width: COLUMN_WIDTHS.penalty }} />
          </colgroup>
          <thead>
            <tr>
              <th style={TH}>BANK NAME</th>
              <th style={TH}>APY</th>
              <th style={TH}>INTEREST</th>
              <th style={TH}>RELATIONSHIP RATE</th>
              <th style={TH}>WITHDRAWAL PENALTY</th>
            </tr>
          </thead>
          <tbody>
            {PLACEHOLDER_ROWS.map((row) => (
              <BankTableRow key={row.id} row={row} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
