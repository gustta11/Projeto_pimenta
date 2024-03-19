import './Pedidos.css'
import WhatsappLink from './../components/Whatsapp';



const Pedidos = () =>{
    return(
        <div className='layout_geral_pedidos'>
            <div className='layout_faca_seupedido'>
                <div className='conteudo_faca_seupedido'>
                    <h1>CLIQUE AQUI !</h1>
                    <div className='div_img_pedidos'>
                        <WhatsappLink numero='557599425943' mensagem='Olá, quero fazer meu pedido!'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pedidos