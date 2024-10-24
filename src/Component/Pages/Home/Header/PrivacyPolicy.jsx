import React from "react";
import {
  FaLock,
  FaShieldAlt,
  FaRegAddressCard,
  FaRegFileAlt,
  FaChild,
} from "react-icons/fa"; // Importing different icons
import useTitle from "../../../../Hooks/useTitle";

const PrivacyPolicy = () => {
  useTitle("PrivacyPolicy");
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold mb-4 text-center text-red-500">
          Privacy Policy
        </h1>
        <p className="text-xl font-semibold mb-6">
          Effective Date: <strong>[23-03-23]</strong>
        </p>
        <p className="mb-4">
          Aircnc <strong>(“we,” “our,” or “us”)</strong> is committed to
          protecting your privacy. This Privacy Policy explains how we collect,
          use, disclose, and safeguard your information when you visit our
          website,{" "}
          <strong>Discover Amazing Places with AirCNC Industries Ltd</strong>,
          or use our services.
        </p>
        <p className="text-red-500 mb-4">
          Please read this Privacy Policy carefully. If you do not agree with
          the terms of this Privacy Policy, please do not access the site.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-red-500">
          <FaRegFileAlt className="inline-block mr-2" /> 1. Information We
          Collect
        </h2>
        <p className="mb-4">
          We may collect information about you in various ways, including:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>
            Personal Data: Personally identifiable information, such as your
            name, email address, phone number, and other data you voluntarily
            provide when registering for our services.
          </li>
          <li>
            Usage Data: Information automatically collected, such as your IP
            address, browser type, operating system, referring URLs, and how you
            interact with our site.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-red-500">
          <FaShieldAlt className="inline-block mr-2" /> 2. How We Use Your
          Information
        </h2>
        <p className=" mb-4">
          We may use your information for purposes such as:
        </p>
        <ul className="list-disc ml-6 mb-4 ">
          <li>To provide and manage services or features on our website.</li>
          <li>
            To send you updates, marketing, or promotional materials (you can
            opt-out at any time).
          </li>
          <li>To analyze and improve our website and services.</li>
          <li>To comply with legal obligations and enforce our terms.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-red-500">
          <FaLock className="inline-block mr-2" /> 3. Sharing Your Information
        </h2>
        <p className=" mb-4">
          We may share your information with third parties under the following
          circumstances:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>
            Service Providers: We may share your information with vendors or
            third-party service providers to help us operate the site and
            provide our services.
          </li>
          <li>
            Legal Requirements: We may disclose your information if required by
            law or in response to valid requests by public authorities.
          </li>
          <li>
            Business Transfers: If we are involved in a merger, acquisition, or
            sale of assets, your information may be transferred.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-red-500">
          <FaRegAddressCard className="inline-block mr-2" /> 4. Cookies and
          Tracking Technologies
        </h2>
        <p className=" mb-4">
          We use cookies, web beacons, and similar technologies to help
          personalize and improve your experience. You can adjust your browser
          settings to block cookies, but doing so may affect site functionality.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-red-500">
          <FaLock className="inline-block mr-2" /> 5. Security
        </h2>
        <p className="mb-4">
          We take reasonable measures to protect your information from
          unauthorized access or disclosure. However, no method of transmission
          over the internet is entirely secure, and we cannot guarantee the
          absolute security of your data.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-red-500">
          <FaChild className="inline-block mr-2" /> 6. Your Privacy Rights
        </h2>
        <p className=" mb-4">
          Depending on your jurisdiction, you may have rights to:
        </p>
        <ul className="list-disc ml-6 mb-4 ">
          <li>Access the personal information we hold about you.</li>
          <li>Request the correction or deletion of your personal data.</li>
          <li>Opt-out of certain data processing activities.</li>
          <li>
            File a complaint with a data protection authority if you believe
            your privacy rights have been violated.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-red-500">
          <FaChild className="inline-block mr-2" /> 7. Children's Privacy
        </h2>
        <p className=" mb-4">
          Our site is not intended for children under the age of 13, and we do
          not knowingly collect personal information from children under 13. If
          we become aware that we have collected such data, we will take steps
          to delete it.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-red-500">
          <FaRegFileAlt className="inline-block mr-2" /> 8. Changes to This
          Policy
        </h2>
        <p className=" mb-4">
          We may update this Privacy Policy from time to time to reflect changes
          in our practices or for other operational, legal, or regulatory
          reasons. Any updates will be posted on this page, and the "Effective
          Date" at the top will be revised.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-red-500">
          <FaRegAddressCard className="inline-block mr-2" /> 9. Contact Us
        </h2>
        <p className=" mb-4">
          If you have questions about this Privacy Policy or our practices,
          please contact us at:
        </p>
        <p className=" mb-4">
          <strong>AirCNC Industries Ltd.</strong>
          <br />
          Phone: <strong>+880170000000</strong>
          <br />
          Email: <strong>aircnc@gmail.com</strong>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
