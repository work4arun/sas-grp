import { permanentRedirect } from "next/navigation";

// /leadership used to duplicate /blueprint; send visitors and crawlers to the one real page.
export default function LeadershipPage() {
  permanentRedirect("/blueprint");
}
