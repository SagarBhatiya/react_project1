import { useContext } from "react";
import { ProductContext } from "../utils/Context";
import { Link } from "react-router-dom";

function Nav() {
  const [products] = useContext(ProductContext);

  // Get distinct categories
  const distinctCategories = products && [
    ...new Set(products.map((product) => product.category)),
  ];

  return (
    <nav className="w-[15%] h-full bg-zinc-50 flex flex-col items-center pt-5 text-black">
      {/* Link to create a new product */}
      <Link
        to="/create"
        className="py-3 px-6 border rounded border-blue-200 text-blue-300 hover:bg-blue-200 hover:text-white transition-colors duration-300"
      >
        Add New Product
      </Link>

      <hr className="w-[80%] my-2" />

      {/* Category filter section */}
      <h2 className="text-2xl font-regular w-[80%] mb-3">Category Filter</h2>
      <div className="w-[80%]">
        {distinctCategories ? (
          distinctCategories.map((category, index) => (
            <Link
              key={index}
              to={`/?category=${category}`}
              className="mb-3 flex items-center hover:text-blue-300 transition-colors duration-300"
            >
              <span className="mr-2 block w-[15px] h-[15px] bg-blue-100 rounded-full"></span>
              {category}
            </Link>
          ))
        ) : (
          <p>No categories found.</p>
        )}
      </div>
    </nav>
  );
}

export default Nav;
