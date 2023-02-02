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
    <div className="con row">
      <div className="d-flex flex-column left col-2">
        <img src={Logo} className="logo" />
        <div className="d-flex flex-column gap-3">
          {data.map((e) => {
            return (
              <Category
                categoryName={e.categoryName}
                link={e.link}
                iconName={e.iconName}
              />
            );
          })}
          <div>
            <i className="bi bi-box-arrow-right text-secondary"></i>
            <button className="btn logout">Log Out</button>
          </div>
        </div>
      </div>
      <div className="right col-10">
        <div className="row top">
          <div className="d-flex searchDiv col-9">
            <input placeholder="Search product" className="srchInput" />
            <i className="bi bi-search"></i>
          </div>
          <div className="d-flex gap-4 col-3 align-items-center">
            <span>
              <MdNotifications color="gray" />
            </span>
            <DropdownButton
              username={"Jack"}
              userImg={
                "https://wallpapers.com/images/hd/cool-neon-blue-profile-picture-u9y9ydo971k9mdcf.jpg"
              }
            />
          </div>
        </div>
        <div className="outlet">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Admin;
