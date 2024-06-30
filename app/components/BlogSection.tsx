import type { TBlogPost } from "~/common/blogposts"

type TBlogSectionProps = {
    blogposts: TBlogPost[]
}


export default function BlogSection({ blogposts }: TBlogSectionProps) {
    return (
        <section id="about" className={styles.wrapper}>
            <p></p>
            <figure>
                {blogposts.map(bp => bp.title)}
            </figure>
        </section>
    )
}


const styles = {
    wrapper:
        "h-screen "
}