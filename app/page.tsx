import Hero  from '@/components/Landing/Hero'
import GeneralPage from '@/components/Landing/GeneralPage'
import AboutUs from '@/components/Landing/AboutUs'

export default function Home() {
  return (
    <div className='relative'>
      <Hero />
      <AboutUs />
      <GeneralPage />
    </div>
  )
}
