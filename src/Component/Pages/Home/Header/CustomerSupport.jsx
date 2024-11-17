import React, { useEffect } from "react";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";

import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import useTitle from "../../../../Hooks/useTitle";
import Header from "./Header";
import RecommendedPlaces from "../../Rooms/RecommendedPlaces";
import Ca from "./Customer Support/Ca";
import ServiceHours from "./Customer Support/ServiceHours";
import HelpResources from "./Customer Support/HelpResources";

const CustomerSupport = () => {
  useTitle("CustomerSupport");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header></Header>

      <div className="p-6">
        <h1 className="text-5xl font-extrabold text-center mb-8 mt-2  text-gradient">
          We're Here to Help!
        </h1>
        <div className="flex justify-center mb-5 ">
          <Link to="/filters">
            <button className=" text-white  bg-red-500 focus:outline-none text-sm px-5 py-3 lg:py-4 text-center flex space-x-2 items-center  rounded-xl ">
              <span className="font-semibold ">Click Here About Room Info</span>
              <FaArrowRightLong />
            </button>
          </Link>
        </div>

        <Ca></Ca>

        <div className="flex flex-col md:flex-row gap-4 p4 mt-4">
          <div className="flex-1">
            <ServiceHours />
          </div>
          <div className="flex-1">
            <HelpResources />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2">
          <section className="bg-green-100 p-6 rounded-lg shadow-md">
            <h2 className="text-4xl font-semibold text-green-700 mb-4">
              Support Ticket Submission
            </h2>
            <p className="mb-4 text-gray-700">
              Have a specific issue? Submit a support ticket, and our team will
              get back to you shortly.
            </p>
          </section>

          <section className="bg-red-100 p-6 rounded-lg shadow-md">
            <h2 className="text-4xl font-semibold text-red-700 mb-4">
              Escalation Process
            </h2>
            <p className="mb-4 text-gray-700">
              If your issue is not resolved to your satisfaction, please follow
              our escalation process:
            </p>
            <ul className="list-disc list-inside mb-4 text-gray-800">
              <li>Contact customer support through our main channels.</li>
              <li>Request to speak with a supervisor if necessary.</li>
              <li>Fill out our escalation form for further assistance.</li>
            </ul>
          </section>

          <section className="bg-teal-100 p-6 rounded-lg shadow-md">
            <h2 className="text-4xl font-semibold text-teal-700 mb-4">
              Latest Updates
            </h2>
            <div className="bg-teal-200 p-4 rounded-md shadow-md mb-4">
              <h3 className="font-semibold text-gray-800">
                System Maintenance
              </h3>
              <p className="text-gray-700">
                Scheduled maintenance will occur every Saturday from 2 PM to 4
                PM.
              </p>
            </div>
          </section>

          <section className="bg-orange-100 p-6 rounded-lg shadow-md">
            <h2 className="text-4xl font-semibold text-orange-700 mb-4">
              Community Forum
            </h2>
            <p className="mb-4 text-gray-700">
              Join our community forum to connect with other users, ask
              questions, and share tips.
            </p>
            <p className="mb-4 text-gray-700">
              Engage in discussions about the latest trends and best practices
              in our industry.
            </p>
            <p className="mb-4 text-gray-700">
              Get insights from experienced users who have navigated similar
              challenges.
            </p>
            <p className="mb-4 text-gray-700">
              Participate in community-led events and webinars to enhance your
              knowledge.
            </p>
            <p className="mb-4 text-gray-700">
              Share your own experiences and help others by providing solutions
              to common issues.
            </p>
          </section>

          <section className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h2 className="text-4xl font-semibold text-blue-700 mb-4">
              Feedback and Suggestions
            </h2>
            <p className="mb-4 text-gray-700">
              We value your feedback! Please let us know how we can improve our
              service. Your suggestions are essential for us to enhance your
              experience.
            </p>
            <p className="mb-4 text-gray-700">Share your thoughts.</p>
            <ul className="list-disc list-inside mb-4 text-gray-800">
              <li>What do you like most about our service?</li>
              <li>What features would you like to see in the future?</li>
              <li>Any issues you faced while using our service?</li>
            </ul>
          </section>

          <section className="bg-pink-100 p-6 rounded-lg shadow-md">
            <h2 className="text-4xl font-semibold text-pink-700 mb-4">
              Social Media Updates
            </h2>
            <p className="mb-4 text-gray-700">
              Stay updated with our latest news and offers on social media!
            </p>
            <ul className="list-disc list-inside mb-4 text-gray-800">
              <li>Weekly tips and tricks.</li>
              <li>Exclusive discounts and promotions.</li>
              <li>Updates on new features and services.</li>
              <li>Behind-the-scenes content from our team.</li>
              <li>Customer success stories and testimonials.</li>
              <li>Live Q&A sessions with our support team.</li>
              <li>Fun contests and giveaways.</li>
              <li>Industry news and trends to watch.</li>
            </ul>
          </section>
        </div>
      </div>
      <RecommendedPlaces></RecommendedPlaces>
    </>
  );
};

export default CustomerSupport;
