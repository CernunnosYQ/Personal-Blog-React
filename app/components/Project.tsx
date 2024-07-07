/* eslint-disable import/no-unresolved */

import { useState } from "react";
import { Link } from "@remix-run/react";

import NFIcon from "~/components/NFIcon";
import { TProjectShow } from "~/common/projects";


export default function Project(props: TProjectShow) {
  const tag_list = props.stack.map((item, index) => {
    const punctuationAndSpaceRegex = /[ !"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/g
    const icon_name = item.trim().replace(punctuationAndSpaceRegex, '').toLowerCase();

    return (
      <li key={index} className={styles.tag}>
        <NFIcon name={icon_name} />
      </li>
    )
  })

  const [expanded, setExpanded] = useState(false)


  return (
    <div
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      className={styles.project}>
      <Link to={props.post} className={styles.figure}>
        <img src={`/${props.screen}`} alt={props.title} />
      </Link>
      <div className={styles.links}>
        <a href={props.preview} target='blank' className={styles.link}>
          <NFIcon name="external" /></a>
        <a href={props.repo} target='blank' className={styles.link}>
          <NFIcon name="github" /></a>
      </div>
      <div className={styles.content}>
        <p className={styles.sup}>Ejemplo de proyecto</p>
        <Link to={props.post}>
          <h3 className={styles.title}>{props.title}</h3>
        </Link>
        <p className={styles.description + (expanded ? 'h-min ' : 'h-0 ')}>
          {props.description} <Link to={props.post} className={styles.link}>Ver más</Link>
        </p>
      </div>
      <ul className={styles.tags}>
        {tag_list}
      </ul>
    </div>
  )
}


const styles = {
  project:
    "bg-taupe-900/25 text-stone-200 rounded-2xl overflow-hidden text-center max-w-[20rem] ",
  figure:
    " ",
  content:
    "px-2",
  sup:
    "text-xs font-medium dark:text-teal-500 px-2 ",
  title:
    "font-bold text-2xl -mt-1 px-2 text-cherokee-400 ",
  description:
    "overflow-hidden ",
  link:
    "hover:text-stone-300 p-2 pb-0",
  links:
    "flex justify-between text-stone-500 text-lg px-2 -mb-1",
  tags:
    "flex justify-center flex-wrap px-2 mb-2 text-stone-500 text-lg",
  tag:
    "hover:text-stone-300 p-2 cursor-pointer",
}