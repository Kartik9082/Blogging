import { Provider } from "react-redux";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import { Toaster } from "react-hot-toast";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import store from "./redux/store";
import Profile from "./pages/Profile";
import CreateBlog from "./components/CreateBlog";

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
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/create",
        element: <CreateBlog />,
      },
    ],
  },
]);

function LayoutComponent() {
  return (
    <Provider store={store}>
      <div className="font-poppins max-w-full justify-center">
        <div className=" min-h-screen">
          <Navbar />
          <Outlet />
          <Footer />
          <Toaster position="top-right" />
        </div>
      </div>
    </Provider>
  );
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
