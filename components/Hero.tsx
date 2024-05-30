import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import React, { useEffect } from "react";
import { companies } from "@/data";
import Image from "next/image";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from "framer-motion";

import { AnimatedTooltipPreview } from "./ToolTip";
import { Meteors } from "./ui/meteors-ui";
import ImageGallery from "./infinit";

const Hero = () => {
  return (
    <>
      <motion.div className="relative min-h-screen w-screen">
        <div className="flex justify-center z-10">
          <div className=" items-center hidden md:block justify-center h-screen">
            <Meteors number={20} className=" top-0 z-10 " />
          </div>
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <Image
              src={"/output-onlinepngtools.png"}
              alt={"eensell"}
              width={100}
              height={100}
            />
            <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80"></p>
            <TextGenerateEffect
              words="Turn your visitors into lifetime Devoted customers"
              className="text-center text-[30px] font-sf-pro font-bold md:text-5xl lg:text-6xl"
            />
            <p className="text-center md:tracking-wider mb-4 text-xs md:text-lg lg:text-1xl">
              Get More Leads, Increase Sales, and Achieve Your Business Goals.
            </p>
            <a href="#about" className="my-10">
              <MagicButton
                title="Free Consultation"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>
        <div className="my-20">
          <AnimatedTooltipPreview />
        </div>
        <div className="my-20">
        <ImageGallery/>
        </div>
      </motion.div>
    </>
  );
};

export default Hero;
