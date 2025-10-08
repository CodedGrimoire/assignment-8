import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import App from "./App.jsx";
import Home from "./pages/home.jsx";
import AllTheApps from "./pages/alltheapps.jsx";
import Installation from "./pages/installation.jsx";
import About from "./pages/about.jsx";
import Spinner from "./components/Spinner.jsx";  // ✅ import spinner

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>404 Not Found!</h1>,
    children: [
      { index: true, element: <Home /> },
      { path: "alltheapps", element: <AllTheApps /> },
      { path: "installation", element: <Installation /> },
      { path: "about/:id", element: <About /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} fallbackElement={<Spinner />} />
  </StrictMode>
);
