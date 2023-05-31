import AboutUs from '@/components/AboutUs'
import { Hero } from '@/components'
import Image from 'next/image'
import GeneralPage from '@/components/GeneralPage'

export default function Home() {
  return (
    <div className='relative'>
      <Hero />
      <AboutUs />
      <GeneralPage />
    </div>
  )
}
