import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const FAQ = () => {
  const faqItems = [
    {
      id: "item-1",
      question: "Is the app free to use?",
      answer:
        "Yes! We offer a free plan for individuals and small teams. Paid plans unlock more features for scaling businesses.",
    },
    {
      id: "item-2",
      question: "Can I assign multiple employees to one job?",
      answer:
        "Absolutely! You can assign as many employees as needed to any job for better collaboration.",
    },
    {
      id: "item-3",
      question: "Does it work on both mobile and desktop?",
      answer:
        "Yes, our app is fully responsive and works seamlessly on mobile phones, tablets, and desktops.",
    },
    {
      id: "item-4",
      question: "How secure is my data?",
      answer:
        "We take data security very seriously. All your data is encrypted both in transit and at rest. We use industry-standard security protocols to keep your information safe.",
    },
    {
      id: "item-5",
      question: "Can I cancel my subscription at any time?",
      answer:
        "Yes, you can cancel your subscription at any time from your account settings. Your subscription will remain active until the end of the current billing cycle.",
    },
  ];

  return (
    <div className="w-full my-20 mb-48 px-4 sm:px-6 lg:px-8 flex items-center justify-center relative">
      <div className="-bottom-32 -right-[520px] w-[505px] h-[732px] absolute bg-[#3BA334]/20 rounded-full blur-[150px] transform rotate-[19.59deg] -z-10 hidden xl:block" />
      <div className="top-0 -left-[400px] w-[505px] h-[732px] absolute bg-[#3BA334]/20 rounded-full blur-[150px] transform rotate-[19.59deg] -z-10 hidden xl:block" />
      <div className="max-w-[1280px] mx-auto w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-600 text-lg">
            Quick answers to help you get the most out of our app.
          </p>
        </div>
        <Accordion type="single" collapsible defaultValue="item-1">
          {faqItems.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="rounded-xl border border-[#C7E6C5] px-6 transition-all duration-300 hover:shadow-md"
            >
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-6 text-base">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
