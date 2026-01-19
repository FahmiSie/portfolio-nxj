import Hero from "@/components/hero";
import Marquee from "@/components/marquee";
import HomeSections from "@/components/section/home-sections";
export default function Home(){
  return(
    <main>
      <Hero/>
      <Marquee/>
      <HomeSections/>
    </main>
  )
}