import { motion } from "framer-motion";
import { HeroScrollDemo } from "./Heroscroll";
import Image from "next/image";

const Grid = () => {
  return (
    <motion.div className="bg-black w-screen px-20 max-sm:p-0">
      <section id="about" className="bg-black">
        <div className="grid grid-cols-8 md:grid-cols-1 gap-6 max-w-7xl w-full mx-auto p-4 rounded-md mb-16 -mt-6 grid-flow-dense bg-black md:gap-3 max-sm:gap-2">
          {/* Hide HeroScrollDemo on mobile */}
          <div className="hidden md:block">
            <HeroScrollDemo />
          </div>
          {/* Content visible only on desktop */}
          <div className="rounded-3xl border-black relative grid-flow-dense col-span-8 md:col-span-1 row-span-1 hidden sm:block max-sm:block">
            {/* Content visible only on mobile */}
            <div className="flex-row items-center justify-center text-center my-10 md:hidden">
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Insights and <br></br>
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                 Expertise
              </span>
            </h1>
            </div>
            <Image
              src="/Remote collab.svg"
              className="cover w-screen rounded-3xl md:hidden"
              alt="Left"
              width={1200}
              height={800}
            />
          </div>

          <div
            className="rounded-3xl border-black relative  grid-flow-dense col-span-8 md:col-span-1  row-span-1"
            style={{
              backgroundColor: "#000",
            }}
          >
            <Image
              src="/left.svg"
              className="cover w-screen rounded-3xl"
              alt="Left"
              width={1200}
              height={800}
            />
          </div>
          <div
            className="rounded-3xl border-black relative grid-flow-dense col-span-8 md:col-span-1 row-span-1"
            style={{ backgroundColor: "#000" }}
          >
            <Image
              src="/right.svg"
              className="cover w-screen rounded-3xl"
              alt="Right"
              width={1200}
              height={800}
            />
          </div>
          <div
            className="rounded-3xl border-black relative  grid-flow-dense col-span-8 md:col-span-1 row-span-1"
            style={{
              backgroundColor: "#000",
            }}
          >
            <Image
              src="/Free Consultation (1).svg"
              className="cover w-screen rounded-3xl"
              alt="Left"
              width={1200}
              height={800}
            />
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Grid;
