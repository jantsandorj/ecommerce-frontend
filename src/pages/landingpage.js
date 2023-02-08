import React, { useEffect, useState } from "react";

const Landingpage = () => {
  const [menu, setMenu] = useState();
  useEffect(() => {
    fetch("http://localhost:9000/api/menu")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMenu(data);
      });
  }, []);
  return <div></div>;
};

export default Landingpage;
