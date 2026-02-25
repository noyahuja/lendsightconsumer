import Link from "next/link";

export default function NotFound() {
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
      <div style={{ textAlign: "center", maxWidth: "400px" }}>
        <p
          style={{
            fontSize: "var(--text-sm)",
            fontWeight: "var(--font-semibold)",
            color: "var(--color-brand)",
            marginBottom: "var(--space-3)",
          }}
        >
          404
        </p>
        <h1
          style={{
            fontSize: "var(--text-2xl)",
            fontWeight: "var(--font-bold)",
            color: "var(--color-text-primary)",
            margin: "0 0 var(--space-3)",
          }}
        >
          Page not found
        </h1>
        <p
          style={{
            fontSize: "var(--text-sm)",
            color: "var(--color-text-secondary)",
            marginBottom: "var(--space-6)",
          }}
        >
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/cds"
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
          }}
        >
          Go to CD Rates
        </Link>
      </div>
    </div>
  );
}
