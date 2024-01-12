import Link from 'next/link'
import LinkCustom from './ui/LinkCustom'
import Button from './ui/Button'
import GraduationCapIcon from './icons/Graduation'

function Navbar () {
  return (
    <header className='h-16 px-2 mx-auto flex items-center w-screen md:w-[60vw] justify-between'>
      <Link className='flex items-center justify-center gap-2 hover:bg-orange-500 px-2 py-1 hover:text-orange-100' href='/'>
        <GraduationCapIcon className='size-6' />
        <span>ExamGen</span>
      </Link>
      <nav className='ml-auto gap-2 md:gap-6 hidden md:flex'>
        <LinkCustom href='/fce'>
          FCE
        </LinkCustom>
        <LinkCustom href='/sat'>
          SAT
        </LinkCustom>
      </nav>
      <div className='ml-1 md:ml-6'>
        <LinkCustom href='/fce'>
          <Button>Start Generator</Button>
        </LinkCustom>
      </div>
    </header>
  )
}

export default Navbar
