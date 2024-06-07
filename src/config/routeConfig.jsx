import { createBrowserRouter } from 'react-router-dom';
import Home from '../routes/Home.jsx';
import About from '../routes/About.jsx';
import Contact from '../routes/Contact.jsx';
import Services from '../routes/Services.jsx';
import RootLayout from '../routes/RootLayout.jsx';
import ErrorPage from '../error-page.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'about/',
        element: <About />,
      },
      {
        path: 'services/',
        element: <Services />,
      },
      {
        path: 'contact/',
        element: <Contact />,
      },
    ],
  },
]);
