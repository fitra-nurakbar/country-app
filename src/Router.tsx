import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "@/pages/Dashboard";
import Country from "@/pages/Country";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "country/:name",
    element: <Country />,
  }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
