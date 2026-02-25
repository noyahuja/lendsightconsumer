"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
  label: string;
  href: string;
  active: boolean;
};

type NavGroup = {
  heading: string;
  icon: React.ReactNode;
  items: NavItem[];
};

function WalletIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M21 18v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v1h-9a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9zm-9-2h10V8H12v8zm4-2.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
    </svg>
  );
}

function BusinessIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 7V3H2v18h20V7H12zm-2 12H4v-2h6v2zm0-4H4v-2h6v2zm0-4H4V9h6v2zm0-4H4V5h6v2zm10 12h-8V9h8v10zm-2-8h-4v2h4v-2zm0 4h-4v2h4v-2z" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
  );
}

const NAV_GROUPS: NavGroup[] = [
  {
    heading: "DEBIT PRODUCTS",
    icon: <WalletIcon />,
    items: [
      { label: "Savings Account", href: "/savings", active: false },
      { label: "Certificate of Deposit", href: "/cds", active: true },
      { label: "Checking Account", href: "/checking", active: false },
      { label: "MMA", href: "/mma", active: false },
    ],
  },
  {
    heading: "CREDIT PRODUCTS",
    icon: <BusinessIcon />,
    items: [
      { label: "Mortgages & Refinancing", href: "/mortgages", active: false },
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
        minWidth: "var(--sidebar-width)",
        backgroundColor: "var(--color-bg-sidebar)",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        position: "sticky",
        top: 0,
        overflowY: "auto",
        overflowX: "hidden",
      }}
      aria-label="Main navigation"
    >
      {/* Logo */}
      <div
        style={{
          padding: "12px 24px",
          height: "58px",
          display: "flex",
          alignItems: "center",
          flexShrink: 0,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "20px",
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: "-0.02em",
          }}
        >
          Lendsight
        </span>
      </div>

      {/* Nav groups */}
      <nav style={{ flex: 1, paddingBottom: "16px" }} role="navigation">
        {NAV_GROUPS.map((group) => (
          <div key={group.heading}>
            {/* Section header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "16px 24px 8px",
              }}
            >
              <span style={{ color: "#ffffff", display: "flex", flexShrink: 0 }}>
                {group.icon}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "#ffffff",
                  letterSpacing: "0.03em",
                }}
              >
                {group.heading}
              </span>
            </div>

            {/* Items */}
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
                        padding: "12px 12px 12px 32px",
                        marginRight: "12px",
                        fontFamily: "var(--font-body)",
                        fontSize: "16px",
                        fontWeight: 600,
                        color: isCurrent ? "#ffffff" : "var(--color-text-muted)",
                        backgroundColor: isCurrent
                          ? "var(--color-bg-selected-nav)"
                          : "transparent",
                        borderRadius: isCurrent ? "0 8px 8px 0" : "0",
                        textDecoration: "none",
                        transition:
                          "background-color var(--transition-fast), color var(--transition-fast)",
                      }}
                    >
                      <span>{item.label}</span>
                      {!isCurrent && (
                        <span
                          style={{ color: "rgba(255,255,255,0.3)", flexShrink: 0 }}
                        >
                          <ChevronRightIcon />
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

      {/* ZIP / area selector */}
      <div
        style={{
          padding: "12px",
          flexShrink: 0,
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <button
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            width: "100%",
            padding: "10px 16px",
            backgroundColor: "transparent",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: "8px",
            cursor: "pointer",
            color: "#ffffff",
            fontFamily: "var(--font-heading)",
            fontSize: "14px",
            fontWeight: 600,
            textAlign: "left",
          }}
          aria-label="Change area"
        >
          <LocationIcon />
          <span
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            30318, 30308, 30310
          </span>
        </button>
      </div>
    </aside>
  );
}
