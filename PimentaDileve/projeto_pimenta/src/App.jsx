import './App.css'
import Home from './pages/Home';
import Nav from './layout/Nav';
import Footer from './layout/Footer';
import Sabores from './pages/Sabores';
import{ BrowserRouter as Router, Routes, Route,Link} from 'react-router-dom';
import Clientes from './pages/Clientes';
import QuemSomos from './pages/QuemSomos';
import Pedidos from './pages/Pedidos';
import Localizacao from './pages/local';



function App() {


  return (
    <Router>
      <div className='grid'>
      
        <div className='header'>
            <Nav/>
        </div>
        <div className='main'>
            <Routes>
              <Route path='/*' element={<Home/>}/>
              <Route path='/Sabores' element={<Sabores/>}/>
              <Route path='/Clientes'element={<Clientes/>}/>
              <Route path='/QuemSomos' element={<QuemSomos/>}/>
              <Route path='/Pedidos' element={<Pedidos/>}/>
              <Route path='/Localizacao'element={<Localizacao/>}/>
            </Routes>
        </div>
        <div className='footer'>
           <Footer/>
        </div>
      </div>
    </Router>
  )
}

export default App
