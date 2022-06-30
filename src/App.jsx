import { useEffect, useState } from 'react'
import  {collection, getDocs } from 'firebase/firestore'
import db from './firebase/firebaseConfig'
import './App.css'
import Sidebar from './components/Sidebar'
import Panel from './components/Panel'
import Comida from './components/Comida'

function App() {
  const [productos, setProductos] = useState(['asd','asd'])
 
  useEffect(()=>{

    const obtenerDatos = async ()=>{
      const datos = await getDocs(collection(db, 'productos'))
      const data = datos.docs.map((dato)=> dato.data())
      setProductos(data)
    }
    
    obtenerDatos()

  }, [])

  return (
    <div className="min-h-screen  grid grid-rows-3 grid-flow-col gap-4">
      {/* <Sidebar className='' />
      <Panel productos={productos}/>
      */}<Comida />
    </div>
  )
}

export default App
