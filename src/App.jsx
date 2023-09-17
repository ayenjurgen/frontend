import React from 'react';
import ProductList from "./pages/productList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductShow from "./pages/productShow";
import AppointmentList from "./pages/appointmentList";
// import PageNotFound from "./pages/notFound";
import EditProduct from './pages/editProduct';
import AddProduct from './pages/addproduct';
import ProductCategory from './pages/productCategory';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/productList" element={<ProductList />}></Route>
                    <Route path="/productShow" element={<ProductShow />}></Route>
                    <Route path="/appointmentList" element={<AppointmentList />}></Route>
                    <Route path="/addproduct" element={<AddProduct/>}></Route>
                    <Route path="/editProduct" element={<EditProduct />}></Route>
                    <Route path="/productCategory" element={<ProductCategory />}></Route>
                    {/* <Route path="/*" element={<PageNotFound />}></Route> */}
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;