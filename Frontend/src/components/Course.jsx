import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import axios from "axios"

const Course = () => {
const [book, setBook] = useState([]);

useEffect(()=>{
  const getBook = async()=> {
    try {
      const res= await axios.get("http://localhost:4001/book");
      console.log(res.data);
      setBook(res.data);
      
    } catch (error) {
      console.log(error);
    }
  }
  getBook();
},[])

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
          {book.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Course;
