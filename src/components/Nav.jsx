function Nav() {
  return (
    <nav className="w-[15%] h-full bg-zinc-50 flex flex-col items-center pt-5 text-black ">
      <a
        className="py-3 px-6 border rounded border-blue-200 text-blue-300"
        href="/create"
      >
        Add New Product
      </a>
      <hr className="w-[80%] my-2" />
      <h2 className="text-2xl font-regular w-[80%]  mb-3">Category Filter</h2>
      <ul className=" w-[80%] ">
        <li className="mb-3  flex items-center">
          <span className=" mr-2 block w-[15px] h-[15px] bg-blue-100 rounded-full"></span>
          cat 1
        </li>

        <li className="mb-3  flex items-center">
          <span className=" mr-2 block w-[15px] h-[15px] bg-red-100 rounded-full"></span>
          cat 1
        </li>

        <li className="mb-3  flex items-center">
          <span className=" mr-2 block w-[15px] h-[15px] bg-green-100 rounded-full"></span>
          cat 1
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
