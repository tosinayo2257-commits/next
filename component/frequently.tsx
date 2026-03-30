"use client";

import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "What is a Bounce?",
    answer:
      "Magna nec, porttitor purus vulputate. Enim accumsan non, auctor posuere tristique aliquam tempus maecenas orci. Risus egestas sapien tincidunt nunc est malesuada magna. Fringilla porta nunc consectetur amet aliquam. Dolor tellus augue in ridiculus vulputate.",
  },
  {
    question: "What is the difference between the Free and Paid versions?",
    answer:
      "Magna nec, porttitor purus vulputate. Enim accumsan non, auctor posuere tristique aliquam tempus maecenas orci. Risus egestas sapien tincidunt nunc est malesuada magna. Fringilla porta nunc consectetur amet aliquam. Dolor tellus augue in ridiculus vulputate.",
  },
  {
    question:
      "What if I decide to change a plan from monthly to annually and back?",
    answer:
      "Magna nec, porttitor purus vulputate. Enim accumsan non, auctor posuere tristique aliquam tempus maecenas orci. Risus egestas sapien tincidunt nunc est malesuada magna. Fringilla porta nunc consectetur amet aliquam. Dolor tellus augue in ridiculus vulputate.",
  },
  {
    question: "How do I add personalised data to messages?",
    answer:
      "Magna nec, porttitor purus vulputate. Enim accumsan non, auctor posuere tristique aliquam tempus maecenas orci. Risus egestas sapien tincidunt nunc est malesuada magna. Fringilla porta nunc consectetur amet aliquam. Dolor tellus augue in ridiculus vulputate.",
  },
  {
    question:
      "How do I re-subscribe a contact who opted out or was accidentally removed?",
    answer:
      "Magna nec, porttitor purus vulputate. Enim accumsan non, auctor posuere tristique aliquam tempus maecenas orci. Risus egestas sapien tincidunt nunc est malesuada magna. Fringilla porta nunc consectetur amet aliquam. Dolor tellus augue in ridiculus vulputate.",
  },
  {
    question: "Do you plan on adding more features in the future?",
    answer:
      "Magna nec, porttitor purus vulputate. Enim accumsan non, auctor posuere tristique aliquam tempus maecenas orci. Risus egestas sapien tincidunt nunc est malesuada magna. Fringilla porta nunc consectetur amet aliquam. Dolor tellus augue in ridiculus vulputate.",
  },
];

const Question: React.FC = () => {
  const [active, setActive] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActive((prev) => (prev === index ? null : index));
  };

  return (
    <section className="px-5 md:px-10">
      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Frequently Asked Questions
        </h2>

        <p className="text-black/70 max-w-xl mx-auto text-sm md:text-base">
          We hope this FAQ section has addressed some of your common questions.
          If you have any further queries, please don&apos;t hesitate to reach
          out.
        </p>
      </div>

      {/* FAQ LIST */}
      <div className="max-w-[1140px] mx-auto space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = active === index;

          return (
            <div
              key={index}
              className={`rounded-2xl px-6 py-5 transition-all duration-300 ${
                isOpen ? "bg-[#DEDEF2] border-transparent" : "bg-white"
              }`}
            >
              {/* BUTTON (better accessibility than div click) */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-start gap-3 text-left"
                aria-expanded={isOpen}
              >
                <h3 className="text-base sm:text-lg md:text-xl font-medium text-[#0D0D0D]">
                  {faq.question}
                </h3>

                <span className="w-6 h-6 flex items-center justify-center mt-1">
                  {isOpen ? (
                    <FiMinus className="w-5 h-5" />
                  ) : (
                    <FaPlus className="w-5 h-5" />
                  )}
                </span>
              </button>

              {/* ANSWER */}
              <div
                className={`grid transition-all duration-300 ${
                  isOpen ? "grid-rows-[1fr] mt-4" : "grid-rows-[0fr]"
                }`}
              >
                <p className="overflow-hidden text-gray-600 text-sm md:text-base leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Question;
