import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


//Page imports
import Dashboard from "./pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,

  },
]);

function App() {

  return <div className="App">
    <RouterProvider router={router} />

  </div>;
}

export default App
