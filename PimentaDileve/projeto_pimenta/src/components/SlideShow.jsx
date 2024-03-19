import {useState, useEffect} from 'react'
import '../App.css'

import Imagem1 from '../imagens/banner-img-red.jpeg'
import Imagem2 from '../imagens/banner2-img-red.jpeg'


const Slide = () =>{

    const Imagens = [Imagem1, Imagem2]
    const[IndiceAtual, setIndice] = useState(0)

    useEffect(()=>{
        const Interval = setInterval(ProximaImagem,2000);

        return() => clearInterval(Interval)
    },[])

    const ProximaImagem = () =>{
        setIndice((prevIndice)=> (prevIndice + 1) % Imagens.length)
    }

    const ImagemAnterior = () =>{
        setIndice((prevIndice)=> (prevIndice - 1 + Imagens.length) % Imagens.length)
    }

    return(
        <div className='layout_slide'>
            <img src={Imagens[IndiceAtual]} alt={`Imagem${IndiceAtual + 1}`}  className='imagem_slide'/>
        </div>
    )
}

export default Slide;