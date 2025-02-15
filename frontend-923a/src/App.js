import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from "./components/login/login";
import Cadastro from "./components/cadastro/cadastro";
import Carrinho from './components/carrinho/carrinho';
import Pagamento from './components/pagameno/pagamento';
import Naoencontrado from './components/naoencontrado/Naoencontrado';
import Produtos from './components/ctprodutos/ctprodutos';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/Cadastro' element={<Cadastro/>} /> 
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