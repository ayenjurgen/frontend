import { useState } from "react";
import { Link } from "react-router-dom";

const addProduct = () => {
const [product, setProduct] = useState({
    productImage:"",
    productName:"",
    quantity: 0,
    status:"",



});



const handleSubmit =() => {
    alert("Submit");
}
        
    return (
        <>
        <h1>Add Product</h1>
        <form onSubmit={handleSumbit}>


        <input type="submit" />
        </form>
        
        </>
    );
};

export default addProduct;