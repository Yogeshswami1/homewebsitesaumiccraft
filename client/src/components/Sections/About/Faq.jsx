import React, { useState, useRef } from 'react';

const faqData = [
  {
    question: "What is MERN stack?",
    answer: "MERN stands for MongoDB, Express, React, and Node.js. It's a stack of technologies used to build full-stack web applications."
  },
  {
    question: "What is React?",
    answer: "React is a front-end JavaScript library for building user interfaces, particularly single-page applications."
  },
  {
    question: "How does MongoDB work?",
    answer: "MongoDB is a NoSQL database that stores data in JSON-like documents, which allows for flexible, scalable data models."
  },
  {
    question: "What is Node.js?",
    answer: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine, enabling server-side scripting with JavaScript."
  },
  {
    question: "How does Express work?",
    answer: "Express is a minimal and flexible Node.js web application framework that provides a robust set of features for building web applications."
  },
  {
    question: "Why use the MERN stack?",
    answer: "The MERN stack allows developers to work with a single language, JavaScript, for both the client and server side, making development faster and more efficient."
  }
];

// FAQ component
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
        background: 'linear-gradient(135deg, #f0f4f8, #d9e6f1)',      }}
    >
      <div className="w-full max-w-8xl bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
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
              <div className="mt-2 p-4 bg-white rounded-lg shadow-md text-gray-700">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
