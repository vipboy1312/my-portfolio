import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { AuroraBackground } from "./ui/aurora-background";

const Hero = () => {
  return (
    <AuroraBackground>
      <div>
        <div className="flex justify-center relative my-20 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <h2 className="uppercase tracking-widest text-xs text-center text-blue-500 max-w-80">
              Dynamic Web Magic with NextJS
            </h2>

            <TextGenerateEffect
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
              duration={2}
              filter={false}
              words="Bring Your Ideas Come To Life"
            />

            <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
              Hi I&apos;m Nguyen Trong Quy, a Full Stack developer in Vietnam
            </p>
          </div>
        </div>
      </div>
    </AuroraBackground>
  );
};

export default Hero;
