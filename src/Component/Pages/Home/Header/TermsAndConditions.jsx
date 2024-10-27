import React from "react";
import {
  FaCheckCircle,
  FaExclamationTriangle,
  FaRegClipboard,
} from "react-icons/fa";
//import useTitle from "../../../../Hooks/useTitle";

const TermsAndConditions = () => {
  // useTitle("Terms and Conditions");

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12 px-6">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-center text-3xl md:text-4xl font-extrabold mb-3 text-gradient">
            Terms and Conditions
          </h1>

          <p className="text-lg font-semibold  mb-4 text-center text-gradient3">
            Effective Date: <strong>March 23, 2023</strong>
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-gradient2">
              <FaRegClipboard className="mr-2 text-xl" />
              1. Acceptance of Terms
            </h2>
            <p className="mb-4 text-gray-600 leading-relaxed">
              By accessing or using our services, you agree to be bound by these
              Terms and Conditions. If you do not agree with any part of these
              terms, you must not use our services.
            </p>
          </section>

          <section className="mb-10 ">
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-gradient2">
              <FaCheckCircle className="mr-2 text-xl" />
              2. User Responsibilities
            </h2>
            <ul className="list-disc ml-8 text-gray-600 space-y-2">
              <li>Maintain the confidentiality of your account information.</li>
              <li>
                Provide accurate and complete information during registration.
              </li>
              <li>
                Notify us immediately of any unauthorized use of your account.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-gradient2">
              <FaExclamationTriangle className="mr-2 text-xl" />
              3. Limitation of Liability
            </h2>
            <p className="mb-4 text-gray-600 leading-relaxed">
              We will not be liable for any indirect, incidental, special, or
              consequential damages arising out of or in connection with your
              use of our services. Your use of our services is at your own risk.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default TermsAndConditions;
