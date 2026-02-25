type ComingSoonProps = {
  title: string;
  description?: string;
  cta?: {
    label: string;
    href: string;
  };
};

export function ComingSoon({ title, description, cta }: ComingSoonProps) {
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "var(--space-16)",
      }}
    >
      <div
        style={{
          textAlign: "center",
          maxWidth: "480px",
        }}
      >
        <div
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "var(--radius-xl)",
            backgroundColor: "var(--color-brand-light)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto var(--space-5)",
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--color-brand)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
        </div>
        <h2
          style={{
            fontSize: "var(--text-xl)",
            fontWeight: "var(--font-semibold)",
            color: "var(--color-text-primary)",
            margin: "0 0 var(--space-3)",
          }}
        >
          {title}
        </h2>
        <p
          style={{
            fontSize: "var(--text-sm)",
            color: "var(--color-text-secondary)",
            lineHeight: "var(--leading-normal)",
            margin: "0 0 var(--space-6)",
          }}
        >
          {description ??
            "This module is under development and will be available soon. In the meantime, try comparing CD rates."}
        </p>
        {cta && (
          <a
            href={cta.href}
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "var(--space-2) var(--space-5)",
              backgroundColor: "var(--color-brand)",
              color: "#ffffff",
              borderRadius: "var(--radius-md)",
              fontSize: "var(--text-sm)",
              fontWeight: "var(--font-medium)",
              textDecoration: "none",
              transition: "background-color var(--transition-fast)",
            }}
          >
            {cta.label}
          </a>
        )}
      </div>
    </div>
  );
}
