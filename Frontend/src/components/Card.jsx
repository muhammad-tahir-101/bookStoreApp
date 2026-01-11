import React from 'react'

const Card = ({item}) => {
    if(!item) return null;
    
    
  return (
    <>
    <div className='mt-5 '>
        <div className="card bg-base-100 w-82 shadow-sm hover:scale-105 duration-200 ">
  <figure>
    <img
      src={item.image}
      alt={item.name}
      className='h-full w-full object-cover'
      />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className="badge badge-outline hover:bg-pink-500 hover:text-white">Buy Now</div>
    </div>
  </div>
</div>
    </div>

    </>
    
  )
}

export default Card