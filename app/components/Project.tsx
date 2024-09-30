/* eslint-disable import/no-unresolved */

import styles from "./Project.module.css"

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


  return (
    <div
      className={styles.project}>
      <img src={`/${props.screen}`} alt={props.title} className={styles.figure} />
      <div className={styles.content}>
        <div className={styles.toplinks}>
          <a href={props.preview} target='blank' className={styles.link}>
            <NFIcon name="external" /></a>
          <a href={props.repo} target='blank' className={styles.link}>
            <NFIcon name="github" /></a>
        </div>
        <p className={styles.super}>Ejemplo de proyecto</p>
        <Link to={props.post}>
          <h3 className={styles.title}>{props.title}</h3>
        </Link>
        <div className={styles.description}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ab dolore odit et debitis pariatur nulla culpa laboriosam aliquid reiciendis!
          </p>
          <Link to={props.post} className={styles.link}>Leer más <NFIcon name="arrowright" /></Link>
        </div>
        <ul className={styles.tags}>
          {tag_list}
        </ul>
      </div>
    </div>
  )
}