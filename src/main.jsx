import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navigation from './components/Navigation/Navigation';
import Quiz from './components/Quiz/Quiz';


const router = createBrowserRouter([
  {
    path: "/home",
    element: <Navigation/>,
    errorElement: <>Erreur WithNavbar</>,
  },
  {
    path: "/quiz",
    element: <Quiz/>,
  },
  {
    path: "/leaderboard",
    element: <>page du leaderboard</>,
  },
  {
    path: "/about",
    element: <></>,
  },
  {
    path: "/withNavbar/",
    element: <Navigation/>,
    children: [
      {
        path: "quiz",
        // element: <Quizz/>,
        element: <Quiz/>,
      },
      {
        path: "leaderboard",
        // element: <Leaderboard/>,
        element: <>Page du leaderboard</>,
      },
      {
        path: "about",
        // element: <about/>,
        element: <>Page about</>,
      }
    ]
  }
]);



  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  )


