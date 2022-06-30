import React from 'react'

function CardComida({children}) {
  return (
    <div className="card w-78 bg-primary text-primary-content m-10">
  <div className="card-body">
    <h2 className="card-title">Comida:</h2>
    <p>{children}</p>
    <div className="card-actions justify-end">
      {/* <button className="btn">Buy Now</button> */}
    </div>
  </div>
</div>
  )
}

export default CardComida