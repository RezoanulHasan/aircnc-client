import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import useTitle from '../../../Hooks/useTitle';
import Lottie from 'lottie-react';
import hotel from "../../../assets/hotel.json";
import Swal from 'sweetalert2';

const SignUp = () => {
  useTitle("SignUp");
  const { loading, setLoading, createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const [photoURL, setPhotoURL] = useState('');
  
  const updateUserProfile = async (name, photoURL , phoneNumber) => {
    try {
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photoURL ,
        phoneNumber: phoneNumber, // Assuming you have 'phoneNumber' variable available
      });
    } catch (error) {
      console.error('Error updating user profile:', error);
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const phoneNumber = event.target.phoneNumber.value; // Added phone number
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (password !== confirmPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Passwords do not match',
        text: 'Please make sure the passwords match.',
      });
      return;
    }

    const image = event.target.image.files[0];
    const formData = new FormData();
    formData.append('image', image);

    const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_Image_Upload_token}`;

    try {
      const iresponse = await fetch(url, {
        method: 'POST',
        body: formData,
      });

      if (! iresponse.ok) {
        throw new Error('Image upload failed');
      }

      const imageData = await iresponse.json();
      const  photoURL= imageData.data.display_url;

      setPhotoURL(photoURL);

      const user = {
        name,
        email,
        phoneNumber,
        password,
        photoURL,
      };

      await createUser(email, password);

      await updateUserProfile(name, photoURL , phoneNumber);
    
      const response = await fetch(`${import.meta.env.VITE_API_URL}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Signup successful',
          text: 'You can now login with your credentials.',
        });
        navigate(from, { replace: true });
      } else {
        throw new Error('User registration failed');
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Signup failed',
        text: error.message,
      });
    }
  };

      

  return (
    <>
      <div className='flex lg:flex-row flex-col justify-center items-center'>
        <div className=' '>
          <Lottie className='h-96' animationData={hotel} loop={true} />
        </div>
        <div className='flex justify-center items-center min-h-screen'>
          <div className='flex flex-col max-w-md p-6 sm:p-10 rounded-md border-color: inherit border-solid border-2 hover:border-white hover:bg-black hover:text-white'>
            <div className='mb-8 text-center'>
              <h1 className='my-3 text-4xl font-bold'>Sign Up</h1>
              <p className='text-sm text-gray-400'>Welcome to AirCNC</p>
            </div>
            <form
              onSubmit={handleSubmit}
              noValidate=''
              action=''
              className='space-y-6 ng-untouched ng-pristine ng-valid'
            >
              <div className='space-y-4'>
                <div>
                  <label htmlFor='name' className='block mb-2 text-sm'>
                    Name
                  </label>
                  <input
                    type='text'
                    name='name'
                    id='name'
                    placeholder='Enter Your Name Here'
                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                    data-temp-mail-org='0'
                  />
                </div>
                <div>
                  <label htmlFor='phoneNumber' className='block mb-2 text-sm'>
                    Phone Number
                  </label>
                  <input
                    type='tel'
                    name='phoneNumber'
                    id='phoneNumber'
                    placeholder='Enter Your Phone Number'
                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                    data-temp-mail-org='0'
                  />
                </div>
                <div>
                  <label htmlFor='image' className='block mb-2 text-sm'>
                    Select Image:
                  </label>
                  <input required type='file' id='image' name='image' accept='image/*' />
                </div>
                <div>
                  <label htmlFor='email' className='block mb-2 text-sm'>
                    Email address
                  </label>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    required
                    placeholder='Enter Your Email Here'
                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                    data-temp-mail-org='0'
                  />
                </div>
                <div>
                  <label htmlFor='password' className='block mb-2 text-sm'>
                    Password
                  </label>
                  <input
                    type='password'
                    name='password'
                    id='password'
                    required
                    placeholder='*******'
                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                  />
                </div>
                <div>
                  <label htmlFor='confirmPassword' className='block mb-2 text-sm'>
                    Confirm Password
                  </label>
                  <input
                    type='password'
                    name='confirmPassword'
                    id='confirmPassword'
                    required
                    placeholder='*******'
                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                  />
                </div>
              </div>
              <div>
                <button type='submit' className='bg-rose-500 w-full rounded-md py-3 text-white'>
                  {loading ? 'Signing Up...' : 'Sign Up'}
                </button>
              </div>
            </form>
            <p className='px-6 text-sm text-center text-gray-400'>
              Already have an account?{' '}
              <Link to='/login' className='hover:underline hover:text-rose-500 text-gray-600'>
                Login
              </Link>
              .
            </p>
          </div>
        </div>
        <div className=''>
          <Lottie className='h-96' animationData={hotel} loop={true} />
        </div>
      </div>
    </>
  );
};

export default SignUp;
