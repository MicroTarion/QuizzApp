import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import Quiz from "./Components/quiz/Quiz";
import About from "./Components/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
    children: [
      {
        path: "quiz",
        // element: <Quizz/>,
        element: <Quiz />,
      },
      {
        path: "leaderboard",
        // element: <Leaderboard/>,
        element: <>Page du leaderboard</>,
      },
      {
        path: "about",
        // element: <about/>,
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
