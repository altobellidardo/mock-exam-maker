import Link from 'next/link'
import Button from './ui/Button'

function AccordionItem ({ part }) {
  const { title, description, url } = part
  return (
    <details name='fce'>
      <summary className='hover:underline underline-offset-4 hover:text-orange-500 bg-orange-300 p-4 rounded-xl'>{title}</summary>
      <div className='flex flex-col gap-[20px] border-2 border-orange-300 rounded-xl mt-2 p-4'>
        <p>{description}</p>
        <Link href={url}>
          <Button>
            Test
          </Button>
        </Link>
      </div>
    </details>
  )
}

export default AccordionItem
