import React from 'react'
import { useForm } from 'react-hook-form';

const Contact = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);
  return (
    <>
    <div className='mx-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-40 items-center justify-center ml-100'>
            <h1 className='text-3xl'>Contact Us</h1>
            <div className=''>
            <form onSubmit={handleSubmit(onSubmit)} action="" >
              <div className='mt-3 space-y-1'>

                {/* Name*/}
                <span>Name</span> <br />
                <input type="text" name="name" id="name"
                placeholder='Enter your name'
                className='w-90 px-4 py-1  border rounded-md'
                {...register("name", {required:true})}
                /> 
                <br />
                 {errors.email && (
              <span className="text-red-600">This field is required</span>
            )}
            </div>
            {/* Email*/}
            <div className='mt-4 space-y-2'>
                 <span>Email</span> <br />
                <input type="email" name="email" id="email"
                placeholder='Email address'
                className='w-90 px-4 py-1  border rounded-md'
                {...register("email", {required:true})}
                /> <br />
                   {errors.email && (
              <span className="text-red-600">This field is required</span>
            )}
            </div>

            {/* Message*/}
            <div className='mt-4 space-y-2'>
                 <span>Message</span> <br />
                <textarea name="message" id="message"
                placeholder='Type your message'
                rows={10}
                className='w-90 px-4 py-1  border rounded-md'
                ></textarea>
                </div>
                <button className='btn bg-blue-500 text-white'>Submit</button>
            </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact