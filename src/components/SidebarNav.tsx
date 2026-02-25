"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type NavItem = {
  label: string;
  href: string;
  active: boolean;
};

type NavGroup = {
  heading: string;
  items: NavItem[];
};

const NAV_GROUPS: NavGroup[] = [
  {
    heading: "Debit",
    items: [
      { label: "Savings Account", href: "/savings", active: false },
      { label: "Certificate of Deposit", href: "/cds", active: true },
      { label: "Checking Account", href: "/checking", active: false },
      { label: "MMA", href: "/mma", active: false },
    ],
  },
  {
    heading: "Credit",
    items: [
      { label: "Mortgages", href: "/mortgages", active: false },
      { label: "Student Loans", href: "/student-loans", active: false },
      { label: "Auto Loans", href: "/auto-loans", active: false },
      { label: "Personal Loans", href: "/personal-loans", active: false },
    ],
  },
];

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <aside
      style={{
        width: "var(--sidebar-width)",
        backgroundColor: "var(--color-bg-sidebar)",
        color: "var(--color-text-inverse)",
        display: "flex",
        flexDirection: "column",
        flexShrink: 0,
        height: "100vh",
        position: "sticky",
        top: 0,
        overflowY: "auto",
      }}
      aria-label="Main navigation"
    >
      {/* Logo */}
      <div
        style={{
          padding: "var(--space-6) var(--space-5)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <span
          style={{
            fontSize: "var(--text-xl)",
            fontWeight: "var(--font-bold)",
            color: "var(--color-text-inverse)",
            letterSpacing: "-0.02em",
          }}
        >
          Lendsight
        </span>
      </div>

      {/* Nav groups */}
      <nav
        style={{ flex: 1, padding: "var(--space-4) 0" }}
        role="navigation"
      >
        {NAV_GROUPS.map((group) => (
          <div key={group.heading} style={{ marginBottom: "var(--space-6)" }}>
            <p
              style={{
                fontSize: "var(--text-xs)",
                fontWeight: "var(--font-semibold)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--color-text-muted)",
                padding: "0 var(--space-5)",
                marginBottom: "var(--space-1)",
              }}
            >
              {group.heading}
            </p>
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {group.items.map((item) => {
                const isCurrent = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={isCurrent ? "page" : undefined}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "var(--space-2) var(--space-5)",
                        fontSize: "var(--text-sm)",
                        fontWeight: isCurrent
                          ? "var(--font-medium)"
                          : "var(--font-normal)",
                        color: isCurrent
                          ? "#ffffff"
                          : "rgba(255,255,255,0.65)",
                        backgroundColor: isCurrent
                          ? "var(--color-bg-sidebar-active)"
                          : "transparent",
                        borderRadius: "0 var(--radius-md) var(--radius-md) 0",
                        textDecoration: "none",
                        transition: "background-color var(--transition-fast), color var(--transition-fast)",
                        marginRight: "var(--space-3)",
                      }}
                      className={cn(
                        "nav-link",
                        !isCurrent && !item.active && "opacity-60"
                      )}
                    >
                      {item.label}
                      {!item.active && (
                        <span
                          style={{
                            fontSize: "0.65rem",
                            fontWeight: "var(--font-medium)",
                            padding: "1px 6px",
                            borderRadius: "var(--radius-full)",
                            backgroundColor: "rgba(255,255,255,0.08)",
                            color: "rgba(255,255,255,0.45)",
                            letterSpacing: "0.02em",
                          }}
                        >
                          Soon
                        </span>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      {/* Footer links */}
      <div
        style={{
          padding: "var(--space-4) var(--space-5)",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          display: "flex",
          flexDirection: "column",
          gap: "var(--space-1)",
        }}
      >
        {[
          { label: "About Data", href: "/about-data" },
          { label: "Help", href: "/help" },
          { label: "Settings", href: "/settings" },
        ].map((link) => (
          <Link
            key={link.href}
            href={link.href}
            style={{
              fontSize: "var(--text-xs)",
              color: "rgba(255,255,255,0.45)",
              textDecoration: "none",
              padding: "var(--space-1) 0",
              transition: "color var(--transition-fast)",
            }}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </aside>
  );
}
