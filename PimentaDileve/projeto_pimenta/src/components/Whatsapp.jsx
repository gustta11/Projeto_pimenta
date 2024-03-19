
import logowhatsapp from '../imagens/logo_whats.png'
import logopimenta from '../imagens/logo-semfundo.png'
import './Whatsapp.css'
const WhatsappLink = ({numero,mensagem}) =>{

    const url = `https://api.whatsapp.com/send?phone=${encodeURIComponent(numero)}&text=${encodeURIComponent(mensagem)}`

    return(
    <a href={url} target="_blank"> 
        <div className='div_img_whatsapp'>
            <img src={logowhatsapp} alt=""  className='logo_whats'/>
            <img src={logopimenta} alt="" />
        </div>
    </a>
    )
}

export default WhatsappLink