import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css'

import App from './App.jsx'
import Error from './pages/Error';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Design from './pages/Design';
import AboutMe from './pages/AboutMe';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/Projects',
        element: <Projects />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
      {
        path: '/Design',
        element: <Design />,
      },
      {
        path: '/AboutMe',
        element: <AboutMe />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
