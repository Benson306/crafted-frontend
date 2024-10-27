import React from 'react'


const StarRating = ({ rating }) => {
    return (
      <div className="star-rating text-2xl">
        {[...Array(5)].map((_, index) => (
          <span key={index} style={{ color: index < rating ? '#FFD700' : '#ccc' }}>
            ★
          </span>
        ))}
      </div>
    );
  };

function Testimonials() {
    const reviews = [
        {
          name: "Mwangi John",
          rating: 5,
          review: "I recently bought a sofa set from this store, and I couldn’t be happier with my purchase! The quality of the furniture is outstanding, and it’s clear that a lot of attention went into the craftsmanship. The sales team was friendly and helped me pick out a set that fit perfectly with my living room decor. Delivery was also on time, and the setup was seamless. Highly recommend this store for anyone looking to add a touch of elegance to their home!"
        },
        {
          name: "Grace Otieno",
          rating: 4,
          review: "This store has a beautiful selection of furniture, and I found exactly what I was looking for! I was amazed by the variety and quality of their pieces, especially considering the reasonable prices. The staff was incredibly helpful and knowledgeable, guiding me through options that matched my style and budget. I’ll definitely be coming back for more pieces in the future!"
        },
        {
          name: "Mary Njoroge",
          rating: 5,
          review: "I had a fantastic shopping experience here. From start to finish, everything was smooth. The store is well-organized and easy to navigate, making it easy to find exactly what I wanted. I purchased a dining set that is both stylish and durable. It was delivered in perfect condition and right on schedule. If you want high-quality furniture and excellent customer service, this is the place to go!"
        }
      ];
      
  return (
    <div className='my-5 bg-white p-5 font-montserrat'>
      <div className='my-2 font-bold text-lg text-center mb-10 capitalize'>why  customers choose crafted furniture</div>

      <div className='block lg:flex mx-5 lg:mx-10 gap-5 mb-3'>
        {reviews.map((review, index) => (
            <div key={index} className="review shadow-md p-2 bg-gray-100 rounded-lg mb-3">
            <h3 className='font-bold mb-2 text-center text-lg'>{review.name}</h3>
            <div className='flex justify-center'>
                <StarRating rating={review.rating} />
            </div>
            <p className='my-5'>{review.review}</p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials
