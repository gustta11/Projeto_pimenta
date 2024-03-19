import './QuemSomos.css'
import {useState} from 'react'

const QuemSomos = () => {

    const  [sessaoAtual, setSessao] = useState('')

    const CliqueSessao = (sessao) =>{
        setSessao(sessao);
    }

    return (
        <div className='grid_quemSomos'>

            <div className='grid_quemSomos__Wrapper'>
                <div className='grid_quemSomos__Wrapper__conteudo' onMouseEnter={()=>CliqueSessao('missao')} onMouseLeave={()=>CliqueSessao("")}>
                    <h1>MISSÃO</h1>
                    {sessaoAtual === 'missao' &&(
                        <p>Entregar um produto de qualidade que proporcione bons momentos, sensações e experiências únicas.</p>
                    )}
                </div>
                <div className='grid_quemSomos__Wrapper__conteudo' onMouseEnter={()=>CliqueSessao('valores')} onMouseLeave={()=>CliqueSessao("")}>
                    <h1>VALORES</h1>
                   {sessaoAtual === 'valores' &&(
                    <p>Respeito, honestidade, verdade e carinho com as comunidades que nos abastecem, simplicidade, disponibilidade, compromisso e qualidade com os clientes e amigos.</p>
                   )}
                </div>
            </div>
            <div className='grid_quemSomos__Wrapper'>

                <div className='grid_quemSomos__Wrapper__conteudo' onMouseEnter={()=>CliqueSessao('visao')} onMouseLeave={()=>CliqueSessao("")}>
                    <h1>VISÃO</h1>
                    {sessaoAtual === 'visao' &&(
                        <div className='div_p'>
                            <p>Nos tornar uma grande empresa de referência no quesito qualidade e sabor. Buscando atender as expectativas dos nossos clientes e demais públicos o qual nos relacionamos e assim nos tornar a melhor opção por busca dos clientes.</p>
                        </div>
                    )}
                    
                </div>

                <div className='grid_quemSomos__Wrapper__conteudo' onMouseEnter={()=>CliqueSessao('nossahistoria')} onMouseLeave={()=>CliqueSessao("")}>
                    <h1>NOSSA HISTÓRIA</h1>
                        {sessaoAtual === 'nossahistoria'&&(
                            <div className='div_p'>
                                <p>Pimenta Dileve nasceu no ano de 2022 na cidade de Alagoinhas-BA, partindo do amor do seu criador pela cozinha. Sendo ele apaixonado por molho de pimenta, o mesmo resolveu criar sua própria marca e sabor exclusivo.</p>
                            </div>   
                        )}
                    
                </div>
            </div>

        </div>
    )
}


export default QuemSomos