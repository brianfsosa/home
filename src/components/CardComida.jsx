import React from 'react'

function CardComida({comidas}) {
  return (
    <div className="card w-78 bg-secondary text-secondary-content m-10">
  <div className="card-body">
    <h2 className="card-title mb-4 font-bold text-2xl">Comida:</h2>
    <p>{comidas[0]}</p>
    <div className="divider p-2"></div> 
    <p>{comidas[1]}</p>
    <div className="card-actions justify-end">
      {/* <button className="btn">Buy Now</button> */}
    </div>
  </div>
</div>
  )
}

export default CardComida