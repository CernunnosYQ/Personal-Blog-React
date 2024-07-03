import { Link } from "@remix-run/react"

import type { TBlogPost } from "~/common/blogposts"

export default function BlogpostPreview(props: TBlogPost) {
  const dateOptions = { year: "numeric", month: "long", day: "numeric" } as Intl.DateTimeFormatOptions
  const dateString = props.created_at.toLocaleDateString("es-MX", dateOptions)

  const tag_list = ['TDD', 'python', 'ci/cd'].map((item, index) =>
    <a key={index} href="/" className={styles.tag}>
      {item}
    </a>
  )

  return (
    <article className={styles.blogpost}>
      <Link to={`/blog/${props.slug}`} className={styles.banner}>
        <img src={`/${props.banner}`} alt={props.title} />
      </Link>
      <div className="my-auto">
        <Link to={`/blog/${props.slug}`} className={styles.title}>
          <h2>{props.title}</h2>
        </Link>
        <p className={styles.meta}>
          <i className="nf nf-fa-user " /> {props.author} | <i className="nf nf-md-calendar " /> {dateString}</p>
        <p className={styles.description}>{props.content}</p>
        <p className={styles.tags}>{tag_list}</p>
      </div>
    </article>
  )
}


const styles = {
  blogpost:
    "flex gap-8 hover:scale-105 transition-all duration-200 ",
  banner:
    "w-1/3 shrink-0 flex items-center ",
  title:
    "text-cherokee-400 text-2xl font-medium ",
  meta:
    "leading-tight text-sm text-stone-500 ",
  description:
    "text-stone-300 mt-3 mb-4 line-clamp-3 ",
  tags:
    "flex gap-2 ",
  tag:
    "px-2 py-1 rounded-md bg-taupe-900/20 text-sm font-medium text-teal-400  "
}