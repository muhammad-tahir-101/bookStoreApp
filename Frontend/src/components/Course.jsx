import React from "react";
import list from "../../public/list.json";
import Card from "../components/Card";
import { Link } from 'react-router-dom'

const Course = () => {
  return (
    <>
      <div className="mx-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 text-center justify-center items-center">
          <h1 className="text-2xl md:text-4xl">
            We, are delighted to have you{""}{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
            saepe quasi sint expedita? Odit eaque nemo fugit autem repellat
            neque quia ea ipsa porro? Ullam maxime optio voluptas dolorem
            cupiditate.
          </p>
          <Link to="/">
           <button className="mt-6 bg-pink-500 hover:bg-pink-700 text-white px-4 py-2 rounded-md ">
            Back
          </button>
          </Link>
         
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 ">
          {list.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Course;
