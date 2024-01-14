/* eslint-disable @next/next/no-img-element */
import LinkCustom from '@/components/ui/LinkCustom'
import Card from '@/components/ui/Card'
import { InstagramIcon, TwitterIcon, FacebookIcon } from '@/components/icons/Media'

export default function Home () {
  return (
    <div className='flex flex-col'>
      <main className='flex-1'>
        <section className='w-fit pt-12 md:pt-24 lg:pt-32 mx-auto'>
          <div className='px-4 md:px-6 space-y-4'>
            <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]'>
              Your Exam Preparation Partner
            </h1>
            <p className='max-w-[700px] text-gray-600 md:text-xl'>
              Our mock exam generator is designed to help you prepare for your exams effectively. We provide custom test
              papers tailored to your curriculum.
            </p>
          </div>
        </section>
        <section className='w-full py-12 md:py-24 lg:py-32'>
          <div className='space-y-12 px-4 md:px-6 mx-auto w-fit'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>Features & Benefits</h2>
            <div className='mx-auto grid items-start gap-4 sm:gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3'>
              <Card>
                <h3 className='font-bold mb-2'>Customizable</h3>
                <p>
                  Customize your mock exams to match your syllabus and learning goals.
                </p>
              </Card>
              <Card>
                <h3 className='font-bold mb-2'>Diverse Question Pool</h3>
                <p>
                  Our question pool is constantly updated to provide you with diverse challenges.
                </p>
              </Card>
              <Card>
                <h3 className='font-bold mb-2'>Instant Feedback</h3>
                <p>
                  Get instant feedback on your performance to identify areas for improvement.
                </p>
              </Card>
            </div>
          </div>
        </section>
        <section className='mx-auto w-fit py-6 pb-12'>
          <h2 className='text-3xl tracking-tighter'>Support by</h2>
          <img src='https://www.cambridgeenglish.org/latinamerica/Images/Cambridge_Press_Assessment_Landscape_Logo_RGB-280x55.png' alt='cambridge logo' />
        </section>
      </main>

      <footer className='flex flex-col gap-6 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6'>
        <p className='text-xs'>© ExamGen. All rights reserved.</p>
        <nav className='sm:ml-auto flex gap-6'>
          <LinkCustom href='#'>
            Terms of Service
          </LinkCustom>
          <LinkCustom href='#'>
            Privacy
          </LinkCustom>
        </nav>
        <div className='flex items-center space-x-4'>
          <LinkCustom href='#'>
            <FacebookIcon className='size-4' />
          </LinkCustom>
          <LinkCustom href='#'>
            <TwitterIcon className='size-4' />
          </LinkCustom>
          <LinkCustom href='#'>
            <InstagramIcon className='size-4' />
          </LinkCustom>
        </div>
      </footer>
    </div>
  )
}
