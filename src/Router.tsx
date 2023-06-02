import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "@/pages/Home";
import Country from "@/pages/Country";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "country/:name",
    element: <Country />,
  }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
