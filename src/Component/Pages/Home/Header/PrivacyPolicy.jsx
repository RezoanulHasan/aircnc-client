import React from "react";
import {
  FaLock,
  FaShieldAlt,
  FaRegAddressCard,
  FaRegFileAlt,
  FaChild,
} from "react-icons/fa";
import useTitle from "../../../../Hooks/useTitle";
import Header from "./Header";

const PrivacyPolicy = () => {
  useTitle("PrivacyPolicy");

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12 px-6">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
          <h1 className="text-center text-3xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 drop-shadow-lg">
            Privacy Policy
          </h1>

          <p className="text-lg font-medium mb-4  text-center          text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 drop-shadow-lg">
            Effective Date: <strong>March 23, 2023</strong>
          </p>
          <p className="mb-6 text-gray-600 leading-relaxed text-center">
            At Aircnc <strong>("we," "our," or "us")</strong>, we take your
            privacy seriously. This Privacy Policy outlines how we collect, use,
            and protect your information when you use our website,{" "}
            <strong>Discover Amazing Places with AirCNC Industries Ltd</strong>.
          </p>
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 drop-shadow-lg mb-6 font-semibold text-center">
            Please read this Privacy Policy carefully. By accessing this site,
            you agree to the terms.
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 flex items-center    text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 drop-shadow-lg">
              <FaRegFileAlt className="mr-2 text-xl" />
              1. Information We Collect
            </h2>
            <p className="mb-4 text-gray-600 leading-relaxed">
              We collect information in various ways, including:
            </p>
            <ul className="list-disc ml-8 text-gray-600 space-y-2">
              <li>
                <strong>Personal Data:</strong> Your name, email address, phone
                number, and any other data you voluntarily provide.
              </li>
              <li>
                <strong>Usage Data:</strong> Automatically collected
                information, such as IP addresses, browser details, and
                interaction patterns.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 flex items-center    text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 drop-shadow-lg">
              <FaShieldAlt className="mr-2 text-xl" />
              2. How We Use Your Information
            </h2>
            <ul className="list-disc ml-8 text-gray-600 space-y-2">
              <li>To manage and improve our services and user experience.</li>
              <li>
                To send you updates, promotional content, or marketing
                materials.
              </li>
              <li>To analyze and enhance our platform’s functionality.</li>
              <li>To comply with legal obligations and enforce our terms.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 flex items-center  text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 drop-shadow-lg">
              <FaLock className="mr-2 text-xl" />
              3. Sharing Your Information
            </h2>
            <ul className="list-disc ml-8 text-gray-600 space-y-2">
              <li>
                <strong>Service Providers:</strong> We may share your data with
                third-party providers to facilitate our services.
              </li>
              <li>
                <strong>Legal Obligations:</strong> We may disclose data if
                required by law or in response to legal requests.
              </li>
              <li>
                <strong>Business Transfers:</strong> In case of a merger or
                sale, your information may be transferred.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 drop-shadow-lg">
              <FaRegAddressCard className="mr-2 text-xl" />
              4. Cookies and Tracking
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We use cookies and tracking technologies to personalize your
              experience. You can disable cookies through your browser settings,
              but this may affect site performance.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 drop-shadow-lg">
              <FaLock className="mr-2 text-xl" />
              5. Security
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We take reasonable security measures to protect your data but
              cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 drop-shadow-lg">
              <FaChild className="mr-2 text-xl" />
              6. Your Privacy Rights
            </h2>
            <ul className="list-disc ml-8 text-gray-600 space-y-2">
              <li>Access your personal information.</li>
              <li>Request corrections or deletions of your data.</li>
              <li>Opt-out of data processing activities.</li>
              <li>File a complaint if your rights are violated.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 drop-shadow-lg">
              <FaChild className="mr-2 text-xl" />
              7. Children's Privacy
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our site is not intended for children under 13. We do not
              knowingly collect data from children, and if such data is
              identified, it will be deleted.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 drop-shadow-lg">
              <FaRegFileAlt className="mr-2 text-xl" />
              8. Changes to This Policy
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this Privacy Policy occasionally to reflect changes
              in practices or legal obligations. The "Effective Date" will be
              updated accordingly.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 drop-shadow-lg">
              <FaRegAddressCard className="mr-2 text-xl" />
              9. Contact Us
            </h2>
            <p className="text-gray-700 leading-relaxed">
              For any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="  font-semibold leading-relaxed       ">
              <strong className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 drop-shadow-lg">
                AirCNC Industries Ltd.
              </strong>
              <br />
              Phone: <strong>+880170000000</strong>
              <br />
              Email: <strong>aircnc@gmail.com</strong>
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
