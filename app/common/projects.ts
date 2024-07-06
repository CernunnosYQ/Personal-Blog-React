export type TProject = {
  id: number,
  title: string,
  screen: string,
  description: string,
  last_update: Date,
  post: string,
  repo: string,
  container: string,
  preview: string,
  stack: Array<string>,
  tier: 'S' | 'A' | 'B' | 'C' | 'F',
  is_active: boolean
}


export type TProjectShow = Omit<TProject, 'tier' | 'is_active'>


export type TProjectCreate = {
  title: string,
  screen?: string,
  description: string,
  last_update?: Date,
  post?: string,
  repo?: string,
  container?: string,
  preview?: string,
  stack?: Array<string>,
  tier: 'S' | 'A' | 'B' | 'C' | 'F',
  is_active?: boolean,
}


const projects: TProject[] = [
  {
    id: 1,
    title: "Personal Portfolio",
    screen: "portfolio.png",
    description: "A personal portfolio website showcasing my projects and skills.",
    last_update: new Date("2024-06-01"),
    post: "/blog/portfolio",
    repo: "https://github.com/username/portfolio",
    container: "portfolio-container",
    preview: "https://portfolio.example.com",
    stack: ["React", "TypeScript", "CSS"],
    tier: "S",
    is_active: true,
  },
  {
    id: 2,
    title: "E-commerce Platform",
    screen: "ecommerce.png",
    description: "An online platform for buying and selling products.",
    last_update: new Date("2024-05-15"),
    post: "/blog/ecommerce",
    repo: "https://github.com/username/ecommerce",
    container: "ecommerce-container",
    preview: "https://ecommerce.example.com",
    stack: ["Next.js", "Node.js", "MongoDB"],
    tier: "A",
    is_active: true,
  },
  {
    id: 3,
    title: "Chat Application",
    screen: "chatapp.png",
    description: "A real-time chat application with user authentication.",
    last_update: new Date("2024-06-10"),
    post: "/blog/chatapp",
    repo: "https://github.com/username/chatapp",
    container: "chatapp-container",
    preview: "https://chatapp.example.com",
    stack: ["React", "Firebase", "Tailwind CSS"],
    tier: "B",
    is_active: true,
  },
  {
    id: 4,
    title: "Weather Dashboard",
    screen: "weather.png",
    description: "A dashboard to display current weather information.",
    last_update: new Date("2024-04-20"),
    post: "/blog/weather-dashboard",
    repo: "https://github.com/username/weather-dashboard",
    container: "weather-dashboard-container",
    preview: "https://weather-dashboard.example.com",
    stack: ["Vue.js", "Node.js", "Express"],
    tier: "C",
    is_active: true,
  },
  {
    id: 5,
    title: "Task Manager",
    screen: "taskmanager.png",
    description: "A task management application to organize daily tasks.",
    last_update: new Date("2024-03-30"),
    post: "/blog/task-manager",
    repo: "https://github.com/username/task-manager",
    container: "task-manager-container",
    preview: "https://task-manager.example.com",
    stack: ["Angular", "Firebase", "Bootstrap"],
    tier: "B",
    is_active: false,
  },
  {
    id: 6,
    title: "Blog Platform",
    screen: "blogplatform.png",
    description: "A platform for writing and sharing blog posts.",
    last_update: new Date("2024-02-28"),
    post: "/blog/blog-platform",
    repo: "https://github.com/username/blog-platform",
    container: "blog-platform-container",
    preview: "https://blog-platform.example.com",
    stack: ["Gatsby", "GraphQL", "Contentful"],
    tier: "A",
    is_active: true,
  },
  {
    id: 7,
    title: "Expense Tracker",
    screen: "expensetracker.png",
    description: "An application to track personal expenses.",
    last_update: new Date("2024-01-15"),
    post: "/blog/expense-tracker",
    repo: "https://github.com/username/expense-tracker",
    container: "expense-tracker-container",
    preview: "https://expense-tracker.example.com",
    stack: ["React", "Redux", "Node.js"],
    tier: "B",
    is_active: true,
  },
  {
    id: 8,
    title: "Recipe App",
    screen: "recipeapp.png",
    description: "An application to search and save recipes.",
    last_update: new Date("2023-12-10"),
    post: "/blog/recipe-app",
    repo: "https://github.com/username/recipe-app",
    container: "recipe-app-container",
    preview: "https://recipe-app.example.com",
    stack: ["React", "GraphQL", "Apollo"],
    tier: "C",
    is_active: false,
  },
  {
    id: 9,
    title: "Fitness Tracker",
    screen: "fitnesstracker.png",
    description: "An application to track fitness activities and goals.",
    last_update: new Date("2023-11-05"),
    post: "/blog/fitness-tracker",
    repo: "https://github.com/username/fitness-tracker",
    container: "fitness-tracker-container",
    preview: "https://fitness-tracker.example.com",
    stack: ["Vue.js", "Vuetify", "Firebase"],
    tier: "A",
    is_active: true,
  },
  {
    id: 10,
    title: "Portfolio Generator",
    screen: "portfoliogenerator.png",
    description: "A tool to generate personal portfolio websites.",
    last_update: new Date("2023-10-01"),
    post: "/blog/portfolio-generator",
    repo: "https://github.com/username/portfolio-generator",
    container: "portfolio-generator-container",
    preview: "https://portfolio-generator.example.com",
    stack: ["Next.js", "Tailwind CSS", "TypeScript"],
    tier: "S",
    is_active: true,
  },
];


export const getFeaturedProjects = async (quantity: number): Promise<TProjectShow[]> => {
  const res = new Promise((resolve, reject) => setTimeout(() => {
    const success = true

    if (success) {
      resolve(projects.slice(0, quantity).map(project => ({
        ...project,
        last_update: project.last_update.toISOString(), // Convert Date to ISO string
      })))
    } else {
      reject([])
    }
  }, 1000))

  return res as Promise<TProjectShow[]>
}


export const getAllProjects = async (): Promise<TProjectShow[]> => {
  const res = new Promise((resolve, reject) => setTimeout(() => {
    const success = true

    if (success) {
      resolve(projects.map(project => ({
        ...project,
        last_update: project.last_update.toISOString(), // Convert Date to ISO string
      })))
    } else {
      reject([])
    }
  }, 1000)
  )

  return res as Promise<TProjectShow[]>
}