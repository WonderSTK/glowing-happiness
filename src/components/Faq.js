import React, { useState } from 'react';

const Faq = () => {
  const [isOpen, setIsOpen] = useState(null);

  const faqs = [
    {
      question: "How many bones does a cat have?",
      answer: "A cat has 230 bones - 6 more than a human",
    },
    {
      question: "How much do cats sleep?",
      answer: "The average cat sleeps 12-16 hours per day",
    },
    {
      question: "How long do cats live?",
      answer: "Outdoor cats live 5 years on average. Indoor cats live 15 years on average.",
    },
  ];

  const handleClick = (index) => {
    setIsOpen(isOpen === index ? null : index);
  };

  return (
    <div className="bg-blue-100 p-4 rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Frequently Asked Questions</h1>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4 p-4 bg-white rounded-lg shadow-md">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => handleClick(index)}
          >
            <button className={`transform transition-transform ${isOpen === index ? 'rotate-90' : ''}`}>
              &gt;
            </button>
            <h2 className="text-lg font-semibold">{faq.question}</h2>
          </div>
          {isOpen === index && <p className="mt-2 text-gray-700">{faq.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default Faq;