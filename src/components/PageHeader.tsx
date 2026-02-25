type PageHeaderProps = {
  title: string;
  description?: string;
};

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div
      style={{
        padding: "var(--space-8) var(--space-8) var(--space-6)",
        borderBottom: "1px solid var(--color-border)",
        backgroundColor: "var(--color-bg-surface)",
      }}
    >
      <h1
        style={{
          fontSize: "var(--text-2xl)",
          fontWeight: "var(--font-bold)",
          color: "var(--color-text-primary)",
          lineHeight: "var(--leading-tight)",
          margin: 0,
        }}
      >
        {title}
      </h1>
      {description && (
        <p
          style={{
            marginTop: "var(--space-2)",
            fontSize: "var(--text-sm)",
            color: "var(--color-text-secondary)",
            margin: "var(--space-2) 0 0",
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
