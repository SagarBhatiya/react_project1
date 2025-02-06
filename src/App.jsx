import "./App.css";
import Home from "./components/Home";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Details from "./Details";

function App() {
  const { search, pathname } = useLocation();
  return (
    <>
      <div className="h-screen w-screen bg-white flex">
        {(pathname != "/" || search.length > 0) && (
          <Link to="/" className="text-red-100 absolute left-[20%] top-[3%]">
            Home
          </Link>
        )}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
