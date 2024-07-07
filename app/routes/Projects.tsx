/* eslint-disable import/no-unresolved */
import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";

import { getAllProjects, TProjectShow } from "~/common/projects";
import { useLoaderData } from "@remix-run/react";
import ProjectFeatured from "~/components/ProjectFeatured";
import Project from "~/components/Project";


type TLoaderData = {
  projects: TProjectShow[]
}


export const meta: MetaFunction = () => {
  return [
    { title: "ByCernus Blog" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};


export const loader: LoaderFunction = async () => {
  const projects: TProjectShow[] = await getAllProjects()

  return json({ projects })
}


export default function Projects() {
  const { projects } = useLoaderData<TLoaderData>()

  const featured = projects.slice(0, 3).map(project => ({
    ...project,
    last_update: new Date(project.last_update)
  }))

  const other = projects.length > 3
    ? projects.slice(4, -1).map(project => ({
      ...project,
      last_update: new Date(project.last_update)
    }))
    : []


  const featured_projects = featured.map((project, index) => <ProjectFeatured key={index} odd={index % 2 === 1} {...project} />)
  const other_projects = other.map((project, index) => <Project key={index} {...project} />)

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Mis Proyectos</h1>
      <hr className={styles.separator} />
      <div className={styles.list_featured}>
        {featured_projects}
      </div>
      <div className={styles.list_other}>
        {other_projects}
      </div>
    </div>
  );
}


const styles = {
  main:
    "bg-gradient-to-bl from-taupe-950 to-cod-gray-950 min-h-screen ",
  wrapper:
    "max-w-3xl xl:max-w-5xl m-auto",
  title:
    "leading-normal text-5xl font-semibold text-stone-400 mb-2 ",
  separator:
    "border-stone-600 mb-4 ",
  list_featured:
    "flex flex-col gap-12 py-8",
  list_other:
    "flex flex-wrap justify-center gap-6 -mx-4 py-8 ",
}
