import React from 'react';
import ProductList from "./pages/productList";
import ProductView from "./pages/productView";
import ProductCreate from "./pages/productCreate";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductEdit from './pages/productEdit';


function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ProductList />}></Route>
                    <Route path="/products/:id" element={<ProductView/>}></Route>
                    <Route path="/products/create" element={<ProductCreate />}></Route>
                    <Route path="/products/edit/:id" element={<ProductEdit />}></Route>

                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;