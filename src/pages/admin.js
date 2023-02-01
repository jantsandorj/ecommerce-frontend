import React, { useEffect } from "react";
import Category from "../components/category";
import { Outlet } from "react-router-dom";
import "../style/admin.css";

const Admin = () => {
  // useEffect(() => {
  //   fetch("http://localhost:9000/api/category")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);
  return (
    <div className="container">
      <div className="d-flex">
        <div className="d-flex">
          <div className="d-flex flex-column">
            {/* <img /> */}
            <Category />
          </div>
          <button type="">Log Out</button>
        </div>
        <div className="bg-warning right">
          <div>
            <input placeholder="Search product" />
            <div>
              <button>{/* Icon */}</button>
              {/* dropdown */}
            </div>
          </div>
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
