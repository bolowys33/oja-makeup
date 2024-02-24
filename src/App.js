import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import ProductDesc from "./pages/ProductDesc";
import Products from "./pages/Products";

function App() {
    return (
        <>
            <div className="">
                <Header />
            </div>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<ProductDesc />} />
            </Routes>

            <Footer />
        </>
    );
}

export default App;
