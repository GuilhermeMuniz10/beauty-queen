import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Paginicio from './paginainicial/paginicio';
import ProdutosCorpo from './produtosCorpo/produto';
import ProdutosFacial from './produtosFacial/produtoF';
import Login from './pages/login';
import EsqueceuSenha from './pages/esqueceuSenha';
import ValidacaoSenha from './pages/validacaoSenha';
import RedefinirSenha from './pages/redefinicaoSenha';
import SenhaAlterada from './pages/alterada';
import AdmHome from './pages/admHome';
import CadastrarAdmCliente from './pages/cadastrarAdmCliente';
import CadastrarAdmProcedimento from './pages/cadastrarAdmProcedimento';
import ExaminarClientes from './pages/examinarClientes';
import CadastrarAdmPedido from './pages/cadastrarAdmPedido';
import ConsultarProcedimentos from './pages/examinarProcedimentos';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ConsultarPedidos from './pages/examinarPedido';
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
        <Route path='/AdmHome' element={<AdmHome />} />
        <Route path='/CadastrarAdmCliente' element={<CadastrarAdmCliente />} />
        <Route path='/CadastrarAdmProcedimento' element={<CadastrarAdmProcedimento />} />
        <Route path='/ProdutosCorpo' element={<ProdutosCorpo />}/>
        <Route path='/ProdutosFacial' element={<ProdutosFacial />}/>
        <Route path='/CadastrarAdmCliente' element={<CadastrarAdmCliente />} />
        <Route path='/CadastrarAdmCliente/:id' element={<CadastrarAdmCliente />} />
        <Route path='/CadastrarAdmProcediemento' element={<CadastrarAdmProcedimento />} />
        <Route path='/CadastrarAdmPedido' element={<CadastrarAdmPedido />} />
        <Route path='/ExaminarClientes' element={<ExaminarClientes />} />
        <Route path='/ProdutosCorpo' element={<ProdutosCorpo />}/>    
        <Route path='/ExaminarProcedimento' element={<ConsultarProcedimentos />}/>    
        <Route path='/ExaminarPedidos' element={<ConsultarPedidos />}/>    


        {/* <Route path= '/Not' element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
