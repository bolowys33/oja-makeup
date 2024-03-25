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
import ForgotPassword from "./pages/ForgotPassword";
import Protected from "./HOC/Protected";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";
import Orders from "./pages/Orders";
import OrderDetails from "./pages/OrderDetails";

function App() {

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <div className="">
                    <Header />
                </div>
                <ToastContainer
                    style={{
                        top: "60px",
                    }}
                />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/products/:id" element={<ProductDesc />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/register" element={<SignUp />} />
                    <Route path="/login" element={<SignIn />} />
                    <Route path="/success" element={<Success />} />
                    <Route path="/failed" element={<Cancel />} />
                    <Route
                        path="/forgot-password"
                        element={<ForgotPassword />}
                    />
                    <Route
                        path="/orders"
                        element={
                            <Protected>
                                <Orders />
                            </Protected>
                        }
                    />
                    <Route
                        path="/orders/:id"
                        element={
                            <Protected>
                                <OrderDetails />
                            </Protected>
                        }
                    />
                </Routes>
                <Footer />
            </PersistGate>
        </Provider>
    );
}

export default App;
