export type TBlogPost = {
    id: number,
    title: string
}

export const getAllBlogpost = async (): Promise<TBlogPost[] | null> => {
    const res = new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true

            if (success === true) {
                resolve([{ id: 1, title: "Title" }] as TBlogPost[])
            } else {
                reject([])
            }
        }, 1000)
    })

    return res as Promise<TBlogPost[]>
}
