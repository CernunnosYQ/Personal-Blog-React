import { useState, useEffect } from "react"


export default function AboutSection(props: { quotes: string[] }) {
  const { quotes } = props
  const [quoteIndex, setQuoteIndex] = useState(0)

  const calculateIntervalTime = (quote: string) => {
    return (quote.length + Math.log(quote.length)) * 150
  };

  useEffect(() => {
    const currentQuote = quotes[quoteIndex]
    const intervalTime = calculateIntervalTime(currentQuote)

    const interval = setInterval(() => {
      setQuoteIndex((prevIndex: number) => (prevIndex + 1) % quotes.length)
    }, intervalTime)

    return () => clearInterval(interval)
  }, [quoteIndex, quotes])

  return (
    <section id="about" className={styles.wrapper}>
      <p className={styles.quote}>
        <span className="type" key={quoteIndex} style={{ '--n': quotes[quoteIndex].length } as React.CSSProperties}>
          {quotes[quoteIndex]}
        </span>
      </p>
      <img src="/profile.png" alt="profile" className={styles.profile} />
    </section>
  )
}


const styles = {
  wrapper:
    "py-8 flex justify-center gap-8 items-start animate-floating ",
  profile:
    "h-96 ",
  quote:
    "w-2/4 mt-8 py-8 px-6 text-lg text-stone-200 bg-cod-gray-950/25 border-2 border-stone-600 rounded-3xl rounded-br-none animate-floating "
}