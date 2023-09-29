import Swal from "sweetalert2";
import Lottie from 'lottie-react';
import contact from'../../../../assets/contact.json'
import { useContext, useEffect } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the CSS file
import { Fade } from "react-awesome-reveal";
const Contact = () => {


  const { user } = useContext(AuthContext) 
    function handleSubmit(event) {
      event.preventDefault();
      // Handle form submission here

      const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const textarea = form.textarea.value;
    const contact  = { name, email, textarea , phone };
    console.log(contact );



    fetch(`${import.meta.env.VITE_API_URL}/contacts`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
      
        },
    
        body:JSON.stringify(contact)
      })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if (data.insertedId) {
              Swal.fire({
                title: 'Success!',
                text: ' Message Send Successfully',
                icon: 'success',
                confirmButtonText: 'CLOSE'
            })
        }  form.reset();
    })
          
    }

    useEffect(() => {
      AOS.init();
    }, []);
    useEffect(() => {
      AOS.refresh();
    });
    


    return (

<div className='' >
<Fade direction="down"> 

<SectionTitle
        subHeading="Get in Touch with Us"
        heading="Contact Us"
      />


<div className="inset-0  opacity-100">
  

<div className='  flex justify-between  flex-col lg:flex-row   '    >
<div  className=' lg:w-1/2 w-full   mt-10 '>


<div data-aos="zoom-in"></div>
<Lottie
  className=""
  animationData={contact}
  loop={true}
 data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" 
/>



</div>
  


<div className=" lg:w-1/2 lg:m-3  w-full  flex items-center justify-center">
<div className="max-w-full w-full hadow-lg rounded-lg p-6">
       



<div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
  <form onSubmit={handleSubmit} className="bg-rose-500 p-6 rounded-lg shadow-lg">
    <div className="my-4">
      <label htmlFor="name" className="font-bold text-white text-2xl">Name</label>
      <input type="text" id="name" name="name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2" required defaultValue={user?.displayName} />
    </div>
    <div className="my-4">
      <label htmlFor="email" className="font-bold text-white text-2xl">Email</label>
      <input type="email" id="email" name="email" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2" defaultValue={user?.email} required />
    </div>
    <div className="my-4">
      <label htmlFor="phone" className="font-bold text-white text-2xl">Phone</label>
      <input type="tel" id="phone" name="phone" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2" required />
    </div>
    <div className="my-4">
      <label htmlFor="textarea" className="font-bold text-white text-xl">Message</label>
      <textarea id="textarea" name="textarea" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2" rows="5" required></textarea>
    </div>
    <div className="card-actions justify-end">
      <button type="submit" className="inline-flex items-center px-4 py-2 btn btn-active rounded-md">Submit</button>
    </div>
  </form>
</div>
 






    </div>  </div>   
    </div>   
 

        </div>
        </Fade> 
        </div>

    );
};

export default Contact;