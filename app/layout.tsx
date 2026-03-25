import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Karthik HV — Data Engineer & Analyst",
  description:
    "Karthik HV · Data Engineer & Analyst based in Berlin. Building scalable data pipelines, real-time systems, and analytics at scale.",
  keywords: [
    "Data Engineer",
    "Data Analyst",
    "Berlin",
    "Apache Kafka",
    "Spark",
    "BigQuery",
    "dbt",
  ],
  openGraph: {
    title: "Karthik HV — Data Engineer & Analyst",
    description:
      "Building scalable data pipelines, real-time systems, and analytics at scale.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#0B0F19] text-white antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
