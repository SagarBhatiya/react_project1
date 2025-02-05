import { Link, useLocation } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";

import Nav from "./Nav";

import { ProductContext } from "../utils/Context";
import Loading from "./loading";
import axios from "../utils/axios";
function Home() {
  const [products] = useContext(ProductContext);
  const { search } = useLocation();
  const category = decodeURIComponent(search.split("=")[1]);

  const [filteredProducts, setfilteredProducts] = useState(products);
  const getproductscategory = async () => {
    try {
      const { data } = await axios.get(`/products/category/${category}`);
      setfilteredProducts(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (!filteredProducts) setfilteredProducts(products);
    if (category != "undefined") getproductscategory();
  }, [category, products]);
  return products ? (
    <>
      <Nav />
      <div className=" w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto">
        {filteredProducts &&
          filteredProducts.map((p, i) => (
            <Link
              to={`/details/${p.id}`}
              className="mr-3 mb-3 card p-3 bg-center border shadow rounded w-[18%] h-[30vh] flex justify-center items-center flex-col"
            >
              <div
                className="hover:scale-110  mb-3 w-full h-full bg-contain bg-no-repeat"
                style={{
                  backgroundImage: `url(${p.image})`,
                }}
              ></div>
              <h6 className="text-sm text-black hover:text-blue-300">
                {p.title}
              </h6>
            </Link>
          ))}
      </div>
    </>
  ) : (
    <Loading />
  );
}

export default Home;
