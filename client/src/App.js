import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Blog from "./pages/Blog";

function App() {
  return (
    <div className="font-poppins max-w-full justify-center">
      <div>
        <Navbar />
        <Home />
        <Blog />
        <Footer />
      </div>
      {/* <Blog /> */}
    </div>
  );
}

export default App;
