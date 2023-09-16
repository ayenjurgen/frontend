import ProductList from "./pages/productList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductShow from "./pages/productShow";
import AppointmentList from "./pages/appointmentList";
import AddProduct from "./pages/addproduct";


function App() {
    return (
        <>
        {/* <AddProduct/> */}
        {/* <ProductList />
        */}
    <BrowserRouter>
        <Routes>
            <Route path="/productList" element={<ProductList />}></Route>
            <Route path="/productShow" element={<ProductShow />}></Route>
            <Route path="/appointmentList" element={<AppointmentList />}></Route>
            <Route path="/addproduct" element={<AddProduct />}></Route>
        </Routes>
    </BrowserRouter>









        </>
    );
}

export default App;