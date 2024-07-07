import { Link } from "@remix-run/react"


const styles = {
  wrapper:
    "w-screen py-8 ",
  navbar:
    "flex justify-between items-center " +
    "mx-auto max-w-3xl " +
    "xl:max-w-5xl ",
  logo:
    "text-4xl text-cherokee-400 pb-1 -pt-1  ",
  title:
    "inline-block font-semibold ml-2 leading-relaxed text-2xl ",
  main:
    "flex justify-end items-baseline gap-6 pr-3 ",
  secondary:
    "flex justify-end items-center gap-5 text-lg ",
  search:
    "",
  navlink:
    "font-medium " +
    "text-stone-400 border-y-4 border-transparent hover:border-b-cherokee-400 hover:text-stone-200 " +
    "active:text-cherokee-400 ",
  navbtn:
    "text-lg " +
    "text-stone-400 hover:text-stone-200 "
}


export default function Navigation() {
  return (
    <div className={styles.wrapper}>
      <nav className={styles.navbar}>
        <Link to={"/"} className={styles.logo}>
          <i className="nf nf-md-robot_confused" />
          <span className={styles.title}>byCernu</span>
        </Link>
        <ul className={styles.main}>
          <li>
            <Link to="/projects" className={styles.navlink}>Projectos</Link>
          </li>
          <li>
            <Link to="/blog" className={styles.navlink}>Blog</Link>
          </li>
          <li>
            <Link to="/about" className={styles.navlink}>Sobre mí</Link>
          </li>
          <li>
            <button className={styles.navbtn}>
              <i className="nf nf-md-white_balance_sunny" />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  )
}
