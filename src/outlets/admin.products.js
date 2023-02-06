import React from "react";
import { Button } from "react-bootstrap";
import ProductModal from "../components/add.productModal";

const Products = () => {
  const handleAdd = () => {};
  return (
    <div className="w-100 px-5 py-3">
      <div className="d-flex justify-content-between py-3">
        <h3>Products</h3>
        <Button onClick={handleAdd}>Add new product</Button>
      </div>
      <div>
        <ProductModal />
      </div>
    </div>
  );
};

export default Products;
