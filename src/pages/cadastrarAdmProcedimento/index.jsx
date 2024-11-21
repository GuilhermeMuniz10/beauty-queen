import './index.scss';
import {Link, useParams, useNavigate} from 'react-router-dom'
import React from 'react';
import axios from 'axios';
import { useEffect, useState} from 'react'
import moment from 'moment';    


export default function CadastrarAdmProcedimento() {

const [procedimento, setNome] = useState('');
const [profissional, setProfissional] = useState('');
const [preco, setPreco] = useState('');
const [descricao, setDescricao] = useState('');
const [observacoes, setObservacoes] = useState('');
const {id} = useParams();
const navigate = useNavigate



const [token, setToken] = useState('');



useEffect(() => {
    const usu = localStorage.getItem('TOKEN');
    setToken(usu);

    if (usu === undefined) {
        navigate('/');
    }else{ consultar();}
}, []);




async function consultar() {
    if (id != undefined && token) {
        const url = `http://4.172.207.208:5029/produtos/${id}?x-access-token=${localStorage.getItem('TOKEN')}`;
        let resp = await axios.get(url);
        let dados = resp.data;

        

        setNome(dados.procedimento)
        setProfissional(dados.profissional)
        setPreco(dados.preço)
        setDescricao(dados.descrição)    
        setObservacoes(dados.obs)

    }


  

}
    async function Salvar() {

        if(!token){
            alert ('Token não encontrado. Por favor, faça login novamente')
            return;
        }
        let paramCorpo = {
            "nm_procedimento": procedimento,
            "nm_profissional": profissional,
            "preco": preco,
            "descricao": descricao,
            "observacoes": observacoes
		        }
        

            try {
                if (id === undefined) {
                    const url = `http://4.172.207.208:5029/produtos/?x-access-token=${token}`;
                    let resp = await axios.post(url, paramCorpo, {

                        headers:{
                            'x-acess-token':token

                        }

                    });
                    alert('Procedimento adicionada nos arquivos. Id: ' + resp.data.novoId);
                } else {
                    alert (id)
                    const url = `http://4.172.207.208:5029/produtos/${id}?x-access-token=${token}`;
                    let resp = await axios.put(url, paramCorpo, {

                        headers:{
                            'x-acess-token':token

                        }

                    });
                    alert('Procedimento alterada nos arquivos. '  );
                }
               
            } catch (err) {
                alert('erro ao salvar'+err.message)
            }

       
    }



    return (
        <div className='pagina-cadastrar'>
                       <input type="checkbox" className="menu-toggle" id="menu-toggle" />
<label htmlFor="menu-toggle" className="menu-icon">
    <span></span>
    <span></span>
    <span></span>
</label>

<nav className="side-menu">
    <ul>
        <div className="menu-header">
            <li>
                <img className="menu-logo" src="/assets/images/adm.png" alt="Admin Logo" />
            </li>
        </div>
        <li><Link to="/AdmHome">Home</Link></li>
        <li><Link to="/CadastrarAdmCliente">Cadastrar Cliente</Link></li>
        <li><Link to="/CadastrarAdmProcedimento">Cadastrar Procedimentos</Link></li>
        <li><Link to="/CadastrarAdmPedido">Cadastrar Pedido</Link></li>
        <li><Link to="/ExaminarClientes">Examinar Clientes</Link></li>
        <li><Link to="/ExaminarProcedimento">Examinar Procedimentos</Link></li>
        <li><Link to="/ExaminarPedidos">Examinar Pedidos</Link></li>
        <div className="menu-footer">
            <li>
                <Link to="/" className="logout-text">Finalizar Sessão</Link>
                <Link to="/" className="logout-icon">
                    <img src="/assets/images/sair.png" alt="Logout Icon" />
                </Link>
            </li>
        </div>
    </ul>
</nav>

            <div>
                <br />
            </div>

            
            <div className='nome'>
                    <h1 className='NOME'>Cadastrar Procedimento</h1>
                    <hr />
                </div>


                <div className='pgt'>   
                <div className='pgta'>

                    <div className='part1'>

                        <div className="container">
                            <input 
                            required 
                            type="text" 
                            name="text" 
                            value={procedimento}
                            onChange={e => setNome(e.target.value)}
                            className="input" 
                            /> 
                            <label className="label">Nome do Procedimento</label>
                        </div>

                        <div className="container">
                            <input 
                            required 
                            type="text" 
                            name="text" 
                            value={profissional}
                            onChange={e => setProfissional(e.target.value)}
                            className="input" 
                            /> 
                            <label className="label">Nome do Profissional</label>
                        </div>

                        <div className="container">
                            <input 
                            required 
                            type="text" 
                            name="text" 
                            value={preco}
                            onChange={e => setPreco(e.target.value)}
                            className="input" 
                            /> 
                            <label className="label">Preço</label>
                        </div>

                    
                    </div>


                    <div className='part3'>
                        <div className="container">
                            <input 
                            required 
                            type="text" 
                            name="text" 
                            value={descricao}
                            onChange={e => setDescricao(e.target.value)}
                            className="input" 
                            /> 
                            <label className="label">Descrição</label>
                        </div>

                        <div className="container">
                            <input 
                            required 
                            type="text" 
                            name="text" 
                                value={observacoes}
                            onChange={e => setObservacoes(e.target.value)}
                            className="input" 
                            /> 
                            <label className="label">Observações</label>
                        </div>
                    </div>
                </div>
                </div> 

                <div class="botom">
                  <ul>
                     <li>
                       <button  className='button' onClick={Salvar}>Salvar</button>
                     </li>
                  </ul>
               </div>

        </div>
    );
}