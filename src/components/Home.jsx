import { Link } from "react-router-dom";
import Nav from "./Nav";

function Home() {
  return (
    <>
      <Nav />
      <div className=" w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto">
        <Link
          to="/details/1"
          className="mr-3 mb-3 card p-3 bg-center border shadow rounded w-[18%] h-[30vh] flex justify-center items-center flex-col"
        >
          <div
            className="hover:scale-110 mb-3 w-full h-[80%] bg-contain bg-no-repeat"
            style={{
              backgroundImage:
                "URL(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
            }}
          ></div>
          <h6 className="text-black hover:text-blue-300">
            Lorem ipsum dolor sit amet.
          </h6>
        </Link>
      </div>
    </>
  );
}

export default Home;
