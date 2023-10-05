// rrd imports
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Layout
import MainLayout from "./layout/MainLayout";

// Pages
import Home from "./pages/Home";
import Article from "./pages/Article";
import CreateInput from "./pages/CreateInput";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "createinput",
          element: <CreateInput />,
        },
        {
          path: "article/:id",
          element: <Article />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
