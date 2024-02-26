import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider, BrowserRouter} from "react-router-dom";
// import NavBar from './layouts/NavBar.jsx';
// import ErrorPage from "./components/error.jsx";
import App from './App.jsx'
import './styles/custom.scss'
// import 'bootstrap/dist/css/bootstrap.min.css';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <NavBar />,
//     errorElement: <ErrorPage />,
//   },{
//     path: "About",
//     element: <About />,
//   }
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>,
)
