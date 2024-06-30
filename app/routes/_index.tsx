import type { MetaFunction } from "@remix-run/node";

// eslint-disable-next-line import/no-unresolved
import Navigation from "~/components/Navigation";
// eslint-disable-next-line import/no-unresolved
import AboutSection from "~/components/AboutSection";
// eslint-disable-next-line import/no-unresolved
import ProjectsSection from "~/components/ProjectsSection";
// eslint-disable-next-line import/no-unresolved
import BlogSection from "~/components/BlogSection";
// eslint-disable-next-line import/no-unresolved
import Footer from "~/components/Footer";

export const meta: MetaFunction = () => {
  return [
    { title: "ByCernus Blog" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const styles = {
  main:
    "bg-gradient-to-bl from-taupe-950 to-cod-gray-950 min-h-screen ",
}

export default function Index() {
  return (
    <div className={styles.main}>
      <Navigation />
      <AboutSection />
      <ProjectsSection />
      <BlogSection />
      <Footer />
    </div>
  );
}
