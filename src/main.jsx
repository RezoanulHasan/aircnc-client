import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import { QueryClient, QueryClientProvider } from 'react-query'
import "./index.css";
import { Toaster } from 'react-hot-toast'
import Error from './Component/Shared/Error/Error.jsx';
import Home from './Component/Pages/Home/Home.jsx';
import SingleRoom from './Component/Pages/Rooms/SingleRoom.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import Login from './Component/Pages/Login/Login.jsx';
import SignUp from './Component/Pages/SingUp/SingUp.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';
import DashboardLayout from './Component/Dashbord/DashboardLayout.jsx';
import Alluser from './Component/Dashbord/Admin/Alluser';


// Create a client
const queryClient = new QueryClient()
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<Error></Error>,
    children: [
      {
        path: "/",
        element:<Home></Home>,
      },
        {
        path: "/room/:id",
        element:<PrivateRoute><SingleRoom></SingleRoom></PrivateRoute>,
        loader: ({params}) =>fetch(`http://localhost:5000/rooms/${params.id}`),
      },
  

  {
     path: '/login', 
     element:<Login></Login>,
     },
  { 
    path: '/signUp', 
    element: <SignUp></SignUp>,
   },
  ],
},


{
  path: '/dashboard',
  element: (
 
   <DashboardLayout></DashboardLayout>
  ),
 errorElement:<Error></Error>,
children: [

 //admin
 {
  path: '/dashboard/alluser', 
  element:  <Alluser></Alluser> ,

},





  ],
},





]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthProvider>

    <QueryClientProvider client={queryClient}>
    <Toaster/>
    <RouterProvider router={router} />

    </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
