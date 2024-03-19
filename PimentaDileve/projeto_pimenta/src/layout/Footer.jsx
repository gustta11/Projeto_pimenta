import './Footer.css'
import logoinstagram from '../imagens/logotipo-do-instagram.png'
import {Link} from 'react-router-dom'
 
const Footer = () =>{
    return(
        <>
        <div className='layout_footer'>
            <Link to='/Localizacao'><span>LOCALIZAÇÃO</span></Link>
            <a href="https://www.instagram.com/pimenta_dileve/" target='_blank'><span><img src={logoinstagram} alt="" className='insta'/></span></a>
        </div>
        </>
    )
}

export default Footer;