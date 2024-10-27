import React, { useState } from 'react';

const faqs = [
  {
    question: "What materials are used in your products?",
    answer: "Our products are crafted from high-quality, sustainable materials chosen for their durability and aesthetic appeal. We prioritize natural materials that enhance the overall beauty and longevity of each piece."
  },
  {
    question: "Are your products handmade?",
    answer: "Yes, many of our products are handmade by skilled artisans. This commitment to craftsmanship ensures that every piece is unique and exhibits the highest quality."
  },
  {
    question: "How can I care for my product?",
    answer: "We provide specific care instructions with every product to help maintain its beauty and functionality. Generally, regular cleaning and using appropriate care products will keep your item in excellent condition."
  },
  {
    question: "Do you offer customizations?",
    answer: "We understand that every customer has unique tastes. Depending on the product, we may offer customization options. Please contact our customer service for more details."
  },
  {
    question: "How long will it take to receive my order?",
    answer: "Delivery times may vary based on your location and the product you ordered. We strive to process orders as quickly as possible and will provide estimated shipping times with your confirmation."
  },
  {
    question: "Are your products ethically sourced?",
    answer: "Yes, we are committed to ethical sourcing and production practices. Our artisans are treated fairly, and we prioritize sustainability in our material sourcing."
  },
  {
    question: "Can I see a product in person before purchasing?",
    answer: "If you’re located near one of our showrooms or retailers, we welcome you to visit and experience our products in person. Please check our website for locations."
  },
  {
    question: "What if my product arrives damaged?",
    answer: "We strive to ensure that all our products are carefully packaged for transit. However, if your item does arrive damaged, please contact our customer service team immediately with your order information, and we will work to resolve the issue."
  },
  {
    question: "Do you have a loyalty program or discounts for returning customers?",
    answer: "Yes! We value our returning customers and offer various loyalty programs and seasonal discounts. Sign up for our newsletter to stay updated on promotions."
  },
  {
    question: "What makes your products different from mass-produced items?",
    answer: "Our products are defined by skilled craftsmanship, unique design, and a commitment to quality that sets them apart from mass-produced items. Each piece tells a story and reflects the artisan's dedication to their craft."
  }
];


const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
        <div className="relative w-full h-56 lg:h-60">
          <img
            src={require('../images/carousel/pexels-fotoaibe-1571460.jpg')}
            className="absolute top-0 left-0 w-full h-full object-cover"
            alt="Background"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <h1 className="text-xl lg:text-2xl font-bold text-white">Frequently Asked Questions</h1>
          </div>
        </div>
    <div className="max-w-3xl mx-auto p-6 bg-gray-100 rounded-md shadow-lg text-sm mb-10 mt-5">
      {faqs.map((faq, index) => (
        <div key={index} className="border-b last:border-b-0">
          <div
            className="flex justify-between items-center cursor-pointer py-4"
            onClick={() => toggleAnswer(index)}
          >
            <h2 className="text-md font-semibold text-gray-800">{faq.question}</h2>
            <span className={`transform transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </div>
          {openIndex === index && (
            <div className="pl-4 pb-4 text-gray-600">
              {faq.answer.split('\n').map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
    </div>
  );
};

export default FAQ;
