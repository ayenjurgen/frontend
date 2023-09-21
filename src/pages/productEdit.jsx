import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import { useAuth } from "../contexts/AuthContext";

const ProductEdit = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({
    product_name: "",
    quantity: 0,
    rate: 0,
    price: 0,
    active: 0,
    status: 0,
  });
//   const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
//   const { token } = useAuth();

  useEffect(() => {
    const url = `${import.meta.env.VITE_API_URL}/products/${id}`;
    const controller = new AbortController();

    const requestOptions = {
      signal: controller.signal,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`,
      },
    };
    // setLoading(true);
    fetch(url, requestOptions)
    .then((response) => response.json())
    .then((json) => {
      setProduct(json);
      navigate(`/products/${json.product.id}`);
      })
      .catch((err) => console.log(err));

    return () => {
      controller.abort();
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = `${import.meta.env.VITE_API_URL}/products/${id}`;

    const requestOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`,
      },

      body: JSON.stringify({
        product_name: product.product_name,
        quantity: product.quantity,
        rate: product.rate,
        price: product.price,
        active: product.active,
        status: product.status,
      }),
    };

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        navigate(`/products/${json.product.id}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <>
      <h1>Product Edit {id}</h1>
      <form onSubmit={handleSubmit}>
        <p>
          <label>Product Name: </label>
          <input
            type="text"
            name="product_name"
            value={product.product_name}
            onChange={handleChange}
          />
        </p>
        <p>
          <label>Quantity: </label>
          <input
            type="number"
            name="quantity"
            value={product.quantity}
            onChange={handleChange}
          />
        </p>
        {/* <p>
          <label>Rate: </label>
          <input
            type="number"
            name="rate"
            value={product.rate}
            onChange={handleChange}
          />
        </p> */}
        <p>
          <label>Price: </label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
          />
        </p>
        {/* <p>
          <label>Active: </label>
          <input
            type="number"
            name="active"
            value={product.active}
            onChange={handleChange}
          />
        </p> */}
        <p>
        <label>Status: </label>
        <select name="status" value={product.status} onChange={handleChange}>
            <option value={0}>Select Status</option>
            <option value={1}>Available</option>
            <option value={2}>Not Available</option>
        </select>
        </p>

        <input type="submit" value="Update" />
      </form>
    </>
  );
};

export default ProductEdit;
