import React from 'react'

function Button({children}) {
  return (
    <button className="m-1 bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-4 rounded-xl">
     {children}
    </button>
  )
}

export default Button