import Link from 'next/link'
import Button from './ui/Button'

function AccordionItem ({ part }) {
  const { title, description, url } = part
  return (
    <details name='fce' className='border-2 border-orange-300 rounded-xl mb-2 overflow-hidden'>
      <summary className='hover:underline underline-offset-4 hover:text-orange-500 bg-orange-300 p-4'>
        {title}
      </summary>
      <div className='flex flex-col gap-[20px] p-4'>
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
