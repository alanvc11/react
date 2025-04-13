import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from "./components/login/login";
import Cadastro from "./components/cadastro/cadastro";
import Carrinho from './components/carrinho/carrinho';
import Pagamento from './components/pagamento/pagamento';
import Naoencontrado from './components/naoencontrado/Naoencontrado';
import Produtos from './components/ctprodutos/ctprodutos';
import Inicial from './components/inicial/inicial';
import Atualizar from './components/atualizar/atualizar';
import Home from './components/home/home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Inicial/>} />
      <Route path='/Home' element={<Home/>} />
      <Route path='/Login' element={<Login/>} />
      <Route path='/Cadastro' element={<Cadastro/>} />  
      <Route path='/Atualizar' element={<Atualizar/>} />
      <Route path='/Carrinho' element={<Carrinho/>} />
      <Route path='/Pagamento' element={<Pagamento/>} />
      <Route path='/Naoencontrado' element={<Naoencontrado/>} />
      <Route path='/Produtos' element={<Produtos/>} />
      <Route path='*' element={<h1>Not Found</h1>} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;