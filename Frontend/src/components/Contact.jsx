import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(
        "http://localhost:4001/api/contact",
        {
          fullname: data.fullname,   
          email: data.email,
          message: data.message,     
        },
         {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
       if (res.data.success) {
        toast.success("Message sent successfully");
      
      }
      
    } catch (error) { 
        console.error(error);
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  }
   
  return (
    <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 md:px-20">
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-full max-w-xl bg-white shadow-lg rounded-lg p-6 sm:p-8">
          
          <h1 className="text-2xl sm:text-3xl font-semibold text-center mb-6">
            Contact Us
          </h1>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            
            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register("fullname", { required: true })}
              />
              {errors.name && (
                <span className="text-red-600 text-sm">
                  Name is required
                </span>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-600 text-sm">
                  Email is required
                </span>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                rows={5}
                placeholder="Type your message"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register("message", { required: true })}
              />
              {errors.message && (
                <span className="text-red-600 text-sm">
                  Message is required
                </span>
              )}
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-md transition"
            >
              Submit
            </button>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Contact;
