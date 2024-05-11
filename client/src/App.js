import { Provider } from "react-redux";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import store from "./redux/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutComponent />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);

function LayoutComponent() {
  return (
    <Provider store={store}>
      <div className="font-poppins max-w-full justify-center">
        <div>
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      </div>
    </Provider>
  );
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
