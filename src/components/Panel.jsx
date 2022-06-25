import {useState} from 'react'
import Button from './Button'

function Panel() {
    const [productos, setProductos] = useState(['Aceite','Te','Repasadores',])

    const agregarProducto = (prod) => {
        setProductos([...productos,prod])
    }

  return (
    <div className='col-span-5 container mx-auto px-4 items-center'>

        <div className=' bg-gray-600 container flex justify-center'>
            <button onClick={()=>agregarProducto('piña')}>asd</button>
            <div className='w-2/4'>
                <table className="table-fixed mb-5 w-full bg-red-400">
                    <thead className=''>
                        <tr>
                            <th className='py-5'><p className='text-2xl'>Productos</p></th>
                            <th className='py-5'><p className='text-2xl'>Acciones</p></th>
                        </tr>
                    </thead>
                    <tbody>
                        {productos.map((p) => 
                        <tr key={p} className='text-center'>
                            <td>{p}</td>
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