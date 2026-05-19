import Hero from "@/components/LandingPageComponents/hero";
import Ads from "@/components/LandingPageComponents/Ads"
import Desc from "@/components/LandingPageComponents/desc"
import Footer from "@/components/ReusableComponents/footer"

export default function Home() {
 
  return (
    <div className="">
       <Hero/>
       <section className="px-5 md:px-5 lg:px-[165px]">
        <Ads/>
        <Desc/>
       </section>
      <Footer/>
    </div>
  );
}
