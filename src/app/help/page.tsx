import { PageHeader } from "@/components/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Help — Lendsight" };

const FAQS = [
  {
    q: "How does sorting work?",
    a: "Each product module offers sort options specific to that product. For CDs you can sort by Highest APY, Best Relationship Rate, Shortest Withdrawal Penalty, or Most Favorable Terms. Ties are broken deterministically using secondary metrics.",
  },
  {
    q: "How does the AI work?",
    a: "The AI assistant answers questions using only the data currently shown on the page — the filtered results you see. It will never invent or extrapolate rates beyond the actual data.",
  },
  {
    q: "What is the Area selector?",
    a: "The Area selector lets you choose which geographic area to compare rates for. You can type a city name or a ZIP code. If you choose a ZIP, you can add up to 5 ZIPs from the same city.",
  },
  {
    q: "What does 'Closest term' mean?",
    a: "If no branch offers a CD at the exact term you requested, Lendsight automatically matches you to the nearest available term and shows a 'Closest term' badge on that bank's row.",
  },
];

export default function HelpPage() {
  return (
    <>
      <PageHeader title="Help & FAQ" description="Answers to common questions about Lendsight." />
      <div
        style={{
          padding: "var(--space-8)",
          maxWidth: "720px",
          display: "flex",
          flexDirection: "column",
          gap: "var(--space-6)",
        }}
      >
        {FAQS.map((faq) => (
          <div key={faq.q}>
            <h2
              style={{
                fontSize: "var(--text-base)",
                fontWeight: "var(--font-semibold)",
                color: "var(--color-text-primary)",
                margin: "0 0 var(--space-2)",
              }}
            >
              {faq.q}
            </h2>
            <p
              style={{
                fontSize: "var(--text-sm)",
                color: "var(--color-text-secondary)",
                lineHeight: "var(--leading-normal)",
                margin: 0,
              }}
            >
              {faq.a}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
