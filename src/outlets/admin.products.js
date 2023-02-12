import React, { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import ProductModal from "../components/add.productModal";
import { searchContext } from "../components/context";

const Products = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [addEdit, setAddEdit] = useState(false);
  const [editid, setEditid] = useState("");
  const search = useContext(searchContext);

  const handleShow = () => {
    setShow(!show);
    setAddEdit(false);
  };

  useEffect(() => {
    GetData();
  }, [show, search]);
  const GetData = () => {
    fetch("http://localhost:9000/api/products")
      .then((res) => res.json())
      .then((dt) => {
        if (search == "") {
          setData(dt.result);
        } else {
          const searchArray = dt.result.filter((e) => {
            if (e.productName.search(search) > -1) {
              return e;
            } else {
              console.log("not found");
            }
          });
          console.log(searchArray);
          setData(searchArray);
        }
      });
  };
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
  const handleEdit = (id) => {
    setAddEdit(true);
    setShow(true);
    setEditid(id);
  };
  return (
    <div className="w-100 px-5 py-3">
      <div className="d-flex justify-content-between py-3">
        <h3>Products</h3>
        <Button onClick={handleShow}>Add new product</Button>
      </div>
      <div>
        <ProductModal
          show={show}
          setShow={setShow}
          addEdit={addEdit}
          setAddEdit={setAddEdit}
          editid={editid}
          Getdata={GetData}
        />
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
                        <span
                          className="btn btn-warning"
                          onClick={(e) => handleEdit(id)}
                        >
                          Edit
                        </span>
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
