import { useState } from 'react'

function Comida() {
    const [opcion, setOpcion] = useState("")

    const comidas = 
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

        const comidasFn = (opcion) => {
            if(opcion != ""){

                console.log( comidas[opcion][generateRandom( comidas[opcion].length)])
            }else{
                console.log("error")
            }
        }

        
  return (
    <div>
        <select className='w-48 text-black text-center m-10 text-base p-3.5 rounded-xl' name="" id="" placeholder='-- Opcion --' onChange={e => setOpcion(e.target.value)}>
            <option value="">-- Opcion --</option>
            <option value="principal">Principal</option>
            <option value="secundario">Secundario</option>
            <option value="completo">Completo</option>
        </select>
        <button  className='btn btn-primary btn-outline' onClick={()=>comidasFn(opcion)} >Tirar</button>
        
    </div>
  )
}

export default Comida