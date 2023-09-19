import React from 'react';
import ProductList from "./pages/productList";
import ProductView from "./pages/productView";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import AppointmentList from "./pages/appointmentList";
// import PageNotFound from "./pages/notFound";
// import EditProduct from './pages/editProduct';
// import AddProduct from './pages/addproduct';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ProductList />}></Route>
                    <Route path="/products/:product_id" element={<ProductView/>}></Route>

                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;