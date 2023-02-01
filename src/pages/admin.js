import React from "react";
import Category from "../components/category";
import { Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <div className="container">
      <div className="d-flex">
        <div className="d-flex">
          <div className="d-flex flex-column">
            <img />
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
