"use client";

import Image from "next/image";
import { Tabs } from "./ui/tabs";

export function TabsDemo() {
  const tabs = [
    {
      title: "Car Retail",
      value: "Car Retail",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-black">
        

          <Image
            src={"/car rental.svg"}
            className="rounded-xl"
            alt={"car retail"}
            width={1000}
            height={1000}
          />
        </div>
      ),
    },
    {
      title: "Dental clinic",
      value: "Dental clinic",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-black">
        

          <Image
            src={"/Dental.svg"}
            className="rounded-xl"
            alt={"Dental"}
            width={1000}
            height={1000}
          />
        </div>
      ),
    },
    {
      title: "Traditional Spa",
      value: "Traditional Spa",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-black">
        <Image
            src={"/Spa.svg"}
            className="rounded-xl"
            alt={"spa"}
            width={1000}
            height={1000}
          />
        </div>
      ),
    },
    {
      title: "Local Retail",
      value: "Local Retail",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-black">
   
          <Image
            src={"/Bakery.svg"}
            className="rounded-xl"
            alt={"Bakery"}
            width={1000}
            height={1000}
          />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[50rem] [perspective:1000px] bg-white relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-20">
      
      <Tabs tabs={tabs} />
    </div>
  );
}
