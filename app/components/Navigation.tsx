import { Link } from "@remix-run/react"


const styles = {
  wrapper:
    "fixed w-screen bg-cod-gray-950/30 backdrop-blur-sm border-b border-stone-600 shadow-sm ",
  navbar:
    "flex justify-between " +
    "mx-auto py-4 max-w-3xl " +
    "xl:max-w-5xl ",
  logo:
    "text-4xl text-cherokee-400 pb-1 -pt-1 px-2 ",
  main:
    "flex justify-start items-baseline gap-4 text-lg ",
  secondary:
    "flex justify-end items-center gap-5 text-lg ",
  navlink:
    "font-medium " +
    "text-stone-400 border-cherokee-400 hover:text-stone-200 hover:border-b-4 " +
    "active:text-cherokee-400 "
}


export default function Navigation() {
  return (
    <div className={styles.wrapper}>
      <nav className={styles.navbar}>
        <ul className={styles.main}>
          <li className={styles.logo}>
            <i className="nf nf-md-robot_confused" />
          </li>
          <li>
            <Link to="/" className={styles.navlink}>Inicio</Link>
          </li>
          <li>
            <Link to="/projects" className={styles.navlink}>Projectos</Link>
          </li>
          <li>
            <Link to="/blog" className={styles.navlink}>Blog</Link>
          </li>
        </ul>
        <ul className={styles.secondary}>
          <li>
            <button className={styles.navlink}>
              <i className="nf nf-fa-search" />
            </button>
          </li>
          <li>
            <button className={styles.navlink}>
              <i className="nf nf-md-white_balance_sunny" />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  )
}
