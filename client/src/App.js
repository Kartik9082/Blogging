import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="font-poppins max-w-full justify-center">
      <div>
        <Navbar />
        <Home />
        <Footer />
      </div>
      {/* <Blog /> */}
    </div>
  );
}

export default App;
