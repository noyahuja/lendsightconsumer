"use client";

const PROMPT_CHIPS = [
  "Which bank offers the highest APY?",
  "Which bank offers the lowest Withdrawal Penalty?",
  "Who has lowest APR?",
];

function SparkleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}

export function AISearch() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      {/* Input */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          height: "40px",
          padding: "0 14px",
          backgroundColor: "var(--color-bg-base)",
          border: "1px solid var(--color-border)",
          borderRadius: "8px",
        }}
      >
        <SparkleIcon />
        <input
          type="text"
          placeholder="Ask AI a question..."
          style={{
            flex: 1,
            border: "none",
            outline: "none",
            backgroundColor: "transparent",
            fontFamily: "var(--font-heading)",
            fontSize: "14px",
            fontWeight: 500,
            color: "var(--color-text-muted)",
          }}
          aria-label="Ask AI a question about CD rates"
        />
        <button
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "28px",
            height: "28px",
            border: "none",
            borderRadius: "6px",
            backgroundColor: "var(--color-brand)",
            color: "#ffffff",
            cursor: "pointer",
            flexShrink: 0,
          }}
          aria-label="Submit question"
        >
          <SendIcon />
        </button>
      </div>

      {/* Prompt chips */}
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
        {PROMPT_CHIPS.map((chip) => (
          <button
            key={chip}
            style={{
              padding: "10px 14px",
              height: "40px",
              backgroundColor: "var(--color-bg-card)",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontFamily: "var(--font-heading)",
              fontSize: "14px",
              fontWeight: 600,
              color: "var(--color-text-muted)",
              whiteSpace: "nowrap",
              transition: "background-color var(--transition-fast)",
            }}
          >
            {chip}
          </button>
        ))}
      </div>
    </div>
  );
}
