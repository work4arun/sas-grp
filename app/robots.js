// Served at /robots.txt. Set NEXT_PUBLIC_SITE_URL when the site moves to its own domain.
import { SITE_URL } from "@/lib/siteUrl";

export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
