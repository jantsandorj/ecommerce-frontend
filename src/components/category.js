import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Category = ({ categoryName, link, iconName }) => {
  return (
    <div className="menu">
      <i className={`mx-2 bi bi-${iconName ? iconName : "list"}`}></i>
      <a href={link} className="text-decoration-none menuCat">
        {categoryName}
      </a>
    </div>
  );
};
export default Category;
