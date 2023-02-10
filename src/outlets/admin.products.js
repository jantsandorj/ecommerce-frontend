import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import ProductModal from "../components/add.productModal";

const Products = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const handleShow = () => {
    setShow(!show);
    // fetch("http://localhost:9000/api/products");
  };

  useEffect(() => {
    GetData();
  }, []);
  const GetData = () => {
    fetch("http://localhost:9000/api/products")
      .then((res) => res.json())
      .then((dt) => setData(dt.result));
  };
  // GetData();
  const handleDel = (id) => {
    fetch(`http://localhost:9000/api/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        res.json();
      })
      .then((data) => {
        GetData();
      });
  };

  return (
    <div className="w-100 px-5 py-3">
      <div className="d-flex justify-content-between py-3">
        <h3>Products</h3>
        <Button onClick={handleShow}>Add new product</Button>
      </div>
      <div>
        <ProductModal show={show} setShow={setShow} />
        <div className="table-responsive text-secondary">
          <table className="table table-strip">
            <thead className="border-bottom border-3 text-light">
              <th>No</th>
              <th>Product Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Discount Percent</th>
              <th>Image</th>
              <th>Created User</th>
              <th>Created Date</th>
            </thead>
            <tbody className="text-light">
              {data.map(
                (
                  {
                    id,
                    productName,
                    categoryID,
                    price,
                    thumbImg,
                    discountPercent,
                    createUser,
                    createDate,
                  },
                  index
                ) => {
                  const date = new Date(createDate);

                  console.log(date);
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{productName}</td>
                      <td>{categoryID}</td>
                      <td>{price}$</td>
                      <td>{discountPercent}</td>
                      <td>
                        <img
                          className="proImg"
                          src={thumbImg}
                          style={{ width: "50px" }}
                        />
                      </td>
                      <td>{createUser}</td>
                      <td>{date ? date.toDateString() : ""}</td>
                      <td>
                        <span className="btn btn-warning">Edit</span>
                      </td>
                      <td>
                        <span
                          className="btn btn-danger"
                          onClick={(e) => handleDel(id)}
                        >
                          Delete
                        </span>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Products;
