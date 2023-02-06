import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

const Category = ({ categoryName, link, iconName }) => {
  const style = {
    color: "#3E8BD4",
    backgroundColor: "#2C3951",
    // margin: "0.5rem 1rem",
    padding: "0.5rem 1rem",
    borderRadius: "10px",
  };
  return (
    <div className="menu row w-100">
      <NavLink
        to={link}
        className="text-decoration-none menuCat col-12"
        style={({ isActive }) => (isActive ? style : undefined)}
      >
        <i className={`px-2 bi bi-${iconName ? iconName : "list"}`}></i>
        {categoryName}
      </NavLink>
    </div>
  );
};
export default Category;
