import React from 'react';

const TermsAndConditions = () => {
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
            <h1 className="text-xl lg:text-2xl font-bold text-white">Terms and Condition</h1>
          </div>
        </div>
      <div className="max-w-3xl mx-auto p-6 bg-gray-100 rounded-md shadow-lg mb-10 mt-5">
        <h2 className="text-md font-semibold mt-6 mb-2">1. Ordering Process</h2>
        <p className="mb-2 text-sm">
          <strong>1.1. Placing Orders:</strong> Orders can be placed through our website, over the phone, or in-store. By placing an order, you are making an offer to purchase the Products subject to these Terms.
        </p>
        <p className="mb-2 text-sm">
          <strong>1.2. Order Confirmation:</strong> Upon receipt of your order, we will send you an order confirmation via email or Whatsapp, which will outline the details of your order. This confirmation does not constitute acceptance of your order.
        </p>
        <p className="mb-2 text-sm">
          <strong>1.3. Acceptance of Orders:</strong> Acceptance of your order occurs when the Company dispatches the Products. We reserve the right to refuse or cancel any order for reasons including but not limited to unavailability of Products, errors in the description or price, or suspicion of fraud.
        </p>
        <p className="mb-2 text-sm">
          <strong>1.4. Items:</strong> Items will be made according to the customer directions as captured in order confirmation. A customer cannot change their order midway. In case of such changes, the customer will bear full charges.
        </p>
        <p className="mb-2 text-sm">
          <strong>1.5. Collection:</strong> The customer is encouraged to collect their item upon completion. Any delay by the customer to collect their item exceeding 2 months attracts a penalty. The company may also decide to dispose of the item and no refund will be made.
        </p>

        <h2 className="text-md font-semibold mt-6 mb-2">2. Pricing and Payment</h2>
        <p className="mb-2 text-sm">
          <strong>2.1. Pricing:</strong> All prices are quoted in Ksh and are subject to change without notice. The price displayed on the website at the time of order confirmation is the price you will pay.
        </p>
        <p className="mb-2 text-sm">
          <strong>2.2. Payment Terms:</strong> Payment is due at the time of order. Accepted payment methods include credit/debit cards, PayPal, or any other method specified during the order process.
        </p>
        <p className="mb-2 text-sm">
          <strong>2.3. Down Payment:</strong> A down payment of at least 50% of the value of the item should be made by the customer when placing the order, with complete payment before the item leaves for delivery.
        </p>
        <p className="mb-2 text-sm">
          <strong>2.4. Payment Methods:</strong> All payments should be done through the official business accounts. The company is not liable for any payment done through unofficial means.
        </p>

        <h2 className="text-md font-semibold mt-6 mb-2">3. Delivery</h2>
        <p className="mb-2 text-sm">
          <strong>3.1. Delivery Terms:</strong> Every order is processed as quickly as possible, with the aim of facilitating timely delivery. Processing times may vary based on the type of product, availability, and order volume.
        </p>
        <p className="mb-2 text-sm">
          <strong>3.2. Delivery Communication:</strong> Once the order has been processed, a delivery date will be communicated. Customers are encouraged to keep track of their delivery status through the provided tracking information.
        </p>
        <p className="mb-2 text-sm">
          <strong>3.3. Risk of Loss:</strong> Risk of loss or damage to the Products passes to you upon delivery.
        </p>
        <p className="mb-2 text-sm">
          <strong>3.4. Delivery Charges:</strong> Delivery charges are met by the customer. The company may, at its discretion, deliver the items at no cost through discounts.
        </p>
        <p className="mb-2 text-sm">
          <strong>3.5. Location Disclosure:</strong> The customer is required to disclose their location for delivery. In the event the customer doesn’t or gives a different location, the cost will be met by the customer.
        </p>
        <p className="mb-2 text-sm">
          <strong>3.6. Delivery Inspection:</strong> The customer must inspect and sign the delivery note upon delivery. In case of any defect, the report should be made immediately before the delivery team leaves. The company will not be liable for late reports (only issues arising from transportation will be inspected).
        </p>
        <p className="mb-2 text-sm">
          <strong>3.7. Liability for Delivery:</strong> The company is not liable for delivery made via private means other than company transport.
        </p>
        <p className="mb-2 text-sm">
          <strong>3.8. Delays:</strong> In the case of prolonged delays, we will work with you to provide a solution, which may include rescheduling delivery, offering alternative products, or issuing a refund at our discretion.
        </p>

        <h2 className="text-md font-semibold mt-6 mb-2">4. Returns and Exchanges</h2>
        <p className="mb-2 text-sm">
          <strong>4.1. Returns:</strong> All items must be inspected and confirmed by the customer before delivery, either in person or through video. Upon delivery of the item, the company does not support returns of items except for damaged items upon delivery.
        </p>
        <p className="mb-2 text-sm">
          <strong>4.2. Eligibility for Return:</strong> Certain items, such as custom-made or special-order Products, may not be eligible for return or exchange.
        </p>
        <p className="mb-2 text-sm">
          <strong>4.3. Return Shipping:</strong> You are responsible for the cost of return shipping, unless the Products were damaged or defective upon delivery.
        </p>

        <h2 className="text-md font-semibold mt-6 mb-2">5. Warranties and Disclaimers</h2>
        <p className="mb-2 text-sm">
          <strong>5.1. Manufacturer Warranty:</strong> Products may come with a manufacturer's warranty, details of which are provided with the Product. We do not provide any additional warranty unless explicitly stated.
        </p>
        <p className="mb-2 text-sm">
          <strong>5.2. Disclaimer:</strong> We make no representations or warranties of any kind, express or implied, regarding the Products, except as provided herein.
        </p>

        <h2 className="text-md font-semibold mt-6 mb-2">6. Limitation of Liability</h2>
        <p className="mb-2 text-sm">
          To the fullest extent permitted by law, the Company shall not be liable for any indirect, incidental, special, or consequential damages arising from the sale or use of the Products.
        </p>

        <h2 className="text-md font-semibold mt-6 mb-2">7. Governing Law</h2>
        <p className="mb-2 text-sm">
          These Terms shall be governed by and construed in accordance with the laws of Kenya.
        </p>

        <h2 className="text-md font-semibold mt-6 mb-2">8. Changes to Terms</h2>
        <p className="mb-2 text-sm">
          We reserve the right to modify these Terms at any time. Changes will be effective upon posting on our website. Continued use of our services after changes constitutes acceptance of the new Terms.
        </p>

        <h2 className="text-md font-semibold mt-6 mb-2">9. Contact Information</h2>
        <p className="mb-2 text-sm">
          For any questions regarding these Terms, please contact us at:
        </p>
        <p>Email: <a href="mailto:craftedfurniturecollectionke@gmail.comm" className="text-blue-600 hover:underline">craftedfurniturecollectionke@gmail.com</a></p>
        <p>Phone: <span className='font-bold'>+254 792 228 028</span></p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
