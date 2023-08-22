import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato'

import Header from './components/Header';

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Header />

            <Routes>
                <Route path='/' Component={Home} />
                <Route path='/sobre' Component={Sobre} />
                <Route path='/contato' Component={Contato} />
                <Route path='*' Component={Contato} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;