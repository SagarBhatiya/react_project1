import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import axios from "./utils/axios";
import Loading from "./components/loading";

function Details() {
  const [product, setproduct] = useState(null);
  const { id } = useParams();
  const getsingleproduct = async () => {
    try {
      const { data } = await axios.get(`/products/${id}`);
      setproduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getsingleproduct();
  }, []);
  return product ? (
    <div className="h-full w-full overflow-x-hidden">
      <div className="flex gap-5 justify-between w-[100%] h-[110%]  m-auto p-[10%]">
        <img
          className="object-contain h-[80%]  w-[40%]"
          src={`${product.image}`}
          alt=""
        />
        <div className="content w-[50%] text-black flex flex-col gap-5  ">
          <h2 className="text-4xl">{product.title}</h2>
          <h4 className="text-zinc-400 ">{product.category}</h4>
          <h3 className="text-red-300">$ {product.price}</h3>
          <p>{product.description}</p>
          <div className="flex gap-6 ">
            <Link className="text-center w-[25%] py-2 px-5 border rounded border-blue-200 text-blue-300 hover:bg-blue-200 hover:text-white transition-colors duration-300">
              Edit
            </Link>
            <Link className="text-center w-[25%] py-2 px-5 border rounded border-red-200 text-red-300 hover:bg-red-200 hover:text-white transition-colors duration-300">
              Delete
            </Link>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default Details;
