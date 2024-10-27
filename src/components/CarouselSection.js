import { Carousel, Typography, Button } from '@material-tailwind/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function CarouselSection() {
  const navigate = useNavigate();

  return (
    <Carousel className="h-96" 
    transition={{duration: 1}} 
    autoplay={true}
    loop={true}
    prevArrow={({handlePrev})=>{

    }}
    nextArrow={({handleNext})=>{

    }}
    >
      <div className="relative h-96 w-full">
        <img
          src={require('../images/carousel/1.jpg')}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-lg md:text-xl lg:text-2xl"
            >
              Crafted Furniture Collection
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-9 opacity-80 text-base"
            >
              Transform Your Home into a Masterpiece – Explore Furniture as Unique as You Are.
            </Typography>
            <div className="flex justify-center gap-2">
              <Button size="sm" color="white" onClick={()=> {
                navigate("/howitworks")
              }}>
                How It Works
              </Button>
              <Button size="sm" color="white" variant="text" onClick={()=> {
                navigate("/about_us")
              }}>
                About Us
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-96 w-full">
        <img
          src={require('../images/carousel/4.jpg')}
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-lg md:text-xl lg:text-2xl"
            >
              Crafted Furniture Collection
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-9 opacity-80 text-base"
            >
              Craft Your Space with Timeless Elegance – Discover Handcrafted Furniture Tailored Just for You
            </Typography>
            <div className="flex justify-center gap-2">
              <Button size="sm" color="white" onClick={()=> {
                navigate("/howitworks")
              }}>
                How It Works
              </Button>
              <Button size="sm" color="white" variant="text" onClick={()=> {
                navigate("/about_us")
              }}>
                About Us
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-96 w-full">
        <img
          src={require('../images/carousel/3.jpg')}
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-lg md:text-xl lg:text-2xl"
            >
              Crafted Furniture Collection
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-9 opacity-80 text-base"
            >
              Where Quality Meets Comfort – Elevate Every Room with Style That Lasts.
            </Typography>
            <div className="flex justify-center gap-2">
              <Button size="sm" color="white" onClick={()=> {
                navigate("/howitworks")
              }}>
                How It Works
              </Button>
              <Button size="sm" color="white" variant="text" onClick={()=> {
                navigate("/about_us")
              }}>
                About Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  )
}

export default CarouselSection
