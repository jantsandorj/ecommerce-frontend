import React from "react";
import "../style/productModal.css";
import { useState, useEffect } from "react";

const ProductModal = (data) => {
  const init = {
    productName: "",
    categoryID: "",
    price: "",
    thumbImg: "",
    images: [],
    discountPercent: "",
    quantity: "",
    desc: "",
    createDate: Date.now(),
    createUser: "",
  };

  const [category, setCategory] = useState([]);
  const [product, setProduct] = useState(init);
  useEffect(() => {
    fetch("http://localhost:9000/api/productCat")
      .then((res) => res.json())
      .then((dt) => {
        setCategory(dt.message);
      });
  }, []);
  function onSave(product) {
    fetch("http://localhost:9000/api/products", {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-type": "application/json",
      },
    });
  }

  return (
    <div className="d-flex row text-secondary">
      <div className="row col-6 gap-3">
        <div className="d-flex flex-column">
          <label>Product Name</label>
          <input
            type={"text"}
            placeholder="Enter product name !!!"
            value={product.productName}
            onChange={(e) => {
              setProduct({ ...product, productName: e.target.value });
            }}
          />
        </div>
        <div className="row">
          <div className="d-flex flex-column col-8">
            <label>Category</label>
            <select
              value={product.categoryID}
              onChange={(e) => {
                setProduct({ ...product, categoryID: e.target.value });
              }}
            >
              <option>Category</option>
              {category.map((e) => {
                return <option value={e.category}>{e.category}</option>;
              })}
            </select>
          </div>
          <div className="d-flex flex-column col-4">
            <label>Price</label>
            <input
              type={"number"}
              value={product.price}
              onChange={(e) => {
                setProduct({ ...product, price: e.target.value });
              }}
            />
          </div>
        </div>
        <div className="d-flex flex-column">
          <label>Brand</label>
          <input type="text" />
        </div>
        <div className="d-flex flex-column">
          <label>Description</label>
          <textarea
            value={product.desc}
            onChange={(e) => {
              setProduct({ ...product, desc: e.target.value });
            }}
            cols="4"
            rows="5"
          ></textarea>
        </div>
      </div>
      <div className="row col-6 modalRight">
        <div className="d-flex flex-column gap-3">
          <div className="d-flex flex-column">
            <label>Thumb image</label>
            <input
              type="file"
              className="fileInput"
              value={product.thumbImg}
              onChange={(e) => {
                setProduct({ ...product, thumbImg: e.target.value });
              }}
            />
          </div>
          <div className="d-flex flex-column">
            <label>Slide Images</label>
            <input
              multiple
              type="file"
              className="fileInput"
              value={product.images}
              onChange={(e) => {
                setProduct({ ...product, images: e.target.value });
              }}
            />
          </div>
          <div className="d-flex flex-column">
            <label>Created User</label>
            <input type="text" />
          </div>
          <button
            className="btn btn-primary"
            onClick={() => {
              // onClose();
              onSave(product);
            }}
          >
            Add product
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
