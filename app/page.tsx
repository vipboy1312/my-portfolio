import { CompareDemo } from "@/components/CompareDemo";
import Hero from "@/components/Hero";
import { ThreeDMarqueeDemo } from "@/components/ThreeDMarqueeDemo";
import { Cover } from "@/components/ui/cover";
import { FaFacebook, FaGithub } from "react-icons/fa6";

export default function Home() {
  return (
    <main>
      <Hero />
      <p id="about" className="text-center text-3xl my-20">
        Responsive & Beautiful Designs
      </p>
      <ThreeDMarqueeDemo />
      <h1 className="text-4xl md:text-4xl max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        Build amazing websites <br /> with <Cover>cool features</Cover>
      </h1>
      <div className="flex justify-center">
        <CompareDemo />
      </div>
      <h1 className="text-4xl md:text-4xl max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        Ready to take your ideas to the <br /> <Cover>Next Level?</Cover>
      </h1>
      <p className="text-center mb-5 opacity-50">Contact me</p>
      <ul className="flex justify-center mb-10 opacity-50 gap-2">
        <li>
          <a
            href="https://www.facebook.com/quy.nguyentrong.3367/"
            target="_blank"
          >
            <FaFacebook size={20} />
          </a>
        </li>
        <li>
          <a href="https://github.com/vipboy1312" target="_blank">
            <FaGithub size={20} />
          </a>
        </li>
      </ul>
    </main>
  );
}
