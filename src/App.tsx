import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Products from "../components/Products";
import Faq from "../components/FAQ";
import Info from "../components/Info";
function App() {
  return (
    <div
      className="min-h-screen flex flex-col justify-between inter "
      style={{
        background: "linear-gradient(120deg, #f4f7fb 70%, #e4dfd4 100%)",
      }}
    >
      <Navbar />

      <Hero />

      <Products />

      <Info />

      <Faq />

      <Footer />
    </div>
  );
}

export default App;
