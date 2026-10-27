import Nav from "./Nav";
import Footer from "./Footer";
import ScrollProgress from "./ScrollProgress";
import Cursor from "./Cursor";
import CornerArrow from "./CornerArrow";
import { EXPLORE_LANDING } from "@/lib/site";

/**
 * Chrome for the seeded inner pages: the landing page's nav and footer, wired to
 * routes instead of in-page anchors. No Loader here so a page is readable
 * immediately; everything else matches the landing.
 */
export default function PageShell({ children, explore = EXPLORE_LANDING }) {
  return (
    <>
      <Cursor />
      <ScrollProgress />
      <CornerArrow />
      <Nav logoHref="/" ctaHref="/admissions" />
      <div className="container" style={{ position: "absolute", top: "calc(var(--nav) + 44px)", left: 0, right: 0, zIndex: 5 }}>
        <a className="to-top" href="/">← Back to home</a>
      </div>
      <main>{children}</main>
      <Footer exploreLinks={explore} homeHref="/" />
    </>
  );
}
