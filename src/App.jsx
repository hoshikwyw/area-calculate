import React, { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";

function App() {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [area, setArea] = useState(0);

  const calculateArea = () => {
    const calculatedArea = length * width;
    setArea(calculatedArea);
  };
  const delbtn = () => {
    setArea(0);
    setLength("");
    setWidth("");
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-screen flex justify-center items-center">
      <div className=" flex justify-center items-center flex-col h-[90%] bg-white bg-opacity-10 w-[80%] md:w-[50%] lg:w-[50%] mx-auto rounded py-5 px-8 shadow-md">
      <h1 className=" text-white font-bold text-2xl text-center tracking-widest">
        Area Calculator
      </h1>
        <div className=" flex gap-3 items-center justify-center mt-10 bg-gray-100 bg-opacity-20 py-1 px-5 rounded">
          <h2 className="  text-[#ffffffe5] font-bold tracking-wider">Area : <span className=" text-gray-700">{area}</span> sqft</h2>
          <button className=" text-2xl text-[#d64a4ae5]" onClick={delbtn}>
            <MdOutlineCancel />
          </button>
        </div>

        <div className=" flex flex-col gap-5 justify-center items-center mt-14 w-fit">
          <div className=" flex flex-col md:flex-row lg:flex-row gap-1 items-center rounded font-bold tracking-wider">
            <label className=" text-[#ffffffe5]">Length : </label>
            <input
              className=" bg-gray-300 outline-none border rounded ps-3 py-1 text-gray-700"
              type="number"
              value={length}
              placeholder="type your length"
              onChange={(e) => setLength(Number(e.target.value))}
              required
            />
          </div>
          <div className=" flex flex-col md:flex-row lg:flex-row gap-1 items-center rounded font-bold tracking-wider">
            <label className=" text-[#ffffffe5]">Width : </label>
            <input
              className=" bg-gray-300 outline-none border rounded ps-3 py-1 text-gray-700"
              type="number"
              value={width}
              placeholder="type your width"
              onChange={(e) => setWidth(Number(e.target.value))}
              required
            />
          </div>
          <button onClick={calculateArea} className=" border px-3 py-1 rounded mt-5">
            Calculate
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
