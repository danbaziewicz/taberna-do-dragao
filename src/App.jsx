import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';
import Home from './pages/Home/Home';
import Pedidos from './pages/Pedidos/Pedidos';
import Cardapio from './pages/Cardapio/Cardapio';
import Login from './pages/Login/Login';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pedidos' element={<Pedidos />} />
          <Route path='/cardapio' element={<Cardapio />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
