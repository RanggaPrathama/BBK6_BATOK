import AboutUs from "@/components/home/AboutUs";
import Hero from "@/components/home/Hero";
import Programs from "@/components/home/Programs";
import TeamCarousel from "@/components/home/TeamCarousel";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen pt-16">
      
      <Hero />

      <div id="aboutUs">
        <AboutUs />
      </div>

      <Programs />
      
      <TeamCarousel />
    </div>
  );
}
