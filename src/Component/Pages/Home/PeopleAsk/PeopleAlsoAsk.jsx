import React from "react";

const PeopleAlsoAsk = () => {
  return (
    <>
      <section className="p-8 bg-white rounded-lg shadow-md border-2 border-red-700 text-rose-600 mb-10">
        <p className="text-gray-600 text-center text-xl mb-8 font-bold">
          Discover answers to frequently asked questions about Aircnc, the
          world's leading platform for booking luxurious and affordable hotel
          rooms with top-notch facilities.
        </p>

        <div className="space-y-6">
          {/* Question 1 */}
          <div className="collapse collapse-plus bg-white text-gray-800 rounded-lg shadow-lg">
            <input type="radio" name="faq-accordion" defaultChecked />
            <div className="collapse-title text-xl font-semibold bg-red-500 text-white rounded-t-lg">
              What are the most luxurious hotels available on Aircnc?
            </div>
            <div className="collapse-content bg-pink-100 p-4 rounded-b-lg">
              <p>
                Aircnc offers a range of luxurious hotels worldwide, featuring
                top-tier amenities, including 5-star resorts, private villas,
                and premium suites with breathtaking views, exclusive services,
                and world-class facilities.
              </p>
            </div>
          </div>

          {/* Question 2 */}
          <div className="collapse collapse-plus bg-white text-gray-800 rounded-lg shadow-lg">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-xl font-semibold bg-red-500 text-white rounded-t-lg">
              How do I find affordable hotels on Aircnc?
            </div>
            <div className="collapse-content bg-pink-100 p-4 rounded-b-lg">
              <p>
                You can easily find affordable hotels on Aircnc by using filters
                such as price range, location, and special deals. We offer a
                variety of options to fit different budgets, from economy to
                luxury.
              </p>
            </div>
          </div>

          {/* Question 3 */}
          <div className="collapse collapse-plus bg-white text-gray-800 rounded-lg shadow-lg">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-xl font-semibold bg-red-500 text-white rounded-t-lg">
              What facilities do Aircnc hotels offer?
            </div>
            <div className="collapse-content bg-pink-100 p-4 rounded-b-lg">
              <p>
                Aircnc hotels offer a wide array of facilities, including free
                Wi-Fi, swimming pools, spas, fitness centers, airport transfers,
                and more. Each listing details the specific amenities provided
                by the property.
              </p>
            </div>
          </div>

          {/* Question 4 */}
          <div className="collapse collapse-plus bg-white text-gray-800 rounded-lg shadow-lg">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-xl font-semibold bg-red-500 text-white rounded-t-lg">
              Can I book long-term stays on Aircnc?
            </div>
            <div className="collapse-content bg-pink-100 p-4 rounded-b-lg">
              <p>
                Yes, Aircnc offers flexible booking options, including long-term
                stays. You can find special discounts for extended stays at
                various properties, making it ideal for both leisure and
                business travel.
              </p>
            </div>
          </div>

          {/* Question 5 */}
          <div className="collapse collapse-plus bg-white text-gray-800 rounded-lg shadow-lg">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-xl font-semibold bg-red-500 text-white rounded-t-lg">
              How do I cancel or modify my booking?
            </div>
            <div className="collapse-content bg-pink-100p-4 rounded-b-lg">
              <p>
                You can easily cancel or modify your booking through your Aircnc
                account. Simply visit the "My Bookings" section, choose the
                reservation, and follow the instructions for changes or
                cancellations, subject to the property's cancellation policy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PeopleAlsoAsk;
