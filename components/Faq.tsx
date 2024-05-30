import React, { useState } from "react";
import { motion } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What can I expect during a free consultation?",
    answer:
      "Our free consultation is a chance for us to get to know your business and its digital marketing goals. We'll discuss your target audience, current online presence, and any specific challenges you're facing. We'll also share our expertise and outline how Eensell can create a customized strategy to achieve your objectives.",
  },
  {
    question: "What are your pricing options?",
    answer:
      "We offer a variety of pricing options to suit your business needs and budget. After our consultation, we'll present a clear and transparent invoice outlining the specific services included and the total cost.",
  },
  {
    question: "What kind of results can I expect?",
    answer:
      "We believe in data-driven results and will provide you with regular reports that track the performance of your campaigns. This might include website traffic increases, lead generation growth, or improved social media engagement, depending on your specific goals.",
  },
  {
    question: "Do I need to be available for a lot of meetings?",
    answer:
      "We understand your time is valuable. While open communication is key, we strive for an efficient approach. After the initial consultation, we'll schedule regular (typically weekly) calls to discuss progress and answer your questions. You'll also have dedicated points of contact within our team.",
  },
  {
    question: "What happens after I sign a contract?",
    answer:
      "Once you're on board, our team will waste no time getting started. Upon receiving a 10% deposit, we'll hit the ground running, implementing your customized digital marketing strategy. We'll keep you updated on progress through regular communication and report on the impact of your campaigns",
  },

  // Add more FAQ items as needed
];

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  const faqVariants = {
    closed: { maxHeight: 0, paddingBottom: 0 },
    open: { maxHeight: "fit-content", paddingBottom: "1rem" },
  };

  return (
    <div className="py-24 px-10 p-15 bg-black w-full min-h-screen mx-auto bg-opacity-40 flex flex-col  md:flex-row gap-12 ">
      <div className="flex flex-col text-left basis-1/2">
        <p
          className="inline-block font-semibold text-primary mb-4"
          style={{ fontSize: `2rem` }}
        >
          Insurance FAQ
        </p>
        <p
          className="sm:text-4xl text-6xl font-extrabold text-base-content"
          style={{ fontSize: `3rem` }}
        >
          Frequently Asked Questions
        </p>
      </div>
      <ul className="basis-1/2">
        {faqs.map((faq, index) => (
          <li key={index}>
            <button
              className={`relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10 ${
                expandedIndex === index ? "border-primary" : ""
              }`}
              aria-expanded={expandedIndex === index}
              onClick={() => toggleFAQ(index)}
            >
              <span className="flex-1 text-base-content">{faq.question}</span>
              <svg
                className="flex-shrink-0 w-4 h-4 ml-auto fill-current"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="7"
                  width="16"
                  height="2"
                  rx="1"
                  className={`transform origin-center transition duration-200 ease-out ${
                    expandedIndex === index ? "rotate-90" : ""
                  }`}
                />
              </svg>
            </button>
            <motion.div
              variants={faqVariants}
              initial="closed"
              animate={expandedIndex === index ? "open" : "closed"}
              transition={{ duration: 0, ease: "easeInOut" }}
              className="transition-all duration-300 ease-in-out overflow-hidden"
            >
              <div className="pb-5 leading-relaxed">
                <div className="space-y-2 leading-relaxed">{faq.answer}</div>
              </div>
            </motion.div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;
