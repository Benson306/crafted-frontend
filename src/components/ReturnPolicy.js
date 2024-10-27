import React from 'react';

function ReturnPolicy() {
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
            <h1 className="text-xl lg:text-2xl font-bold text-white">Return Policy</h1>
          </div>
        </div>
      <div className="max-w-3xl mx-auto p-6 bg-gray-100 rounded-md shadow-lg mb-10 mt-5 text-sm">
        <p className="mb-4">
          At <b>Crafted Furniture Collections</b>, we strive to ensure that our customers are completely satisfied with their purchases. Our return policy outlines the terms and conditions under which we accept returns and exchanges, ensuring clarity and fairness for both parties. We understand that sometimes items may not meet your expectations, and we are committed to resolving any issues that arise.
        </p>

        <h2 className="text-md font-semibold mt-6 mb-2">4. Returns and Exchanges</h2>
        
        <h3 className="font-semibold mt-4 mb-2">4.1. Returns:</h3>
        <p className="mb-2">
          All items must be thoroughly inspected and confirmed by the customer before delivery, either in person or through video communication. This step is crucial in ensuring that you receive the correct product in good condition. Upon delivery of the item, our company does not support returns of items unless they are found to be damaged upon arrival. We encourage our customers to inspect their purchases carefully and report any issues immediately to facilitate a swift resolution.
        </p>
        
        <h3 className="font-semibold mt-4 mb-2">4.2. Non-Eligible Items:</h3>
        <p className="mb-2">
          Please note that certain items may not be eligible for return or exchange. This includes custom-made products, special orders, and items specifically tailored to meet individual customer specifications. We believe in providing our customers with unique products, and as such, these items are not returnable. Before placing an order for such items, we recommend confirming all details to ensure complete satisfaction.
        </p>
        
        <h3 className="font-semibold mt-4 mb-2">4.3. Return Shipping Costs:</h3>
        <p className="mb-2">
          If you need to return a product that is eligible for return (i.e., damaged or defective upon delivery), please be aware that you are responsible for the cost of return shipping unless the products were damaged or defective upon arrival. We advise using a trackable shipping service or purchasing shipping insurance for items over a certain value to ensure their safe return.
        </p>
        
        <h3 className="font-semibold mt-4 mb-2">4.4. Returns Process:</h3>
        <p className="mb-2">
          To initiate a return, please contact our customer service team within [insert timeframe, e.g., 14 days] of receiving your item. We will provide you with the necessary instructions and any required documentation to facilitate the return process. Timely communication is essential for us to assist you efficiently.
        </p>
        
        <h3 className="font-semibold mt-4 mb-2">4.5. Refund Processing:</h3>
        <p className="mb-2">
          Once your return is received and inspected, we will notify you of the approval or rejection of your refund. If approved, your refund will be processed within a certain number of days, and a credit will automatically be applied to your original payment method. Please note that depending on your bank or credit card company, it may take some additional time before the refund is officially posted.
        </p>
        
        <h3 className="font-semibold mt-4 mb-2">4.6. Exchange Policy:</h3>
        <p className="mb-2">
          If you wish to exchange an item for a different size or model, please follow the same process as a return. We will assist you in placing a new order once we receive the returned item. Exchanges are subject to product availability.
        </p>

        <p className="mb-4">
          We appreciate your understanding and cooperation as we work to provide you with the best possible service and products. If you have any questions or require further clarification regarding our return policy, please do not hesitate to reach out to our customer support team.
        </p>
      </div>
    </div>
  );
}

export default ReturnPolicy;
