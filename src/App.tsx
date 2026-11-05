import { CandidateSection } from '@/components/sections/CandidateSection'
import { ElectionActivitiesSection } from '@/components/sections/ElectionActivitiesSection'
import { HeroSection } from '@/components/sections/HeroSection'
import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'
import { featuredAnnouncement } from '@/data/announcement'

function App() {
  return (
    <div id="hero" className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection announcement={featuredAnnouncement} />
        <CandidateSection />
        <ElectionActivitiesSection />
      </main>
      <Footer publishedDate={featuredAnnouncement.publishedDate} />
    </div>
  )
}

export default App
