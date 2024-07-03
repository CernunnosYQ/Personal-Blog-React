/* eslint-disable import/no-unresolved */
import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";

import Navigation from "~/components/Navigation";
import AboutSection from "~/components/PresentationSection";
import ProjectsSection from "~/components/ProjectsSection";
import BlogSection from "~/components/BlogSection";
import Footer from "~/components/Footer";
import { getFeaturedProjects, TProjectShow } from "~/common/projects";
import { useLoaderData } from "@remix-run/react";
import { getLastsPosts, TBlogPost } from "~/common/blogposts";
import { getQuotes } from "~/common/about";


type TLoaderData = {
  projects: TProjectShow[],
  blogposts: TBlogPost[],
  quotes: string[]
}


export const meta: MetaFunction = () => {
  return [
    { title: "ByCernus Blog" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};


export const loader: LoaderFunction = async () => {
  const projects: TProjectShow[] = await getFeaturedProjects(3)
  const blogposts: TBlogPost[] = await getLastsPosts(3)
  const quotes: string[] = getQuotes()

  return json({ projects, blogposts, quotes })
}


export default function Index() {
  const { projects, blogposts, quotes } = useLoaderData<TLoaderData>()

  return (
    <div className={styles.main}>
      <Navigation />
      <div className="h-16"></div>
      <div className={styles.wrapper}>
        <AboutSection quotes={quotes} />
        <BlogSection blogposts={blogposts.map(blogpost => ({
          ...blogpost,
          created_at: new Date(blogpost.created_at)
        }))} />
        <ProjectsSection projects={projects.map(project => ({
          ...project,
          last_update: new Date(project.last_update)
        }))} />
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
