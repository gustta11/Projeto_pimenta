import {useState,useEffect} from 'react'

import './Carrossel.css'
import imagensaborbarbecue from '../imagens/sabor-barbecue.jpeg'
import imagenssabortradicional from '../imagens/sabor-tradicional.jpeg'
import imagensextraforte from '../imagens/sabor-extra-forte.jpeg'
import imagemvarios from '../imagens/varios-img.jpeg'
import imagempoteunico from '../imagens/img-unico-pote.jpeg'

const Carrossel = () =>{

    const Imagens = [imagensaborbarbecue, imagenssabortradicional, imagensextraforte, imagemvarios,imagempoteunico]
    const[CarrosselIndice, setCarrosselIndice] = useState(0)

    useEffect(()=>{
        const Interval = setInterval(ProximaImagem,2000)

        return()=> clearInterval(Interval)
    })

    const ProximaImagem = () =>{
        setCarrosselIndice((PrevIndice) => (PrevIndice + 1) % Imagens.length )
    }

    return(
        <div className='layout_carrossel'>
            <div className='layout_imagem'>
                
                <img src={Imagens[CarrosselIndice]} alt={` Imagem${CarrosselIndice + 1}`} className='imgcar'/>
            
            </div>
        </div>
    )
}

export default Carrossel