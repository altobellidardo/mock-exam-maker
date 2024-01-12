'use client'
import Button from '@/components/ui/Button'

import data1 from '@/data/fce/writing/essay/1.json'
import data2 from '@/data/fce/writing/essay/2.json'

import { useState } from 'react'

function Essay () {
  const [data, setData] = useState(data1)
  return (
    <section className='w-[60vw] text-left font-normal'>
      <header>
        <p className='font-bold'>{data.title}</p>
        <p className='text-center font-bold'>{data.question}</p>

        <ol className='list-decimal md:ml-20'>
          <li>{data.item1}</li>
          <li>{data.item2}</li>
          <li>________(your own idea)</li>
        </ol>
      </header>

      <p className='mt-4'>Write here:</p>
      <textarea className='border border-black rounded-md p-4 w-full bg-slate-300 focus:ring outline-none border-none focus:outline-none' cols='30' rows='10' />

      <footer>
        <Button onClick={() => {
          if (data === data1) setData(data2)
          else setData(data1)
        }}
        >
          Generate other example
        </Button>
      </footer>
    </section>
  )
}

function Review () {
  return (
    <div>Review</div>
  )
}

function Article () {
  return (
    <div>Article</div>
  )
}

function Email () {
  return (
    <div>Email</div>
  )
}

function Report () {
  return (
    <div>Report</div>
  )
}

const SECTIONS_COMPONENTS = {
  Essay,
  Review,
  Article,
  Email,
  Report
}

export default function Sections ({ topic }) {
  return SECTIONS_COMPONENTS[topic]()
}
