import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";


const ProductView = () => {
    const { product_id } = useParams();
    const [product, setProduct] = useState({
        product_name: "",
        quantity: "",
        rate: "",
        price: "",
        active: "",
        status: "",
    });

    useEffect(() => {
        const url = `${import.meta.env.VITE_API_URL}/products`;
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
              <h2>Product View {product_id}</h2>

                
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
                  <p>
                    <label>
                      Rate <strong>{product.rate}</strong>
                    </label>
                  </p>
                  <p>
                    <label>
                      Price <strong>{product.price}</strong>
                    </label>
                  </p>
                  <p>
                    <label>
                      Active <strong>{product.active}</strong>
                    </label>
                  </p>
                  <p>
                    <label>
                      Status <strong>{product.status}</strong>
                    </label>
                  </p>

                  <p>
                        <Link to={"/"}>Back to List</Link>
                    </p>
                  </>
    )

};

export default ProductView;