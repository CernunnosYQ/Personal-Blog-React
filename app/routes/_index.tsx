/* eslint-disable import/no-unresolved */
import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";

import Navigation from "~/components/Navigation";
import AboutSection from "~/components/AboutSection";
import ProjectsSection from "~/components/ProjectsSection";
import BlogSection from "~/components/BlogSection";
import Footer from "~/components/Footer";
import { getFeaturedProjects, TProjectShow } from "~/common/projects";
import { useLoaderData } from "@remix-run/react";


export const meta: MetaFunction = () => {
  return [
    { title: "ByCernus Blog" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};


export const loader: LoaderFunction = async () => {
  const projects: TProjectShow[] = await getFeaturedProjects(3)

  return json(projects)
}


export default function Index() {
  const projects = useLoaderData<TProjectShow[]>()

  return (
    <div className={styles.main}>
      <Navigation />
      <div className={styles.wrapper}>
        <AboutSection />
        <ProjectsSection projects={projects.map(project => ({
          ...project,
          last_update: new Date(project.last_update)
        }))} />
        <BlogSection blogposts={[]} />
      </div>
      <Footer />
    </div>
  );
}


const styles = {
  main:
    "bg-gradient-to-bl from-taupe-950 to-cod-gray-950 min-h-screen ",
  wrapper:
    "max-w-3xl xl:max-w-5xl m-auto"
}
