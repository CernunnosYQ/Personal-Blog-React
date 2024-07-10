type TIconClasses = {
    [key: string]: string
}


const icon_classes: TIconClasses = {
    python: "nf-dev-python",
    typescript: "nf-md-language_typescript",
    tailwind: "nf-md-tailwind",
    tailwindcss: "nf-md-tailwind",
    react: "nf-dev-react",
    reactjs: "nf-dev-react",
    remix: "",
    nextjs: "nf-md-triangle_small_up",
    nodejs: "nf-md-nodejs",
    mongodb: "nf-dev-mongodb",
    firebase: "nf-md-firebase",
    external: "nf-fa-external_link",
    github: "nf-fa-github",
    linkedin: "",
    search: "nf-fa-search"
}


export default function NFIcon(props: { name: string, className: string }) {
    return (
        <i className={"nf " + (icon_classes[props.name] ?? "nf-cod-question") + ` ${props.className}`}></i>
    )
}