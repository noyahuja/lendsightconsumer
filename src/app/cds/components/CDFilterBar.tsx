"use client";

function ChevronDownIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function SortIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="15" y2="12" />
      <line x1="3" y1="18" x2="9" y2="18" />
    </svg>
  );
}

type FilterButtonProps = {
  label: string;
  color: string;
  "aria-label": string;
};

function FilterButton({ label, color, "aria-label": ariaLabel }: FilterButtonProps) {
  return (
    <button
      aria-label={ariaLabel}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        padding: "0 16px",
        height: "44px",
        backgroundColor: color,
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        fontFamily: "var(--font-heading)",
        fontSize: "24px",
        fontWeight: 600,
        color: "#ffffff",
        whiteSpace: "nowrap",
        transition: "opacity var(--transition-fast)",
      }}
    >
      {label}
      <ChevronDownIcon />
    </button>
  );
}

export function CDFilterBar() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 40px",
        height: "var(--topnav-height, 44px)",
        backgroundColor: "var(--color-bg-base)",
        borderBottom: "1px solid var(--color-border)",
        gap: "12px",
        flexShrink: 0,
      }}
    >
      {/* Filter buttons */}
      <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
        <FilterButton
          label="Fixed CD"
          color="var(--color-ochre)"
          aria-label="CD Type: Fixed CD"
        />
        <FilterButton
          label="4 months"
          color="var(--color-rust)"
          aria-label="Term: 4 months"
        />
        <FilterButton
          label="$10,000"
          color="var(--color-moss)"
          aria-label="Amount: $10,000"
        />
      </div>

      {/* Sort By */}
      <button
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          padding: "0 16px",
          height: "44px",
          backgroundColor: "transparent",
          border: "1px solid var(--color-border-strong)",
          borderRadius: "8px",
          cursor: "pointer",
          fontFamily: "var(--font-body)",
          fontSize: "16px",
          fontWeight: 600,
          color: "var(--color-text-body)",
          whiteSpace: "nowrap",
          transition: "background-color var(--transition-fast)",
          flexShrink: 0,
        }}
        aria-label="Sort results"
      >
        <SortIcon />
        Sort By
      </button>
    </div>
  );
}
