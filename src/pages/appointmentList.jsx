import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AppointmentList = () => {
    const [Appointment, setAppointment] = useState([]);

useEffect(() => {
    const url = `${import.meta.env.VITE_API_URL}/appointmentList`;
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
        setProducts(json);
    })
    .catch((err) => console.log(err));

    return () => {
        controller.abort();
    };


}, []);
    return (
        <>
        <h2>Appointment Schedule</h2>
        <div className="table-responsive">
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>Photo</th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Status</th>
                    <th>Options</th>
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
                        <td>
                            <Link to={`product/${product.id}`}>View</Link>
                        </td>
                    </tr>
                    );
                })}
            </tbody> */}
            </table>
            </div>

        </>
    )

};

export default AppointmentList;