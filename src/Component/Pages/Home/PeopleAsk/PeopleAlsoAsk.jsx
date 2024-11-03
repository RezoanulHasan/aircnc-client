// PeopleAlsoAsk.js
import React from "react";

const PeopleAlsoAsk = () => {
  const faqs = [
    {
      id: "faq1",
      question: "What are the most luxurious hotels available on Aircnc?",
      answer:
        "Aircnc offers a range of luxurious hotels worldwide, featuring top-tier amenities, including 5-star resorts, private villas, and premium suites with breathtaking views, exclusive services, and world-class facilities.",
    },
    {
      id: "faq2",
      question: "How do I find affordable hotels on Aircnc?",
      answer:
        "You can easily find affordable hotels on Aircnc by using filters such as price range, location, and special deals. We offer a variety of options to fit different budgets, from economy to luxury.",
    },
    {
      id: "faq3",
      question: "What facilities do Aircnc hotels offer?",
      answer:
        "Aircnc hotels offer a wide array of facilities, including free Wi-Fi, swimming pools, spas, fitness centers, airport transfers, and more. Each listing details the specific amenities provided by the property.",
    },
    {
      id: "faq4",
      question: "Can I book long-term stays on Aircnc?",
      answer:
        "Yes, Aircnc offers flexible booking options, including long-term stays. You can find special discounts for extended stays at various properties, making it ideal for both leisure and business travel.",
    },
    {
      id: "faq5",
      question: "How do I cancel or modify my booking?",
      answer:
        "You can easily cancel or modify your booking through your Aircnc account. Simply visit the 'My Bookings' section, choose the reservation, and follow the instructions for changes or cancellations, subject to the property's cancellation policy.",
    },
  ];

  return (
    <section className="p-8 bg-white rounded-lg shadow-lg border border-gray-300 mb-10">
      <p className="text-gray-800 text-center text-2xl mb-6 font-bold">
        Discover answers to frequently asked questions about Aircnc, the world's
        leading platform for booking luxurious and affordable hotel rooms with
        top-notch facilities.
      </p>

      <div className="space-y-4">
        {faqs.map((faq) => (
          <FAQItem
            key={faq.id}
            id={faq.id}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </section>
  );
};

const FAQItem = ({ id, question, answer }) => {
  return (
    <div className="bg-gray-100 rounded-lg shadow-md">
      <input type="checkbox" id={id} className="peer hidden" />
      <label
        htmlFor={id}
        className="block cursor-pointer p-4 text-white rounded-lg font-semibold bg-black  "
      >
        {question}
      </label>
      <div className="p-4 rounded-b-lg border-t border-gray-300 peer-checked:block hidden">
        <p className="text-gray-700 font-semibold">{answer}</p>
      </div>
    </div>
  );
};
export default PeopleAlsoAsk;
