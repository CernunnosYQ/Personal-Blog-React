const styles = {
  footer:
    "text-center py-8 ",
  socials:
    "p-2 flex justify-center gap-4 text-2xl ",
  icon:
    "nf "
    + "text-stone-400 hover:text-stone-200 ",
  signature:
    "p-2 "
    + "text-stone-400 "
}


export default function Footer() {
  return (
    <div className={styles.footer}>
      <p className={styles.socials}>
        <a href="mailto:"><i className={styles.icon + "nf-md-email"} /></a>
        <a href="https://www.linkedin.com/"><i className={styles.icon + "nf-md-linkedin"} /></a>
        <a href="https://github.com/"><i className={styles.icon + "nf-md-github"} /></a>
        <a href="https://x.com/"><i className={styles.icon + "nf-md-twitter"} /></a>
      </p>
      <p className={styles.signature}>
        With <i className="nf nf-md-heart text-sm" /> byCernus &copy; 2024
      </p>
    </div>
  )
}