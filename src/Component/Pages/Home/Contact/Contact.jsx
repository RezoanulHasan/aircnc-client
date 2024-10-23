import Swal from "sweetalert2";
import Lottie from "lottie-react";
import contact from "../../../../assets/contact.json";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the CSS file

const Contact = () => {
  const { user } = useContext(AuthContext);

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const textarea = form.textarea.value;
    const contact = { name, email, textarea, phone };
    console.log(contact);

    fetch(`${import.meta.env.VITE_API_URL}/contacts`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(contact),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Message Sent Successfully",
            icon: "success",
            confirmButtonText: "CLOSE",
          });
          form.reset();
        }
      });
  }

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <SectionTitle subHeading="Get in Touch with Us" heading="Contact Us" />

      <div className="inset-0 opacity-100">
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-10 lg:space-y-0 lg:space-x-10 px-6 py-10">
          {/* Left Section: Lottie Animation */}
          <div className="lg:w-1/2 w-full mt-10" data-aos="fade-right">
            <Lottie
              className=""
              animationData={contact}
              loop={true}
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            />
          </div>

          {/* Right Section: Contact Form */}
          <div
            className="lg:w-1/2 w-full flex justify-center"
            data-aos="fade-left"
          >
            <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="my-4">
                  <label
                    htmlFor="name"
                    className="block font-bold text-gray-800 text-xl"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-2 block w-full shadow-sm text-gray-700 border border-gray-300 rounded-md p-3 focus:ring-indigo-500 focus:border-indigo-500"
                    required
                    defaultValue={user?.displayName}
                  />
                </div>

                <div className="my-4">
                  <label
                    htmlFor="email"
                    className="block font-bold text-gray-800 text-xl"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-2 block w-full shadow-sm text-gray-700 border border-gray-300 rounded-md p-3 focus:ring-indigo-500 focus:border-indigo-500"
                    defaultValue={user?.email}
                    required
                  />
                </div>

                <div className="my-4">
                  <label
                    htmlFor="phone"
                    className="block font-bold text-gray-800 text-xl"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="mt-2 block w-full shadow-sm text-gray-700 border border-gray-300 rounded-md p-3 focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                </div>

                <div className="my-4">
                  <label
                    htmlFor="textarea"
                    className="block font-bold text-gray-800 text-xl"
                  >
                    Message
                  </label>
                  <textarea
                    id="textarea"
                    name="textarea"
                    className="mt-2 block w-full shadow-sm text-gray-700 border border-gray-300 rounded-md p-3 focus:ring-indigo-500 focus:border-indigo-500"
                    rows="5"
                    required
                  ></textarea>
                </div>

                <div className="text-right">
                  <button
                    type="submit"
                    className="px-6 py-3 bg-rose-500 text-white font-semibold rounded-lg hover:bg-rose-600 transition-all duration-200"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
