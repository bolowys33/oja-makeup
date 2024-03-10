import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import ProductDesc from "./pages/ProductDesc";
import Products from "./pages/Products";
import { Provider } from "react-redux";
import store from "./redux/cartStore";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <>
            <Provider store={store}>
            <div className="">
                <Header />
            </div>
            <ToastContainer />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<ProductDesc />} />
            </Routes>

            <Footer />
            </Provider>
        </>
    );
}

export default App;
