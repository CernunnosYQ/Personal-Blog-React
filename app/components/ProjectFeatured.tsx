import { Link } from "@remix-run/react";
import type { TProjectShow } from "~/common/projects";

export default function ProjectFeatured(props: TProjectShow & { odd: boolean }) {
  const tag_list = props.stack.map((item, index) =>
    <li key={index} className={styles.tag}>
      {` ${item}`}
    </li>
  )

  return (

    <div className={styles.featured + (props.odd ? styles.featured_odd : "")}>
      <div className={styles.content}>
        <p className={styles.sup}>Ejemplo de proyecto</p>
        <Link to={props.post}>
          <h3 className={styles.title}>{props.title}</h3>
        </Link>
        <p className={styles.description + (props.odd ? styles.description_odd : styles.description_even)}>
          {props.description} <Link to={props.post} className={styles.link}>Ver más</Link>
        </p>
        <ul className={styles.tags + (props.odd ? styles.tags_odd : "")}>
          {tag_list}
        </ul>
        <a href={props.preview} target='blank' className={styles.link}>Preview <i className='nf nf-fa-external_link' /></a>
        <a href={props.repo} target='blank' className={styles.link}><i className='nf nf-fa-github' /></a>
      </div>
      <Link to={props.post} className={styles.figure}>
        <img src={`/${props.screen}`} alt={props.title} />
      </Link>
    </div>
  )
}


const styles = {
  featured: "flex gap-8 hover:scale-105 transition-all duration-200 ",
  featured_odd: "text-right flex-row-reverse ",
  content: "w-1/2 my-auto -mx-4 ",
  sup: "text-xs font-medium dark:text-teal-500 px-2 ",
  title: "font-bold text-3xl mb-4 px-2  text-cherokee-600 ",
  description: "relative bg-taupe-900/25 text-stone-300 px-4 py-2 rounded-md mb-4 z-20 backdrop-blur-sm ",
  description_even: "-mr-12 ml-0 ",
  description_odd: "mr-0 -ml-12 ",
  tags: "flex justify-start flex-wrap gap-2 mb-2 ",
  tags_odd: "justify-end ",
  tag: "px-2 py-1 rounded-md bg-taupe-900/20 text-sm font-medium text-cherokee-400 ",
  link: "text-stone-500 px-2 py-1 rounded-md ",
  figure: "w-1/2 my-auto flex rounded-md shadow-sm dark:shadow-slate-600 "
}