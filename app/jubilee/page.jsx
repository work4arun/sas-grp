import Jubilee from "@/components/Jubilee";

export const metadata = {
  title: "Silver Jubilee Launch | Sasurie Group of Institutions",
  description: "Silver Jubilee launch of the new Sasurie Group of Institutions website.",
  alternates: { canonical: "/jubilee" },
  robots: { index: false, follow: false },
};

export const viewport = { themeColor: "#05041a" };

export default function JubileePage() {
  return (
    <main id="main">
      <Jubilee />
      <noscript>
        <p style={{ position: "fixed", inset: 0, display: "grid", placeItems: "center", background: "#05041a", color: "#fff", zIndex: 20 }}>
          <a href="/" style={{ color: "#fff", fontSize: "1.4rem" }}>Enter the Sasurie website →</a>
        </p>
      </noscript>
    </main>
  );
}
