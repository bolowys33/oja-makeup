import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import ProductDesc from "./pages/ProductDesc";
import Products from "./pages/Products";
import { Provider } from "react-redux";
import store, { persistor } from "./redux/cartStore";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PersistGate } from "redux-persist/integration/react";
import Cart from "./pages/Cart";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SIgnIn";

function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <div className="">
                    <Header />
                </div>
                <ToastContainer
                    style={{
                       top: '60px'
                    }}
                />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/products/:id" element={<ProductDesc />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/register" element={<SignUp />} />
                    <Route path="/login" element={<SignIn />} />
                </Routes>
                <Footer />
            </PersistGate>
        </Provider>
    );
}

export default App;
