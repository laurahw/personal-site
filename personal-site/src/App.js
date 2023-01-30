
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LandingPage from './Pages/LandingPage';
import About from './Pages/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/about",
    element: <About />,
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
