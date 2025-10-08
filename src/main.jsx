import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

// Import layout and pages
import App from "./App.jsx";
import Home from "./pages/home.jsx";
import AllTheApps from "./pages/alltheapps.jsx";

// Define the router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,                  // Layout wrapper
    errorElement: <h1>404 Not Found!</h1>,
    children: [
      { index: true, element: <Home /> },         // Default / route
      { path: "alltheapps", element: <AllTheApps /> }, // /alltheapps
    ],
  },
]);

// Render the app
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
