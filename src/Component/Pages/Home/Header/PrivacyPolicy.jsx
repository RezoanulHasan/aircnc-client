import React, { useEffect } from "react";
import useTitle from "../../../../Hooks/useTitle";
import Header from "./Header";
import Signature from "./Signature/Signature";
import TermsAndConditions from "./TermsAndConditions";
import RecommendedPlaces from "../../Rooms/RecommendedPlaces";

const Section = ({ title, children }) => (
  <section className="mb-10">
    <h2 className="text-2xl font-semibold mb-4 flex items-center text-gradient3">
      {title}
    </h2>
    <div className="text-gray-600 leading-relaxed">{children}</div>
  </section>
);

const PrivacyPolicy = () => {
  useTitle("PrivacyPolicy");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12 px-6 relative shadow-lg rounded-lg mb-4">
        <img
          src="https://i.ibb.co/72RXy2H/favicon.png"
          alt="Logo"
          className="absolute inset-0 opacity-10 h-auto w-96 flex justify-center"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />

        <h1 className="text-center text-3xl md:text-4xl font-extrabold mb-3 text-gradient">
          Privacy Policy
        </h1>

        <p className="text-lg font-semibold mb-4 text-center text-gradient3">
          Effective Date: <strong>March 23, 2023</strong>
        </p>
        <p className="mb-6 text-gray-600 leading-relaxed text-center">
          At Aircnc <strong>("we," "our," or "us")</strong>, we take your
          privacy seriously. This Privacy Policy outlines how we collect, use,
          and protect your information when you use our website,{" "}
          <strong>Discover Amazing Places with AirCNC Industries Ltd</strong>.
        </p>
        <p className="mb-6 font-semibold text-center text-gradient3">
          Please read this Privacy Policy carefully. By accessing this site, you
          agree to the terms.
        </p>

        <Section title="1. Information We Collect">
          <p className="mb-4">
            We collect information in various ways, including:
          </p>
          <ul className="list-disc ml-8 text-gray-600 space-y-2">
            <li>
              <strong>Personal Data:</strong> Your name, email address, phone
              number, and any other data you voluntarily provide.
            </li>
            <li>
              <strong>Usage Data:</strong> Automatically collected information,
              such as IP addresses, browser details, and interaction patterns.
            </li>
          </ul>
        </Section>

        <Section title="2. How We Use Your Information">
          <ul className="list-disc ml-8 text-gray-600 space-y-2">
            <li>To manage and improve our services and user experience.</li>
            <li>
              To send you updates, promotional content, or marketing materials.
            </li>
            <li>To analyze and enhance our platform’s functionality.</li>
            <li>To comply with legal obligations and enforce our terms.</li>
          </ul>
        </Section>

        <Section title="3. Sharing Your Information">
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
              <strong>Business Transfers:</strong> In case of a merger or sale,
              your information may be transferred.
            </li>
          </ul>
        </Section>

        <Section title="4. Cookies and Tracking">
          <p>
            We use cookies and tracking technologies to personalize your
            experience. Cookies help us remember your preferences, such as
            language settings, to enhance your browsing experience. Certain
            cookies are essential for the basic functionality of the site and
            cannot be disabled. We also utilize analytics cookies to track site
            usage, which helps us improve performance. You can manage cookie
            preferences in your browser settings, but disabling them may affect
            how our site functions.
          </p>
        </Section>

        <Section icon={null} title="5. Security">
          <p>
            We take reasonable security measures to protect your data but cannot
            guarantee absolute security. Data transmission over the internet has
            inherent risks, and we encourage you to use caution. We regularly
            update our security protocols to protect your information from
            unauthorized access. Our team monitors for potential threats and
            vulnerabilities, addressing them promptly to enhance protection.
            Despite these efforts, no system is entirely immune to breaches, so
            please handle your data responsibly.
          </p>
        </Section>

        <Section icon={null} title="6. Your Privacy Rights">
          <ul className="list-disc ml-8 text-gray-600 space-y-2">
            <li>Access your personal information.</li>
            <li>Request corrections or deletions of your data.</li>
            <li>Opt-out of data processing activities.</li>
            <li>File a complaint if your rights are violated.</li>
          </ul>
        </Section>

        <Section icon={null} title="7. Children's Privacy">
          <p>
            Our site is not intended for children under 13. We do not knowingly
            collect data from children, and if such data is identified, it will
            be deleted. Parents or guardians who discover that their child has
            provided us with personal information may contact us to request
            deletion. We encourage parents to monitor their children’s online
            activities and educate them on internet safety. In compliance with
            applicable laws, we take measures to ensure that data related to
            minors is handled with care and confidentiality. Your child's safety
            is our priority.
          </p>
        </Section>

        <p className="mb-6 font-semibold text-center text-gradient3">
          We may update this Privacy Policy occasionally to reflect changes in
          practices or legal obligations. The "Effective Date" will be updated
          accordingly.
        </p>

        <TermsAndConditions></TermsAndConditions>

        <div className="flex justify-between mt-6 mx-5">
          <div>
            <h1 className="text-2xl font-semibold flex items-center text-gradient3">
              Contact Us
            </h1>
            <p>
              For any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="font-semibold leading-relaxed text-2xl text-gradient">
              AirCNC Industries Ltd.
            </p>
            <p>Phone: +880170000000</p>
            <p>Email: aircnc@gmail.com</p>
          </div>

          <div className="mt-2 p-2">
            <Signature />
          </div>
        </div>
      </div>

      <RecommendedPlaces></RecommendedPlaces>
    </>
  );
};

export default PrivacyPolicy;
