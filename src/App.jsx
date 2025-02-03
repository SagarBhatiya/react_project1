import "./App.css";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Details from "./Details";

function App() {
  return (
    <>
      <div className="h-screen w-screen bg-white flex">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
