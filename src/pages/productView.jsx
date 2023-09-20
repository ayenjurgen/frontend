import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const ProductView = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({
        product_name: "",
        quantity: "",
        rate: "",
        price: "",
        active: "",
        status: "",
    });

    useEffect(() => {
        const url = `${import.meta.env.VITE_API_URL}/products/${id}`; // Use the specific product ID in the URL
        const controller = new AbortController();

        const requestOptions = {
            signal: controller.signal,
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        };

        fetch(url, requestOptions)
        .then((response) => response.json())
        .then((json) => {
            setProduct(json);
        })
        .catch((err) => console.error(err));

        return () => {
            controller.abort();
        };
    }, [id]); // Make the effect dependent on the 'id' parameter

    return (
        <>
            <h2>Product View {id}</h2>
            <p>
                <label>
                    Product Name <strong>{product.product_name}</strong>
                </label>
            </p>
            <p>
                <label>
                    Quantity <strong>{product.quantity}</strong>
                </label>
            </p>
            {/* <p>
                <label>
                    Rate <strong>{product.rate}</strong>
                </label>
            </p> */}
            <p>
                <label>
                    Price <strong>{product.price}</strong>
                </label>
            </p>
            {/* <p>
                <label>
                    Active <strong>{product.active}</strong>
                </label>
            </p> */}
            <p>
                <label>
                    Status <strong>{product.status}</strong>
                </label>
            </p>
            <p>
                <Link to={"/"}>Back to List</Link>
            </p>
        </>
    );
};

export default ProductView;
