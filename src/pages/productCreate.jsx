import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useAuth } from "../contexts/AuthContext";

const ProductCreate = () => {
  const [product, setProduct] = useState({
    product_name: "",
    quantity: 0,
    rate: 0,
    price: 0,
    active: 0,
    status: 0,
  });
  //   const { token } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = `${import.meta.env.VITE_API_URL}/products`;

    const requestOptions = {
      method: "POST",
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

    console.log(product)

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        navigate(`/products/${json.product.id}`);
      })
      .catch((err) => {
        console.error(err);
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
      <header>
        <div className="container-fluid">
          <div className="navb-logo">
            <img src="../../../public/imported/vendors/images/logo-icon.png" alt="hi" />
            <h3>Product Inventory</h3>
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
                  <h3>Product Inventory</h3>
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
            <h2 class="h3 mb-0">Create Product</h2>
          </div>

          <div className="card-box pb-10" style={{ backgroundColor: "none", boxShadow: "none"}}>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col">
                  <div className="pd-20 card-box mb-30">
                    <section>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Product Name :</label>
                            <input type="text" name="product_name" value={product.product_name} onChange={handleChange} className="form-control" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Quantity :</label>
                            <input type="number" name="quantity" value={product.quantity} onChange={handleChange} className="form-control" />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Price :</label>
                            <input type="number" name="price" value={product.price} onChange={handleChange} className="form-control" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Status :</label>
                            <select name="status" value={product.status} onChange={handleChange} className="custom-select form-control">
                              <option value={0}>Select Status</option>
                              <option value={1}>Available</option>
                              <option value={2}>Unavailable</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCreate;
