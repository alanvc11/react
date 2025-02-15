import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from "./components/login/login";
import Cadastro from "./components/cadastro/cadastro";

function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<Login/>} />
      <Route path='/Cadastro' element={<Cadastro/>} /> 
      <Route path='*' element={<h1>Not Found</h1>} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;