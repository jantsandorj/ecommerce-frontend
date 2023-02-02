import React, { useEffect, useState } from "react";
import Category from "../components/category";
import { Outlet } from "react-router-dom";
import "../style/admin.css";
import DropdownButton from "../components/dropdown";
import { MdNotifications } from "react-icons/md";
import Logo from "../IMG/phonex1.png";

const Admin = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9000/api/category")
      .then((res) => res.json())
      .then((dt) => setData(dt.message));
  }, []);
  console.log(data);
  return (
    <div className="con">
      <div className="d-flex outer">
        <div className="d-flex flex-column left">
          <img src={Logo} className="logo" />
          <div className="d-flex flex-column">
            {data.map((e) => {
              return (
                <Category
                  categoryName={e.categoryName}
                  link={e.link}
                  iconName={e.iconName}
                />
              );
            })}
            <button className="btn btn-light w-25">Log Out</button>
          </div>
        </div>
        <div className="right">
          <div className="d-flex justify-content-evenly top">
            <input placeholder="Search product" />
            <div className="d-flex gap-3">
              <span>
                <MdNotifications />
              </span>
              <DropdownButton />
            </div>
          </div>
          <div className="outlet">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
