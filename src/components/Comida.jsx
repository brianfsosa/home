import { useState } from 'react'
import CardComida from './CardComida';

function Comida() {
    const [comidas, setComidas] = useState([])

    const comida = 
        {principal:["Pollo", "Costeleta",
            "Tarta",
            "Hamburguesa", 
            "Milanesas",
            "Pescado",
            "Medallon",
            "Salchichas",
            "Bife"],
         secundario:["Pure",
            "Ensalada",
            "Arroz",
            "Fideos",
            "Arvejas", 
            "Atún",
            "Papas al horno",
            "Papas fritas"],
         completo:["Pizza",
            "Tarta",
            "Hamburguesa", 
            "Guiso",
            "Sopa",
            "Pollo al vino",
            "Rissotto",
            "Pasta",
            ]
        }
        
        function generateRandom(max){
            return Math.floor(Math.random() * max);
        }

        const comidasFn = () => {
                setComidas( [comida.principal[generateRandom( comida.principal.length)] + " con " + comida.secundario[generateRandom( comida.secundario.length)],comida.completo[generateRandom( comida.completo.length)] ])
        }

  return (
    <div className='container items-center text-center pt-6'>
        <button  className='btn btn-primary btn-outline' onClick={()=>comidasFn()} >Tirar</button>
        <CardComida comidas={comidas}></CardComida>
    </div>
  )
}

export default Comida