import {useState} from 'react'
import Button from './Button'

function Panel(productos) {
   console.log('hi',productos)

    

  return (
    <div className='col-span-5 container mx-auto px-4 items-center'>

        <div className=' bg-gray-600 container flex justify-center'>
            
            <div className='w-2/4 rounded-lg'>
                <table className="table-fixed my-5 w-full bg-gray-300 rounded-xl ">
                    <thead className=' rounded-xl '>
                        <tr  >
                            <th className='py-5 '><p className='text-2xl'>Productos</p></th>
                            <th className='py-5'><p className='text-2xl'>Acciones</p></th>
                        </tr>
                    </thead>
                    <tbody>
                        {productos.map((p) => 
                        <tr  key={p} className='text-center border-t rounded-t-xl rounded-b-xl border-gray-400'>
                            <td >{p}</td>
                            <td><Button>Listo</Button></td>
                        </tr>)}
                        
                    </tbody>
                 </table>
            </div>
        </div>
    </div>
  )
}

export default Panel