import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Paginicio from './paginainicial/paginicio';
import Login from './pages/login';
import EsqueceuSenha from './pages/esqueceuSenha';
import ValidacaoSenha from './pages/validacaoSenha';
import RedefinirSenha from './pages/redefinicaoSenha';
import SenhaAlterada from './pages/alterada';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import NotFound from './pages/notFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Paginicio />}  />
        <Route path='/Login' element={<Login />}  />
        <Route path='/EsqueceuSenha' element={<EsqueceuSenha />} />
        <Route path='/ValidacaoSenha' element={<ValidacaoSenha />} />
        <Route path='/RedefinirSenha' element={<RedefinirSenha />} />
        <Route path='/SenhaAlterada' element={<SenhaAlterada />} />

        {/* <Route path= '/Not' element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
