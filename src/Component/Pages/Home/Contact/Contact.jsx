import Swal from "sweetalert2";
import Lottie from 'lottie-react';
import contact from'../../../../assets/contact.json'
import { Fade } from "react-awesome-reveal";
import {  Wave } from 'react-animated-text';

const Contact = () => {


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

    fetch('https://lawyer-hiring.vercel.app/contacts', {
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




    return (

<div className='' >
  
<div  style={{textShadow: '0 0 3px #FF0000,0 0 4px #FF0000 '}}  className='text-center font-bold text-white font-mono mt-10 text-2xl'>
    <Wave    text="CONTACT-US " effect="stretch" effectChange={2} />  
  </div>



<div className="inset-0  opacity-100">
  

<div className='  flex justify-between  flex-col lg:flex-row   '    >
<div  className=' lg:w-1/2 w-full   mt-14 '>
<Fade direction="down" >  
<Lottie  className=''      animationData={contact} loop={true} />
</Fade>
</div>
  
<div className=" lg:w-1/2 lg:m-3  w-full  flex items-center justify-center">
<div className="max-w-full w-full hadow-lg rounded-lg p-6">
       



        <Fade direction="down" > 
             <form onSubmit={handleSubmit} className="">
      <div className="my-4">
        <label htmlFor="name" className="font-bold text-white text-2xl">Name</label>
        <input type="text" id="name" name="name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"   required />
      </div>
      <div className="my-4">
       
        <label htmlFor="email" className="font-bold text-white text-2xl">Email</label>
        <input   type="email" id="email" name="email"  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" required/>
      </div>
      <div className="my-4">
        <label htmlFor="phone" className="font-bold text-white text-2xl">Phone</label>
        <input type="tel" id="phone" name="phone" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" required />
      </div>
      <div className="my-4">
        <label htmlFor="textarea" className="font-bold text-white text-xl">Message</label>
        <textarea id="textarea" name="textarea"  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" rows="5"required ></textarea>
      </div>
      <div className="card-actions justify-end">
      <button type="submit" className="inline-flex items-center px-4 py-2  btn btn-active btn-secondar   hover:btn-warning">Submit</button></div>
    </form>   </Fade>

    </div>  </div>   
    </div>   
 

        </div>
        </div>

    );
};

export default Contact;