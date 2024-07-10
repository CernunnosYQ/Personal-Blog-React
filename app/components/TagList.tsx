export default function TagList(props: { tags: string[] }) {
  const tag_list = props.tags.map((item, index) =>
    <li key={index} className={styles.tag}>
      {` ${item}`}
    </li>
  )

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Tags</h3>
      <ul className={styles.tags}>
        {tag_list}
      </ul>
    </div>
  )
}

const styles = {
  wrapper:
    "flex flex-row justify-center items-center mt-16 mb-8",
  title:
    "text-stone-400 text-6xl font-semibold leading-none border-r px-6 pb-4 ",
  tags:
    "flex w-5/12 justify-start items-center flex-wrap mb-2 px-4 ",
  tag:
    "px-2 py-1 font-medium text-sm uppercase text-cyan-400 ",
}