import React from "react";
import "../style/productModal.css";
import { useState, useEffect } from "react";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { CloudinaryImage } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import axios, { Axios } from "axios";

const ProductModal = ({ show, setShow }) => {
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
  const onClose = () => {
    setShow(false);
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
    setProduct(init);
  }
  const uploadImage = async (files) => {
    console.log(files);
    if (files.length == 1) {
      const formData = new FormData();
      formData.append("file", files[0]);
      formData.append("upload_preset", "zjiweql4");
      axios
        .post("https://api.cloudinary.com/v1_1/duo1znrio/upload", formData)
        .then((res) => {
          console.log(res.data.secure_url);
          setProduct({ ...product, thumbImg: res.data.secure_url });
        });
    } else {
      const slideImages = [];
      for (let i = 0; i < files.length; i++) {
        slideImages.push(files[i]);
      }
      console.log(slideImages);
      const promose = await Promise.all(
        slideImages.map((file) => {
          const formData = new FormData();
          formData.append("file", file);
          formData.append("upload_preset", "zjiweql4");
          return axios.post(
            "https://api.cloudinary.com/v1_1/duo1znrio/upload",
            formData
          );
        })
      ).then((res) => {
        const slideImg = [];
        res.map((img) => {
          console.log(img);
          slideImg.push(img.data.secure_url);
        });
        console.log(slideImg);
        setProduct({ ...product, images: slideImg });
      });
    }
  };
  const myImage = new CloudinaryImage("sample", {
    cloudName: "duo1znrio",
  }).resize(fill().width(10).height(10));

  return (
    <div
      className="modal"
      style={{ display: show ? "flex" : "none" }}
      onClick={() => setShow(false)}
    >
      <div
        class="modal-dialog"
        role="document"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div class="modal-content">
          <div class="d-flex justify-content-around">
            <h3 className="text-secondary">Add product</h3>
            <button
              className="close border-0 bg-none"
              onClick={() => setShow(false)}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className=" row text-secondary">
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
                    onChange={(e) => {
                      uploadImage(e.target.files);
                    }}
                  />
                </div>
                <div className="d-flex flex-column">
                  <label>Slide Images</label>
                  <input
                    multiple
                    type="file"
                    className="fileInput"
                    onChange={(e) => {
                      uploadImage(e.target.files);
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
                    onClose();
                    onSave(product);
                  }}
                >
                  Add product
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
