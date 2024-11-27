import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Root from "./pages/Root";
import Error from "./components/Error.tsx";
import WebDesign from "./pages/WebDesign.tsx";
import AppDesign from "./pages/AppDesign.tsx";
import GraphicDesign from "./pages/GraphicDesign.tsx";
import Locations from "./pages/Locations.tsx";
import AboutUs from "./pages/AboutUs.tsx";

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
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
