import Link from 'next/link'

function LinkCustom ({ children, ...props }) {
  return (
    <Link {...props} className='text-sm font-medium hover:underline underline-offset-4 hover:text-orange-500'>
      {children}
    </Link>
  )
}

export default LinkCustom
