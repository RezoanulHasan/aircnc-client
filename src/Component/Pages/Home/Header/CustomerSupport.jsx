import React from "react";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";

import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import useTitle from "../../../../Hooks/useTitle";
import Header from "./Header";

const CustomerSupport = () => {
  useTitle("CustomerSupport");

  return (
    <>
      <Header></Header>

      <div className="p-6">
        <h1 className="text-5xl font-extrabold text-center mb-8 mt-2   text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 drop-shadow-lg">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2">
          <section className="bg-blue-100 p-6 rounded-lg shadow-md">
            <h2 className="text-4xl font-semibold text-blue-700 mb-4">
              Contact Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center p-4 bg-blue-200 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <FaPhoneAlt className="text-blue-600 text-xl " />
                <span className="text-gray-800">Call us: +880170000000</span>
              </div>
              <div className="flex items-center p-4 bg-blue-200 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <FaEnvelope className="text-blue-600 text-xl " />
                <span className="text-gray-800">Email: aircnc@gmail.com</span>
              </div>
              <div className="flex items-center p-4 bg-blue-200 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <FaWhatsapp className="text-blue-600 text-xl " />
                <span className="text-gray-800">WhatsApp: +880170000000</span>
              </div>
            </div>
          </section>

          <section className="bg-green-100 p-6 rounded-lg shadow-md">
            <h2 className="text-4xl font-semibold text-green-700 mb-4">
              Support Ticket Submission
            </h2>
            <p className="mb-4 text-gray-700">
              Have a specific issue? Submit a support ticket, and our team will
              get back to you shortly.
            </p>
          </section>

          <section className="bg-yellow-100 p-6 rounded-lg shadow-md">
            <h2 className="text-4xl font-semibold text-yellow-700 mb-4">
              Service Hours
            </h2>
            <p className="mb-4 text-gray-700">
              Our customer support is available:
            </p>
            <ul className="list-disc list-inside mb-4 text-gray-800">
              <li>Monday to Friday: 9 AM - 5 PM</li>
              <li>Saturday: 10 AM - 2 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </section>

          <section className="bg-purple-100 p-6 rounded-lg shadow-md">
            <h2 className="text-4xl font-semibold text-purple-700 mb-4">
              Help Resources
            </h2>
            <p className="mb-4 text-gray-700">
              Explore our helpful resources to get the most out of our service:
            </p>
            <ul className="list-disc list-inside mb-4 text-gray-800">
              <li>
                <a href="#" className="text-purple-600 hover:underline">
                  User Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-purple-600 hover:underline">
                  Tutorial Videos
                </a>
              </li>
              <li>
                <a href="#" className="text-purple-600 hover:underline">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
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
    </>
  );
};

export default CustomerSupport;
