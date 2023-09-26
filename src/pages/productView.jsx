import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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

    const navigate = useNavigate();

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
    }, [id]);
    const handleDelete = () => {
        const url = `${import.meta.env.VITE_API_URL}/products/${id}`;

        if (window.confirm("Are you sure you want to Delete this Employee?")) {
            const requestOptions = {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    //   Authorization: `Bearer ${token}`,

                },
                body: JSON.stringify({
                    id: id,
                })
            };

            fetch(url, requestOptions)
                .then(() => {
                    navigate("/");
                })
                .catch((error) => console.log(error));
        }
    };

    return (
        <>
            <header>
                <div className="container-fluid">
                    <div className="navb-logo">
                        <img src="../../../public/imported/vendors/images/logo-icon.png" alt="hi" />
                        <h3>BlueSky</h3>
                    </div>
                    {/* <div className="navb-items">
                        <ul className="main-nav">
                            <li className="item">
                                <a href="login.php">LOGOUT</a>
                            </li>
                        </ul>
                    </div> */}
                    {/* Button trigger modal */}
                    {/* <div className="mobile-toggler">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#navbModal">
                            <i className="fa-solid fa-bars-staggered" />
                        </a>
                    </div> */}
                    {/* Modal */}
                    <div className="modal fade" id="navbModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                        <i class="icon-copy bi bi-x-circle"></i>
                                    </button>
                                </div>
                                <div className="modal-middle">
                                    <img src="../../../public/imported/vendors/images/logo-icon.png" alt="hi" />
                                    <h3>BlueSky</h3>
                                </div>
                                <div className="modal-body">
                                    <ul>
                                        <li id="dashboard">
                                            <a href="index.php">
                                                <span class="micon bi bi-house"></span>
                                                <span className="name">HOME</span>
                                            </a>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li id="dashboard">
                                            <a href="login.php">
                                                <span class="micon bi bi-arrow-bar-left"></span>
                                                <span className="name">LOGOUT</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="wrap-div">
                <div className="xs-pd-20-10 pd-ltr-20">
                    <div class="title pb-20">
                        <h2 class="h3 mb-0">View <span style={{fontWeight: 700, fontSize: 16, textTransform: "capitalize"}}>{id}</span></h2>
                    </div>

                    <div className="card card-box" id="bastaCard">
                        <div className="card-body">
                            <div className="form-group row">
                                <label className="col-sm-12 col-md-4 col-form-label">Product Name : </label>
                                <label className="col-sm-12 col-md-8 col-form-label" style={{fontWeight: 700, fontSize: 16, textTransform: "capitalize"}}>{product.product_name}</label>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-12 col-md-4 col-form-label">Quantity : </label>
                                <label className="col-sm-12 col-md-8 col-form-label" style={{fontWeight: 700, fontSize: 16, textTransform: "capitalize"}}>{product.quantity}</label>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-12 col-md-4 col-form-label">Price : </label>
                                <label className="col-sm-12 col-md-8 col-form-label" style={{fontWeight: 700, fontSize: 16, textTransform: "capitalize"}}>{product.price}</label>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-12 col-md-4 col-form-label">Status : </label>
                                <label className="col-sm-12 col-md-8 col-form-label" style={{fontWeight: 700, fontSize: 16, textTransform: "capitalize"}}>{product.status == 1 ? "Available" : "Unavailable"}</label>
                            </div>
                        </div>
                        <div className="card-body" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <Link to={"/"}>
                                <button type="button" className="btn btn-outline-primary">
                                    Back to List
                                </button>
                            </Link>
                            <Link onClick={handleDelete}>
                                <button type="button" className="btn btn-danger">
                                    Delete
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductView;
