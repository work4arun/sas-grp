import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Explore from "@/components/Explore";
import Marquee from "@/components/Marquee";
import Story from "@/components/Story";
import Programmes from "@/components/Programmes";
import Admissions from "@/components/Admissions";
import Family from "@/components/Family";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import Loader from "@/components/Loader";
import Cursor from "@/components/Cursor";
import CornerArrow from "@/components/CornerArrow";
import Drift from "@/components/Drift";
import { EXPLORE_LANDING } from "@/lib/site";

export default function Page() {
  return (
    <>
      <Loader />
      <Cursor />
      <ScrollProgress />
      <CornerArrow />
      <Drift />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Story />
        <Programmes />
        <Explore />
        <Admissions />
        <Family />
      </main>
      <Footer exploreLinks={EXPLORE_LANDING} />
    </>
  );
}
