import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,Outlet
} from "react-router";

// import Home from '../Home';
import Home from '../Home'
import Nav from '../Nav';
// import Details from '../Details';
import Details from '../Details';


function Layout(){
    return(
        <>
        <Nav/>
        <Outlet />
        </>
    )
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
        {
            path:"/",
        element:<Home />
        },
        {
            path:"details/:id",
            element:<Details />
        }
    ]
  },
]);

function Router() {
  return (
    <div>
         <RouterProvider router={router} />
    </div>
  )
}

export default Router