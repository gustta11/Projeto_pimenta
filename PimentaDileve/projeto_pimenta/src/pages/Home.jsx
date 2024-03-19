
import './Home.css'
import Slide from './../components/SlideShow';

import logo from '../imagens/logo-semfundo.png'

const Home = () =>{
    return(
        <div className='grid_home'>
            <div className='slide_css'>
                <Slide/>
            </div>
            <section className='sessao_home'>
                <img src={logo} alt="Logo da pimenta Dileve(Uma caveira com touca de cozinheiro)" className="logo" />
            </section>
        </div>
    )
}

export default Home