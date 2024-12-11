import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import Root from "./pages/Root/Root.tsx";
import Error from "./components/Error/Error.tsx";
import WebDesign from "./pages/WebDesign/WebDesign.tsx";
import AppDesign from "./pages/AppDesign/AppDesign.tsx";
import GraphicDesign from "./pages/GraphicDesign/GraphicDesign.tsx";
import Locations from "./pages/Locations/Locations.tsx";
import AboutUs from "./pages/AboutUs/AboutUs.tsx";
import Contact from "./pages/Contact/Contact.tsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <Error/>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/web-design",
          element: <WebDesign/>
        },
        {
          path: "/app-design",
          element: <AppDesign />
        },
        {
          path: "/graphic-design",
          element: <GraphicDesign/>
        },
        {
          path: "/about-us",
          element: <AboutUs />
        },
        {
          path: "/locations",
          element: <Locations />
        },
        {
          path: "/contact",
          element: <Contact/>
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
