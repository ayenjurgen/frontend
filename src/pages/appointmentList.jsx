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

        </>
    )

};

export default AppointmentList;