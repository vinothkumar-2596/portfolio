import Hero from '@components/sections/hero'

import Projects from '@components/sections/projects'

import Booking from '@components/sections/booking'
import Footer from '@components/sections/footer'
import ScrollToTop from '@components/sections/scrollToTop'
import Preloader from '@components/ui/preloader'

const App = () => {
  return (
    <>
      <Preloader />
      {/* <Header /> */}
      <main>
        <Hero />
        {/* <RecentProjects /> */}
        {/* <Partners /> */}
        {/* <About /> */}
        {/* <WorkingProcess /> */}
        {/* <Services /> */}
        <Projects />
        {/* <Testimonials />
        <Features />
        <Pricing /> */}
        {/* <Faqs /> */}
        {/* <Booking /> */}
      </main>
      {/* <Footer /> */}
      {/* <ScrollToTop /> */}
    </>
  )
}

export default App