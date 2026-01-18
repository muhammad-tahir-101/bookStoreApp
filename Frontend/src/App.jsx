import React from "react";
import Home from "./components/Home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./components/Courses/Courses";
import Signup from "./components/Signup";
import Contacts from "./components/Contact/Contacts";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./components/context/AuthProvider";

const App = () => {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);

  return (
    <>
      <div className="bg-white text-black dark:bg-gray-900 dark:text-white min-h-screen">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          ></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/contact" element={<Contacts />}></Route>
        </Routes>
        <Toaster />
      </div>
    </>
  );
};

export default App;
