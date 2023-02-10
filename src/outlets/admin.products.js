import React, { useState } from "react";
import { Button } from "react-bootstrap";
import ProductModal from "../components/add.productModal";

const Products = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
    // fetch("http://localhost:9000/api/products");
  };
  return (
    <div className="w-100 px-5 py-3">
      <div className="d-flex justify-content-between py-3">
        <h3>Products</h3>
        <Button onClick={handleShow}>Add new product</Button>
      </div>
      <div>
        <ProductModal show={show} setShow={setShow} />
        <div className="table-responsive"></div>
      </div>
    </div>
  );
};

export default Products;
