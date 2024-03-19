import './Nav.module.css'
import {Link} from 'react-router-dom'


const Nav = () =>{
    return(
        <div>
            <Link to='/'><span>HOME</span></Link>
            <Link to='/QuemSomos'><span>QUEM SOMOS</span></Link>
            <Link to='/Sabores'><span>SABORES</span></Link>
            <Link to='/Clientes'><span>COZINHA PRÁTICA</span></Link>
            <Link to='/Pedidos'><span>PEDIDOS</span></Link>
            
        </div>
    )
}

export default Nav;