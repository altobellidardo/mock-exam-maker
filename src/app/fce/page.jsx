import AccordionItem from '@/components/AccordionItem'

const parts = [
  {
    title: 'Reading',
    description: 'Shows you can deal confidently with different types of text, such as fiction, newspapers and magazines.',
    url: '/fce/reading'
  },
  {
    title: 'Use of English',
    description: 'Tests your use of English with tasks that show how well you can control your grammar and vocabulary.',
    url: '/fce/use-of-english'
  },
  {
    title: 'Writing',
    description: 'Requires you to be able to produce two different pieces of writing, such as letters, reports, reviews and essays.',
    url: '/fce/writing'
  },
  {
    title: 'Listening',
    description: 'Shows you can deal confidently with different types of text, such as fiction, newspapers and magazines.',
    url: '/fce/listening'
  },
  {
    title: 'Speaking',
    description: 'Shows how good your spoken English is as you take part in conversation by asking/answering questions and discussing topics. Your Speaking test will be face to face with one or two other candidates and two examiners. One of the examiners (who could be online, examining remotely) talks to you and the other examiner listens. This makes your test more realistic and more reliable. Examiners may use their mobile phones for entering marks using an app.',
    url: '/fce/speaking'
  }
]

export default function FCE () {
  return (
    <main className='flex flex-col items-center pt-10'>
      <section className=' w-[80vw] md:w-[60vw]' id='fce'>
        {parts.map(part => (
          <AccordionItem key={part.title} part={part} />
        ))}
      </section>
    </main>
  )
}
