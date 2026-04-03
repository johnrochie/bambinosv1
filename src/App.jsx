import { siteConfig } from './config/siteConfig'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { WhatWeOffer } from './components/WhatWeOffer'
import { Gallery } from './components/Gallery'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        {siteConfig.modules.hero && <Hero />}
        {siteConfig.modules.about && <About />}
        {siteConfig.modules.whatWeOffer && <WhatWeOffer />}
        {siteConfig.modules.gallery && <Gallery />}
        {siteConfig.modules.contact && <Contact />}
      </main>
      <Footer />
    </>
  )
}

export default App
