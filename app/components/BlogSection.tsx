import { Link } from "@remix-run/react"

import type { TBlogPost } from "~/common/blogposts"
import BlogpostPreview from "./BlogpostPreview"

type TBlogSectionProps = {
  blogposts: TBlogPost[]
}


export default function BlogSection({ blogposts }: TBlogSectionProps) {
  const posts = blogposts.map((bp, index) => <BlogpostPreview key={index} {...bp} />)

  return (
    <section id="about" className={styles.wrapper}>
      <h2 className={styles.title}>Últimos artículos</h2>
      <hr className={styles.separator} />
      <div className={styles.list}>
        {posts}
      </div>
      <Link to="/projects" className={styles.button}>Artículos anteriores</Link>
    </section >
  )
}


const styles = {
  wrapper:
    "w-5/6 m-auto flex flex-col items-center mb-12 ",
  list:
    "flex flex-col gap-8 ",
  title:
    "text-2xl text-center font-bold text-stone-400 ",
  separator:
    "border-stone-600 w-1/3 mx-auto mt-2 mb-8 ",
  button:
    "inline-block mt-12 py-2 w-1/3 bg-cherokee-400/70 font-medium text-center rounded-md cursor-pointer hover:scale-105 transition-all duration-200 "
}