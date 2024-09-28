import React, { useState, useRef } from 'react';

const faqData = [
    {
      question: "How much is the profit margin per sale?",
      answer: "Our manager generally sets the margin of 200 - 600 on AMAZON.IN 1000 - 8000 on Amazon.com. Moreover, you can also adjust the selling price on your account and set the margins accordingly."
    },
    {
      question: "Can we select the products we want to list?",
      answer: `Yes, absolutely! We have our gallery at <a href="https://gallery.saumiccraft.com" target="_blank" class="text-blue-600 hover:underline">gallery.saumiccraft.com</a> from which you can select the products according to your choice and our support manager will list them for you.`
    },
    {
      question: "⁠How my orders will be processed?",
      answer: "We have dispatching access to your account, and orders are automatically processed and dispatched from our warehouse."
    },
    {
      question: "Can we promote products ourselves to increase sales?",
      answer: "Yes, you can! We provide User Generated Content (UGC) to you, which you can use on social media platforms like Instagram, Facebook, and WhatsApp to increase sales."
    },
    {
      question: "How do we expect support from managers after account opening?",
      answer: `For support, we have our support portal at <a href="https://support.saumiccraft.com" target="_blank" class="text-blue-600 hover:underline">support.saumiccraft.com</a>, where you can book appointments and raise tickets. Moreover, we have a CRM at <a href="https://crm.saumiccraft.com" target="_blank" class="text-blue-600 hover:underline">crm.saumiccraft.com</a> where you get real-time updates of the tasks.`
    },
    {
      question: "Do we also get training to scale up and automate this Amazon journey?",
      answer: `Yes, we also provide a Learning Management System (LMS) at <a href="https://lms.saumiccraft.com" target="_blank" class="text-blue-600 hover:underline">lms.saumiccraft.com</a>, where you get:
        <ul class="list-disc ml-5">
          <li>4 Days Amazon Training (Part 1 - approx. 1 hour each session)</li>
          <li>4 Days Amazon Training (Part 2 - approx. 1 hour each session)</li>
          <li>75 Days Amazon Training (approx. 2 minutes each session)</li>
        </ul>
        Additionally, you will also get an E-BOOK for further learning.`
    }
  ];
  

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]); 

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div
      className="w-full flex justify-center items-center p-6"
      style={{
        background: 'linear-gradient(135deg, #f0f4f8, #d9e6f1)',
      }}
    >
      <div className="w-full max-w-6xl bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions on WEBSITE</h2>
        {faqData.map((item, index) => (
          <div key={index} className="mb-4">
            <div
              className="flex justify-between items-center bg-gray-100 p-4 rounded-lg cursor-pointer transition-all duration-300 ease-in-out hover:bg-gray-200 shadow-sm"
              onClick={() => toggleQuestion(index)}
            >
              <span className="font-semibold text-lg text-gray-900">{item.question}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div
              ref={(el) => (contentRefs.current[index] = el)}
              className="overflow-hidden transition-all duration-500 ease-in-out"
              style={{
                maxHeight: activeIndex === index ? `${contentRefs.current[index]?.scrollHeight}px` : '0px',
                opacity: activeIndex === index ? 1 : 0,
              }}
            >
              <div
                className="mt-2 p-4 bg-white rounded-lg shadow-md text-gray-700"
                dangerouslySetInnerHTML={{ __html: item.answer }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
