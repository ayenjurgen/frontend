import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductShow = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({
        productImage:"",
        productName:"",
        quantity: 0,
        status:"",
    });

    useEffect ( () => {
        const url = `${import.meta.env.VITE_API_URL}/products/${id}`;
    const controller = new AbortController();

    const requestOPtions = {
        signal: controller.signal,
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };
    fetch(url, requestOPtions)
    .then((response) => response.json())
    .then((json) => {
        setProduct(json);
    })
    .catch((err) => console.log(err));

    return () => {
        controller.abort();
    };


}, []);

return (
    <>
    <h2>Product</h2>
    <div className="table-responsive">
        <table className="table table-striped">
            <thead>
            <tr>
                <th>Photo</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Status</th>
            </tr>
            </thead>
        {/* <tbody>
            {products.map((products) => {
                return (
                <tr key={products.id}>
                    <td>{products.image}</td>

                    <td>{products.product_name}</td>
                    <td>{products.quantity}</td>
                    <td>{products.status}</td>
                
                </tr>
                );
            })}
        </tbody> */}
        </table>
        </div>

    </>
)

};

export default ProductShow;