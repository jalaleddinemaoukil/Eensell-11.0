"use client";
import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { IconBrandGoogle } from "@tabler/icons-react";
import Slider from "./Slider";

export function Form() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  const [isContentVisible, setIsContentVisible] = useState<boolean>(false);

  const toggleParagraph = () => {
    const paragraph = document.getElementById("hidden-paragraph");
    setIsContentVisible(!isContentVisible);
    if (paragraph) {
      paragraph.style.display =
        paragraph.style.display === "none" ? "block" : "none";
    }
  };

  const [labelValue, setLabelValue] = useState(1000); // Initial value

  const handleLabelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLabelValue(parseInt(e.target.value));
  };

  return (
    <section className="bg-black w-screen min-h-screen p-4 md:p-20">
      <h1 className="heading text-center " style={{ fontSize: "90px"}}>
       Make your Business StandOut
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-8 gap-6 max-w-7xl w-full mx-auto p-4 rounded-md my-12">
        <div className="rounded-md relative min-h-screen mt-7 md:col-span-4 col-span-1">
          <h2 className="text-3xl font-extrabold dark:text-white">
            Ready to unlock your business's full potential online?
          </h2>
          <p className="my-4 text-lg text-white">
            After booking your free consultation, a member of our friendly
            confirmation team will reach out to schedule a convenient meeting –
            either a quick 20-minute video call or an in-person meeting,
            depending on your preference.
          </p>
          <p className="mb-4 text-md font-normal text-gray-500 dark:text-gray-400">
            During the consultation, we'll delve into your specific business
            goals and outline a customized digital marketing strategy to achieve
            them. Following this meeting, you'll receive a clear and transparent
            invoice outlining our services and pricing. Once a 10% deposit is
            secured, our dedicated team will hit the ground running,
            implementing your strategic plan and bringing your online vision to
            life.
          </p>
          <div
            id="hidden-paragraph"
            className="mb-4 text-md font-normal text-gray-500 dark:text-gray-400 hidden"
          >
            To ensure clear communication and progress tracking, we'll schedule
            regular weekly calls to discuss campaign performance, answer any
            questions, and collaboratively refine our approach towards your
            success. <b>Let's take your business to the next level</b> – book
            your free consultation today!
          </div>
          <button
            onClick={toggleParagraph}
            className="text-white bg-purple-500 py-2  rounded-md hover:bg-purple-600"
          >
            {isContentVisible ? "Show Less" : "Show More"}
          </button>
        </div>
        <div className="rounded-md relative min-h-screen md:col-span-4 col-span-1">
          <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input">
            <form onSubmit={handleSubmit} id="signup">
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4 z-1">
                <LabelInputContainer>
                  <Label htmlFor="firstname">First name</Label>
                  <Input id="firstname" placeholder="Tyler" type="text" />
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label htmlFor="lastname">Last name</Label>
                  <Input id="lastname" placeholder="Durden" type="text" />
                </LabelInputContainer>
              </div>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="entreprise">Entreprise</Label>
                <Input
                  id="entreprise"
                  placeholder="Your Entreprise Name"
                  type="text"
                />
              </LabelInputContainer>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  placeholder="projectmayhem@fc.com"
                  type="email"
                />
              </LabelInputContainer>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="budget">Your Budget</Label>
                <Slider />
              </LabelInputContainer>
              <LabelInputContainer className="mb-4">
                <Label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your message
                </Label>
                <textarea
                  id="message"
                  rows={4}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-blue-500 focus:ring-blue-500 focus:border-blue-500 dark:bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="how we can help you"
                ></textarea>
              </LabelInputContainer>
              <button
                className="bg-gradient-to-br relative group/btn from-white dark:from-white dark:to-white to-white block dark:bg-white w-full text-black rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                type="submit"
              >
                Sign up &rarr;
                <BottomGradient />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
