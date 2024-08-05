import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import BallooningPage from "./pages/BallooningPage.jsx";
import ReportPage from "./pages/ReportPage.jsx";
import SpcPage from "./pages/SpcPage.jsx";
import InspectionPage from "./pages/InspectionPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/ballooning",
    element: <BallooningPage />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/ballooning/:balloonId",
        element: <BallooningPage />,
        errorElement: <NotFoundPage />,
      },
    ],
  },
  {
    path: "/inspection",
    element: <InspectionPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/spc",
    element: <SpcPage />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/report",
    element: <ReportPage />,
    errorElement: <div>404 Not Found</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={Router} />

    {/* <App /> */}
  </React.StrictMode>
);
