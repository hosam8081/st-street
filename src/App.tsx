import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Alerts from "./pages/alerts/alerts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Alerts />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
