import { Link, useLocation, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { FcGoogle } from 'react-icons/fc'
import { useContext, useRef } from 'react'
import { TbFidgetSpinner } from 'react-icons/tb'
import { AuthContext } from '../../../providers/AuthProvider'
import useTitle from '../../../Hooks/useTitle'
import Lottie from 'lottie-react';
import hotel from "../../../assets/hotel.json"
import Swal from 'sweetalert2';
const Login = () => {
  useTitle ("Login ")
  const { loading, setLoading, signIn, signInWithGoogle, resetPassword } =
    useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const emailRef = useRef()
    // Handle submit

  // Handle submit
  const handleSubmit = async event => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

 try {
      const result = await signIn(email, password);
      console.log(result.user);
      navigate(from, { replace: true });

      // Show success alert using sweetalert2
      Swal.fire({
        icon: 'success',
        title: 'Sign In Successful',
        text: 'Welcome!',
        position: 'top-center',
        showConfirmButton: false,
        timer: 1500 // Automatically close after 1.5 seconds
      });

    } catch (err) {
      setLoading(false);
      console.log(err.message);
      toast.error(err.message);

      // Show error alert using sweetalert2
      Swal.fire({
        icon: 'error',
        title: 'Sign In Failed',
        text: 'An error occurred while signing in.',
        position: 'top-center',
        showConfirmButton: false,
        timer: 1500 // Automatically close after 1.5 seconds
      });
    }
  
  }


  
    // Handle google signin
  


    //...
    
    // Handle google signin
    const handleGoogleSignIn = () => {
      signInWithGoogle()
        .then(result => {
          const loggedUser = result.user;
          const saveUser = { name: loggedUser.displayName, email: loggedUser.email ,photoURL: loggedUser.photoURL };
          fetch(`${import.meta.env.VITE_API_URL}/users`,  {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(saveUser)
          })
            .then(res => res.json())
            .then(() => {
              navigate(from, { replace: true });
            });
    
          // Show success alert using sweetalert2
          Swal.fire({
            icon: 'success',
            title: 'Sign In Successful',
            text: 'Welcome!',
            position: 'top-center',
            showConfirmButton: false,
            timer: 1500 // Automatically close after 1.5 seconds
          });
        })
        .catch(error => {
          console.log(error);
          setLoading(false)
          // Show error alert using sweetalert2
          Swal.fire({
            icon: 'error',
            title: 'Sign In Failed',
            text: 'An error occurred while signing in.',
            position: 'top-center',
            showConfirmButton: false,
            timer: 1500 // Automatically close after 1.5 seconds
          });
        });
    };
    


    //   handle password reset
    const handleReset = () => {
      const email = emailRef.current.value
  
      resetPassword(email)
        .then(() => {
          toast.success('Please check your email for reset link')
          setLoading(false)
        })
        .catch(err => {
          setLoading(false)
          console.log(err.message)
          toast.error(err.message)
        })
    }

 
  return (
    <>

    <div className='flex lg:flex-row flex-col  justify-center items-center'>

<div className=' '>
<Lottie  className='h-96  '      animationData={hotel} loop={true} />

</div>


    <div className='flex justify-center items-center min-h-screen'>
      <div className='flex flex-col max-w-md p-6 sm:p-10  rounded-md border-color: inherit  border-solid border-2  border-white  bg-black  text-white      '>
        <div className='mb-8 text-center'>
          <h1 className='my-3 text-4xl  text-rose-500 font-bold'>Log In</h1>
          <p className='text-sm text-gray-400'>
            Sign in to access your account
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          noValidate=''
          action=''
          className='space-y-6 ng-untouched ng-pristine ng-valid'
        >
          <div className='space-y-4'>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Email address
              </label>
              <input
                ref={emailRef}
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
              <div className='flex justify-between'>
                <label htmlFor='password' className='text-sm mb-2'>
                  Password
                </label>
              </div>
              <input
                type='password'
                name='password'
                id='password'
                required
                placeholder='*******'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
              />
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='bg-rose-500 w-full rounded-md py-3 text-white'
            >
              {loading ? (
                <TbFidgetSpinner className='m-auto animate-spin' size={24} />
              ) : (
                'Continue'
              )}
            </button>
          </div>
        </form>
        <div className='space-y-1'>
          <button
            onClick={handleReset}
            className='text-xs hover:underline hover:text-rose-500 text-gray-400'
          >
            Forgot password?
          </button>
        </div>
        <div className='flex items-center pt-4 space-x-1'>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          <p className='px-3 text-sm dark:text-gray-400'>
            Login with social accounts
          </p>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
        </div>
        <div
          onClick={handleGoogleSignIn}
          className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'
        >
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div>
        <p className='px-6 text-sm text-center text-gray-400'>
          Don't have an account yet?{' '}
          <Link
            to='/signup'
            className='hover:underline text-rose-500'
          >
            Sign up
          </Link>
          .
        </p>
      </div>
    </div>



    <div className=''>
<Lottie  className='h-96  '      animationData={hotel} loop={true} />

</div>


    </div>
    </>  
  )
}

export default Login;