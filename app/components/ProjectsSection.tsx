/* eslint-disable import/no-unresolved */
import { Link } from "@remix-run/react"

import type { TProjectShow } from "~/common/projects"
import ProjectFeatured from "~/components/ProjectFeatured"


type TProjectSectionProps = {
  projects: TProjectShow[]
}


export default function ProjectsSection(props: TProjectSectionProps) {
  const projects = props.projects.map((project, index) => <ProjectFeatured key={index} odd={index % 2 === 1} {...project} />)

  return (
    <section id="projects" className={styles.wrapper}>
      <h2 className={styles.title}>Mis proyectos</h2>
      <hr className={styles.separator} />
      <div className={styles.list}>
        {projects}
      </div>
      <Link to="/projects" className={styles.button}>Ver más</Link>
    </section>
  )
}

const styles = {
  wrapper:
    "w-5/6 m-auto mb-12 flex flex-col items-center  ",
  list:
    "flex flex-col gap-16 ",
  title:
    "text-2xl text-center font-bold text-stone-400 ",
  separator:
    "border-stone-600 w-1/3 mx-auto mt-2 mb-8 ",
  button:
    "inline-block mt-12 py-2 w-1/3 bg-cherokee-400/85 font-medium text-center rounded-md cursor-pointer hover:scale-105 transition-all duration-200 "
}