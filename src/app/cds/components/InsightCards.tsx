function TrendUpIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--color-success)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  );
}

type InsightCardProps = {
  label: string;
  value: string;
  bank: string;
  change: string;
};

function InsightCard({ label, value, bank, change }: InsightCardProps) {
  return (
    <div
      style={{
        backgroundColor: "var(--color-bg-card)",
        borderRadius: "12px",
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        gap: "4px",
        flex: "1 1 0",
        minWidth: 0,
      }}
    >
      {/* Change badge */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "10px",
              fontWeight: 500,
              color: "var(--color-text-faint)",
            }}
          >
            {change}
          </span>
          <div
            style={{
              width: "24px",
              height: "24px",
              borderRadius: "50%",
              backgroundColor: "var(--color-success-light)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TrendUpIcon />
          </div>
        </div>
      </div>

      {/* Label */}
      <span
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "12px",
          fontWeight: 600,
          color: "var(--color-text-muted)",
          lineHeight: 1,
        }}
      >
        {label}
      </span>

      {/* Value */}
      <span
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "28px",
          fontWeight: 600,
          color: "var(--color-text-heading)",
          lineHeight: 1.1,
        }}
      >
        {value}
      </span>

      {/* Bank name */}
      <span
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "10px",
          fontWeight: 500,
          color: "var(--color-text-muted)",
        }}
      >
        {bank}
      </span>
    </div>
  );
}

export function InsightCards() {
  return (
    <div style={{ display: "flex", gap: "12px", flexShrink: 0, width: "260px" }}>
      <InsightCard
        label="Best APY"
        value="4.2%"
        bank="Georgia's Own"
        change="+0.2%"
      />
      <InsightCard
        label="Lowest Penalty"
        value="7 days"
        bank="Wells Fargo"
        change="+0.2%"
      />
    </div>
  );
}
