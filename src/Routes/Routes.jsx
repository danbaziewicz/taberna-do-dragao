import React from 'react'
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'
import Footer from '../components/common/Footer/Footer'
import Header from '../components/common/Header/Header'
import Cardapio from '../pages/Cardapio/Cardapio'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Pedidos from '../pages/Pedidos/Pedidos'

const Routes = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path='/' element={<Home />} />
                <Route path='/pedidos' element={<Pedidos />} />
                <Route path='/cardapio' element={<Cardapio />} />
                <Route path='/login' element={<Login />} />
            </Switch>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routes