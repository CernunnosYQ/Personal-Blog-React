export type TBlogPost = {
  id: number
  title: string
  slug: string
  tags: string[]
  banner: string
  content: string
  author: string
  created_at: Date
  previous: string | null
  next: string | null
  is_active: string
}

const posts: TBlogPost[] = [
  {
    id: 1,
    title: "Introduction to Remix",
    slug: "introduction-to-remix",
    banner: "remix-intro-banner.png",
    tags: ["remix", "ui"],
    content: "Remix is a modern web framework for building user interfaces... Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui amet omnis harum aut, suscipit sint sed quaerat reiciendis vero ea iure voluptate, accusantium nulla impedit. Sed obcaecati corrupti consequuntur tempore.",
    author: "John Doe",
    created_at: new Date("2023-01-01"),
    previous: null,
    next: "getting-started-with-remix",
    is_active: "true"
  },
  {
    id: 2,
    title: "Getting Started with Remix",
    slug: "getting-started-with-remix",
    banner: "https://example.com/images/remix-getting-started-banner.jpg",
    tags: ["remix", "ui", "fontend"],
    content: "To get started with Remix, you'll need to set up a new project... Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui amet omnis harum aut, suscipit sint sed quaerat reiciendis vero ea iure voluptate, accusantium nulla impedit. Sed obcaecati corrupti consequuntur tempore.",
    author: "John Doe",
    created_at: new Date("2023-01-02"),
    previous: "introduction-to-remix",
    next: "remix-routing-basics",
    is_active: "true"
  },
  {
    id: 3,
    title: "Remix Routing Basics",
    slug: "remix-routing-basics",
    banner: "https://example.com/images/remix-routing-banner.jpg",
    tags: ["remix", "ui", "fontend", "routing"],
    content: "Routing in Remix is straightforward and flexible... Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui amet omnis harum aut, suscipit sint sed quaerat reiciendis vero ea iure voluptate, accusantium nulla impedit. Sed obcaecati corrupti consequuntur tempore.",
    author: "Jane Smith",
    created_at: new Date("2023-01-03"),
    previous: "getting-started-with-remix",
    next: "remix-data-fetching",
    is_active: "true"
  },
  {
    id: 4,
    title: "Remix Data Fetching",
    slug: "remix-data-fetching",
    banner: "https://example.com/images/remix-data-fetching-banner.jpg",
    tags: ["remix", "ui", "fontend"],
    content: "Fetching data in Remix can be done using loaders... Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui amet omnis harum aut, suscipit sint sed quaerat reiciendis vero ea iure voluptate, accusantium nulla impedit. Sed obcaecati corrupti consequuntur tempore.",
    author: "Jane Smith",
    created_at: new Date("2023-01-04"),
    previous: "remix-routing-basics",
    next: "remix-forms-and-actions",
    is_active: "true"
  },
  {
    id: 5,
    title: "Remix Forms and Actions",
    slug: "remix-forms-and-actions",
    banner: "https://example.com/images/remix-forms-banner.jpg",
    tags: ["remix", "ui", "fontend"],
    content: "Handling forms and actions in Remix is efficient and powerful... Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui amet omnis harum aut, suscipit sint sed quaerat reiciendis vero ea iure voluptate, accusantium nulla impedit. Sed obcaecati corrupti consequuntur tempore.",
    author: "John Doe",
    created_at: new Date("2023-01-05"),
    previous: "remix-data-fetching",
    next: null,
    is_active: "true"
  }
];


const tags = ["remix", "ui", "fontend", "python", "backend", "fastapi", "ci/cd", "web", "juegos"]


export const getAllBlogpost = async (): Promise<TBlogPost[]> => {
  const res = new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true

      if (success === true) {
        resolve(posts as TBlogPost[])
      } else {
        reject([])
      }
    }, 1000)
  })

  return res as Promise<TBlogPost[]>
}

export const getLastsPosts = async (quantity: number): Promise<TBlogPost[]> => {
  const res = new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true

      if (success === true) {
        resolve(posts.slice(0, quantity).map(project => ({
          ...project,
          created_at: project.created_at.toISOString(), // Convert Date to ISO string
        })))
      } else {
        reject([])
      }
    }, 1000)
  })

  return res as Promise<TBlogPost[]>
}

export const getPost = async (slug: string): Promise<string> => {
  return slug
}

export const getTags = async (): Promise<string[]> => {
  const res = new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true

      if (success === true) {
        resolve(tags)
      } else {
        reject([])
      }
    }, 1000)
  })

  return res as Promise<string[]>
}
