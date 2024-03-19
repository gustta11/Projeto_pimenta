import '../App.css'
import Nav from '../layout/Nav';
import Footer from '../layout/Footer';
import './Sabores.css'

import imagemsabortradicional from '../imagens/sabor-tradiciona-redl.png'
import imagemsaborbarbecue from '../imagens/sabor-barbecue-red.jpeg'
import imagemsaborextraforte from '../imagens/sabor-extra-forte-red.jpeg'

const Sabores = () =>{
    return(
      <div className='grid_sabores'>

        <div className='div_sabor1'>
          <div className='div_img_sabor'>
            <img src={imagemsabortradicional} alt=""  className='img_sabor1'/>
            <div className='descricao_sabor'>
                <h1>Tradicional</h1>
                <ul>
                  <li>
                    <p>
                      Sabor levemente ardente
                    </p>
                  </li>
                </ul>
                <p className='valor_sabor'>Tradicional R$12</p>
              </div>
          </div>
        </div>

        <div className='div_sabor2'>
          <div className='div_img_sabor'>
              <img src={imagemsaborbarbecue} alt=""  className='img_sabor2'/>
              <div className='descricao_sabor'>
                <h1>BARBECUE</h1>
                <ul>
                  <li>
                    <p>
                      Sabor agridoce, levemente incorporado com a picância da Pimenta
                    </p>
                  </li>
                </ul>
                <p className='valor_sabor'>Barbecue R$14</p>
              </div>
          </div>
        </div>

        <div className='div_sabor3'>
          <div className='div_img_sabor'>
              <img src={imagemsaborextraforte} alt=""  className='img_sabor3'/>
              <div className='descricao_sabor3'>
                <h1>EXTRA FORTE</h1>
                <ul>
                  <li>
                    <p>
                      Sabor altamente picante
                    </p>
                  </li>
                </ul>
                <p className='valor3_sabor'>Extra Forte R$18</p>
              </div>
          </div>
        </div>

      </div>
    )
}

export default Sabores