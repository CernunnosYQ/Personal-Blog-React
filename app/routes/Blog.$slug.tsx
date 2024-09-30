import { LoaderFunction, json } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import invariant from 'tiny-invariant'

export const loader: LoaderFunction = async ({ params }) => {
    const { slug } = params
    invariant(slug, "")

    if (slug == "") {
        throw new Response("Not Found", { status: 404 })
    }

    return json({ "slug": slug })
}


export default function BlogPost() {
    const { slug } = useLoaderData<{ "slug": string }>()

    return (
        <h1>{slug}</h1>
    )
}