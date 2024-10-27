import React from 'react'
import CarouselSection from './CarouselSection'

function AboutUs() {
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
            <h1 className="text-xl lg:text-2xl font-bold text-white">About Us</h1>
          </div>
        </div>

        <div className='w-full lg:w-3/4 lg:mx-auto mt-5 text-sm font-montserrat mb-10 p-2'>

        <div className='mt-5'><b className=''>Crafted Furniture Collection</b> is a premier furniture store and manufacturer based in Utawala, Nairobi, celebrated for our high-quality, locally-made indoor and outdoor furniture. With a commitment to excellence and a passion for design, we offer an expansive collection of modern and stylish pieces crafted to elevate and enrich today’s lifestyle. Our range spans everything from elegant living room sets and sophisticated dining tables to durable outdoor furniture, all designed to seamlessly blend functionality with aesthetic appeal. Each item we create embodies our dedication to craftsmanship, ensuring that every piece is a statement of quality, comfort, and style.</div>

        <div className='mt-5'>At Crafted Furniture Collection, we are proud to utilize the rich resources and skilled artisans of our region, emphasizing local production to bring you premium, eco-friendly furnishings at accessible prices. By focusing on locally-sourced materials and sustainable practices, we provide an experience of affordable luxury that reflects the vibrant culture and natural beauty of Kenya. Our pieces are meticulously designed to be versatile and enduring, suited to both traditional and contemporary spaces. Whether you’re looking to transform a home, office, or outdoor area, Crafted Furniture Collection offers unparalleled options that merge luxury with functionality for every unique space.</div>

        </div>
    </div>
  )
}

export default AboutUs