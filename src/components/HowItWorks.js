import React from 'react';

const HowItWorks = () => {
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
            <h1 className="text-xl lg:text-2xl font-bold text-white">How It Works</h1>
          </div>
        </div>
      <div className="max-w-3xl mx-auto p-6 bg-gray-100 rounded-md shadow-lg mt-5 mb-10 text-sm">
        <div className="mb-8">
          <h2 className="text-md font-semibold mb-4">How It Shop for Furniture:</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              <strong>Browse Our Collection:</strong> Explore our carefully curated selection of premium furniture 
              designed for every room in your home. From stylish living room sets and comfortable beds to dining 
              tables and outdoor essentials, you’ll find a variety of pieces to match your style. Use our filter 
              options to easily navigate and find the furniture you need.
            </li>
            <li>
              <strong>Preview & Set Quantity:</strong> On each product page, preview images showcase the item from 
              different angles, giving you a clear view of its details and quality. Set the quantity you’d like to 
              order and be assured that each piece meets our standards for craftsmanship and durability.
            </li>
            <li>
              <strong>Add to Cart:</strong> Once you’ve chosen your items and set your quantity, add them to your 
              cart. Review your selections to ensure you have everything you need, then proceed to checkout.
            </li>
            <li>
              <strong>Checkout:</strong> Our secure checkout process is designed to be fast and straightforward. 
              Choose your preferred payment method, enter your shipping information, and confirm your order.
            </li>
            <li>
              <strong>Receive Order Confirmation:</strong> After completing your purchase, you’ll receive an email 
              confirmation with your order details. This confirmation includes the items ordered, shipping 
              information, and an estimated delivery window.
            </li>
            <li>
              <strong>Delivery Notification:</strong> Once your order is ready for delivery, our team will contact 
              you with specific delivery details. We’ll keep you informed so you know exactly when to expect your 
              furniture.
            </li>
            <li>
              <strong>Enjoy Your New Furniture:</strong> Once delivered, your new furniture will be ready to enhance 
              your home. With every piece designed for comfort, style, and durability, you can enjoy your furniture 
              knowing it’s made to last.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
