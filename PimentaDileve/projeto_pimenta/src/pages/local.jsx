import './Localizacao.css'

import imagemlocalizacao from '../imagens/pin-de-localizacao.png'

const Localizacao = () =>{
    return(
        <div className='layout_geral_localizacao'>
            <div className='layout_lozalizacao'>
                <div className='conteudo_localizacao'>
                    <h1>Localização</h1>
                    <div className='div_img_localizacao'>
                        <img src={imagemlocalizacao} alt=""  className='img_localizacao'/> <p>Alagoinhas velha</p>
                        <img src={imagemlocalizacao} alt=""  className='img_localizacao'/> <p>Praça Kennedy</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Localizacao