import { Link } from "react-router-dom";

function Details() {
  return (
    <div className="flex gap-5 justify-between w-[70%] h-full m-auto p-[10%]">
      <img
        className="object-contain h-[80%]  w-[40%]"
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        alt=""
      />
      <div className="content w-[50%] text-black flex flex-col gap-5  ">
        <h2 className="text-4xl">
          Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
        </h2>
        <h4 className="text-zinc-400 ">men's clothing</h4>
        <h3 className="text-red-300">$ 109.95</h3>
        <p>
          Your perfect pack for everyday use and walks in the forest. Stash your
          laptop (up to 15 inches) in the padded sleeve, your
          everyday","category":"men's clothing
        </p>
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
  );
}

export default Details;
