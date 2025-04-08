import { CompareDemo } from "@/components/CompareDemo";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { ThreeDMarqueeDemo } from "@/components/ThreeDMarqueeDemo";
import { Cover } from "@/components/ui/cover";
import WorkCarousel from "@/components/WorkCarousel";

export default function Home() {
  return (
    <main>
      <Hero />
      <p id="my-work" className="text-center text-3xl mt-20 mb-10">
        My Works
      </p>
      <WorkCarousel />
      <p id="about" className="text-center text-3xl my-20">
        Responsive & Beautiful Designs
      </p>
      <ThreeDMarqueeDemo />
      <h1 className="text-4xl md:text-4xl max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white mb-10">
        Build amazing websites <br /> with <Cover>cool features</Cover>
      </h1>
      <div className="w-full flex justify-center">
        <CompareDemo />
      </div>
      <Footer />
    </main>
  );
}
