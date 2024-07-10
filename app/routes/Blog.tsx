/* eslint-disable import/no-unresolved */
import { LoaderFunction, json } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import { getAllBlogpost, getTags, TBlogPost } from "~/common/blogposts"
import BlogpostPreview from "~/components/BlogpostPreview"
import NFIcon from "~/components/NFIcon"
import TagList from "~/components/TagList"


type TLoaderData = {
  blogposts: TBlogPost[],
  tags: string[]
}


export const loader: LoaderFunction = async () => {
  const blogposts: TBlogPost[] = await getAllBlogpost()
  const tags: string[] = await getTags()

  return json({ blogposts, tags })
}


export default function Blog() {
  const { blogposts, tags } = useLoaderData<TLoaderData>()

  const posts = blogposts.map((item, index) => {
    const bp = {
      ...item,
      created_at: new Date(item.created_at)
    }
    return <BlogpostPreview key={index} {...bp} />
  })

  return (
    <main className={styles.wrapper}>
      <h2 className={styles.title}>Blog</h2>
      <div className={styles.search}>
        <input type="text" placeholder="Buscar" className={styles.search_bar} />
        <NFIcon name="search" className={styles.search_icon} />
      </div>
      <hr className={styles.separator} />
      <section className={styles.list}>
        {posts}
      </section>
      {/* <div className="flex justify-between">
        <p className="text-left">Artículos recientes</p>
        <p className="text-right">Artículos anteriores</p>
      </div> */}
      <TagList tags={tags} />
    </main>
  )
}


const styles = {
  wrapper:
    "max-w-3xl xl:max-w-5xl m-auto",
  title:
    "leading-normal text-5xl font-semibold text-stone-400 mb-2 ",
  separator:
    "border-stone-600 mb-4 ",
  list:
    "flex flex-col gap-12 py-8",
  search:
    "inline-block w-1/2 flex items-center bg-taupe-900/25 text-stone-400 bg-taupe-900/25 rounded-lg mb-4",
  search_bar:
    "bg-transparent px-4 py-2 focus:outline-none flex-grow",
  search_icon:
    "px-4",
}
