import HomeSection from "@/components/HomeSection"
import AboutSection from "@/components/AboutSection"
import ProjectSection from "@/components/ProjectSection"


export default function Home() {
  return (
  <main className="mx-auto max-w-3xl px-4 md:max-w-5 md:px-6">
    <HomeSection/>
    <AboutSection/>
    <ProjectSection/>
  </main>
  )
}
