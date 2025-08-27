"use client";

import { useState } from "react";

const Faqs = () => {
  const [active, setActive] = useState("");
  const faqs = [
    {
      question: "What is your refund policy?",
      answer: "We offer a 30-day money-back guarantee on all subscriptions.",
    },
    {
      question: "Can I upgrade my plan later?",
      answer:
        "Yes, you can upgrade your plan at any time from your account settings.",
    },
    {
      question: "Do you offer discounts for annual billing?",
      answer: "Yes, we offer a 20% discount for annual billing.",
    },
  ];

  const handleClick = (question: string) => {
    setActive(active === question ? "" : question);
  };

  return (
    <section>
      <h2 className="text-2xl md:text-3xl mb-10 text-center font-semibold">
        FAQs
      </h2>
      <div className="space-y-6">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="my-4 py-5 border-b border-white/20"
          >
            <summary className="cursor-pointer text-lg">{faq.question}</summary>
            <div
              className=" 
    transition-all duration-300 
	starting:open:translate-y-100
	open:translate-y-0

    starting:open:opacity-0
	open:opacity-100
	"
            >
              {faq.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
};

export default Faqs;
