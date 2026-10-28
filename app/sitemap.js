import { DEPARTMENTS } from "@/lib/departments";
import { SITE_URL } from "@/lib/siteUrl";

// Served at /sitemap.xml. Extend this array when more routes are added.

const ROUTES = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/blueprint", priority: 0.6, changeFrequency: "monthly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/departments", priority: 0.8, changeFrequency: "monthly" },
  { path: "/happenings", priority: 0.6, changeFrequency: "monthly" },
  { path: "/life", priority: 0.7, changeFrequency: "monthly" },
  { path: "/facilities", priority: 0.7, changeFrequency: "monthly" },
  { path: "/placements", priority: 0.8, changeFrequency: "monthly" },
  { path: "/admissions", priority: 0.9, changeFrequency: "weekly" },
  { path: "/disclosures", priority: 0.6, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.7, changeFrequency: "yearly" },
];

export default function sitemap() {
  const lastModified = new Date();
  const departments = DEPARTMENTS.map((d) => ({
    path: `/departments/${d.slug}`,
    priority: 0.6,
    changeFrequency: "monthly",
  }));
  return [...ROUTES, ...departments].map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
