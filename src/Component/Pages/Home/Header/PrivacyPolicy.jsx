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
      <Header></Header>
      <div className="min-h-screen bg-gradient-to-r from-gray-100 via-white to-gray-100 p-6">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-4 text-center text-red-600">
            Privacy Policy
          </h1>
          <p className="text-lg font-medium mb-6 text-gray-700 text-center">
            Effective Date: <strong>23-03-23</strong>
          </p>
          <p className="mb-4 text-gray-600 leading-relaxed">
            Aircnc <strong>(“we,” “our,” or “us”)</strong> is committed to
            protecting your privacy. This Privacy Policy explains how we
            collect, use, disclose, and safeguard your information when you
            visit our website,{" "}
            <strong>Discover Amazing Places with AirCNC Industries Ltd</strong>,
            or use our services.
          </p>
          <p className="text-red-600 mb-4 font-medium text-center">
            Please read this Privacy Policy carefully. If you do not agree with
            the terms of this Privacy Policy, please do not access the site.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-red-600">
              <FaRegFileAlt className="mr-2 text-xl" />
              1. Information We Collect
            </h2>
            <p className="mb-4 text-gray-600">
              We may collect information about you in various ways, including:
            </p>
            <ul className="list-disc ml-8 text-gray-600 space-y-2">
              <li>
                <strong>Personal Data:</strong> Personally identifiable
                information, such as your name, email address, phone number, and
                other data you voluntarily provide when registering for our
                services.
              </li>
              <li>
                <strong>Usage Data:</strong> Information automatically
                collected, such as your IP address, browser type, operating
                system, referring URLs, and how you interact with our site.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-red-600">
              <FaShieldAlt className="mr-2 text-xl" />
              2. How We Use Your Information
            </h2>
            <p className="mb-4 text-gray-600">
              We may use your information for purposes such as:
            </p>
            <ul className="list-disc ml-8 text-gray-600 space-y-2">
              <li>
                To provide and manage services or features on our website.
              </li>
              <li>
                To send you updates, marketing, or promotional materials (you
                can opt-out at any time).
              </li>
              <li>To analyze and improve our website and services.</li>
              <li>To comply with legal obligations and enforce our terms.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-red-600">
              <FaLock className="mr-2 text-xl" />
              3. Sharing Your Information
            </h2>
            <p className="mb-4 text-gray-600">
              We may share your information with third parties under the
              following circumstances:
            </p>
            <ul className="list-disc ml-8 text-gray-600 space-y-2">
              <li>
                <strong>Service Providers:</strong> We may share your
                information with vendors or third-party service providers to
                help us operate the site and provide our services.
              </li>
              <li>
                <strong>Legal Requirements:</strong> We may disclose your
                information if required by law or in response to valid requests
                by public authorities.
              </li>
              <li>
                <strong>Business Transfers:</strong> If we are involved in a
                merger, acquisition, or sale of assets, your information may be
                transferred.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-red-600">
              <FaRegAddressCard className="mr-2 text-xl" />
              4. Cookies and Tracking Technologies
            </h2>
            <p className="text-gray-600">
              We use cookies, web beacons, and similar technologies to help
              personalize and improve your experience. You can adjust your
              browser settings to block cookies, but doing so may affect site
              functionality.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-red-600">
              <FaLock className="mr-2 text-xl" />
              5. Security
            </h2>
            <p className="text-gray-600">
              We take reasonable measures to protect your information from
              unauthorized access or disclosure. However, no method of
              transmission over the internet is entirely secure, and we cannot
              guarantee the absolute security of your data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-red-600">
              <FaChild className="mr-2 text-xl" />
              6. Your Privacy Rights
            </h2>
            <p className="mb-4 text-gray-600">
              Depending on your jurisdiction, you may have rights to:
            </p>
            <ul className="list-disc ml-8 text-gray-600 space-y-2">
              <li>Access the personal information we hold about you.</li>
              <li>Request the correction or deletion of your personal data.</li>
              <li>Opt-out of certain data processing activities.</li>
              <li>
                File a complaint with a data protection authority if you believe
                your privacy rights have been violated.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-red-600">
              <FaChild className="mr-2 text-xl" />
              7. Children's Privacy
            </h2>
            <p className="text-gray-600">
              Our site is not intended for children under the age of 13, and we
              do not knowingly collect personal information from children under
              13. If we become aware that we have collected such data, we will
              take steps to delete it.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-red-600">
              <FaRegFileAlt className="mr-2 text-xl" />
              8. Changes to This Policy
            </h2>
            <p className="text-gray-600">
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or for other operational, legal, or
              regulatory reasons. Any updates will be posted on this page, and
              the "Effective Date" at the top will be revised.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-red-600">
              <FaRegAddressCard className="mr-2 text-xl" />
              9. Contact Us
            </h2>
            <p className="text-gray-600">
              If you have questions about this Privacy Policy or our practices,
              please contact us at:
            </p>
            <p className="text-gray-700">
              <strong>AirCNC Industries Ltd.</strong>
              <br />
              Phone: <strong>+880170000000</strong>
              <br />
              Email: <strong>aircnc@gmail.com</strong>
            </p>
          </section>
        </div>
      </div>{" "}
    </>
  );
};

export default PrivacyPolicy;
