import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import App from "./App.jsx";
import Home from "./pages/home.jsx";
import AllTheApps from "./pages/AllTheApps.jsx";

import Installation from "./pages/installation.jsx";
import About from "./pages/about.jsx";
import Spinner from "./components/Spinner.jsx";  
import Error404 from "./pages/Error404.jsx";
import AppNotFound from "./pages/AppNotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />,   
    children: [
      { index: true, element: <Home /> },
      { path: "alltheapps", element: <AllTheApps  /> },
      { path: "installation", element: <Installation /> },
      { path: "about/:id", element: <About /> },
      { path: "app-not-found", element: <AppNotFound /> },  
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} fallbackElement={<Spinner />} />
  </StrictMode>
);
