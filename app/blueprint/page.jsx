import PageShell from "@/components/PageShell";
import Story from "@/components/Story";

export const metadata = {
  alternates: { canonical: "/blueprint" },
  title: "The Sasurie Blueprint: Four Layers of Leadership | Sasurie Group of Institutions",
  description:
    "True leaders are built in layers: grounded in Foundation, forged in Competency, expanded by Exposure, and realized in Enterprise. Discover the pedagogical model of Sasurie Group of Institutions.",
  openGraph: {
    title: "The Sasurie Blueprint: True Leaders Built in Layers",
    description:
      "Grounded in Foundation, forged in Competency, expanded by Exposure, and realized in Enterprise. The pedagogical framework at Sasurie.",
    images: ["/brand/sasurie-og.png"],
  },
};

export default function BlueprintPage() {
  return (
    <PageShell>
      <Story isStandalone={true} />
    </PageShell>
  );
}
