import { Link } from "@remix-run/react"

export default function ErrorPage404() {
  return (
    <main className={styles.wrapper}>
      <img className={styles.figure} src="/corruption.png" alt="Abismo olvidado" />
      <div className={styles.content}>
        <h2 className={styles.title}>404</h2>
        <hr className={styles.separator} />
        <p className={styles.text + "font-bold"}>Te has adentrado en una zona inhóspita</p>
        <p className={styles.text}>La página que buscas se ha desvanecido</p>
        <Link className={styles.return} to={"/blog"}>Volver</Link>
      </div>
    </main>
  )
}


const styles = {
  wrapper: "max-w-3xl xl:max-w-5xl m-auto flex justify-center items-center ",
  content: "w-2/4 text-center ",
  separator: "w-2/3 border-stone-600 mx-auto mb-4 ",
  title: "text-9xl font-semibold mb-2 text-cherokee-400 ",
  text: "text-xl text-stone-400 -mt-1 ",
  return: "inline-block my-8 py-2 w-1/3 bg-cherokee-400/85 font-medium text-center rounded-md cursor-pointer hover:scale-105 transition-all duration-200 ",
  figure: "w-1/4",
}