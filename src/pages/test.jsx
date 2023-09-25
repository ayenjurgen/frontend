<>


<>
<h1>Product Create</h1>
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

  <input type="submit" value="Save" />
</form>
</>
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
        Status <strong>{product.status == 1 ? "available" : "Not available"}</strong>
      </label>
    </p>
    <p>
      <Link to={"/"}>Back to List</Link>
      <Link onClick={handleDelete}>Delete</Link>
    </p>
  </>
  {/* js */}
</>




