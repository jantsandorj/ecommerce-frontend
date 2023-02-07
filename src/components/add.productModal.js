import React from "react";
import "../style/productModal.css";
import { useState, useEffect } from "react";

const ProductModal = (data) => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9000/api/productCat")
      .then((res) => res.json())
      .then((dt) => {
        console.log(dt);
        setCategory(dt.message);
        console.log(category);
      });
  }, []);

  return (
    <div className="d-flex row text-secondary">
      <div className="row col-6 gap-3">
        <div className="d-flex flex-column">
          <label>Product Name</label>
          <input className="" />
        </div>
        <div className="row">
          <div className="d-flex flex-column col-8">
            <label>Category</label>
            <select>
              <option>Category</option>
              {category.map((e) => {
                return <option>{e.category}</option>;
              })}
            </select>
          </div>
          <div className="d-flex flex-column col-4">
            <label>Gender</label>
            <select>
              <option>Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
        </div>
        <div className="d-flex flex-column">
          <label>Brand</label>
          <input type="text" />
        </div>
        <div className="d-flex flex-column">
          <label>Description</label>
          <textarea cols="4" rows="5"></textarea>
        </div>
      </div>
      <div className="row col-6 modalRight">
        <div className="d-flex flex-column gap-3">
          <div className="d-flex flex-column">
            <label>Product Images</label>
            <input type="file" className="fileInput" />
          </div>
          <div className="d-flex flex-column">
            <label>Add size</label>
            <div className="d-flex gap-3">
              <div className="d-flex align-items-center gap-2">
                <input type="checkbox" id="XXS" />
                <label for="XXS">XXS</label>
              </div>
              <div className="d-flex align-items-center gap-2">
                <input type="checkbox" id="XS" />
                <label for="XS">XS</label>
              </div>
              <div className="d-flex align-items-center gap-2">
                <input type="checkbox" id="S" />
                <label for="S">S</label>
              </div>
              <div className="d-flex align-items-center gap-2">
                <input type="checkbox" id="M" />
                <label for="M">M</label>
              </div>
              <div className="d-flex align-items-center gap-2">
                <input type="checkbox" id="L" />
                <label for="L">L</label>
              </div>
              <div className="d-flex align-items-center gap-2">
                <input type="checkbox" id="XL" />
                <label for="XL">XL</label>
              </div>
              <div className="d-flex align-items-center gap-2">
                <input type="checkbox" id="XXL" />
                <label for="XXL">XXL</label>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column">
            <label>Product Date</label>
            <input type="date" />
          </div>
          <button className="btn btn-primary">Add product</button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
