import axios from "./axios";
import React, { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();
function Context(props) {
  const [products, setproducts] = useState(null);

  const getproducts = async () => {
    try {
      const { data } = await axios("/products");
      setproducts(data);
    } catch {
      console.log(err);
    }
  };

  useEffect(()=>{
getproducts();
  },[])
  return (
    <ProductContext.Provider value={[products, setproducts]}>
      {props.children}
    </ProductContext.Provider>
  );
}

export default Context;
