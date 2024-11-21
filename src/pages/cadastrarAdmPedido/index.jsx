import './index.scss';
import {Link, useParams , useNavigate} from 'react-router-dom'
import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react' 
import moment from 'moment';


export default function CadastrarAdmPedido() {

const [IdCliente, setIdCliente] = useState('');
const [IdProcedimento, setIdProcedimento] = useState('');
const [qtdProcedimento, setqtdProcedimento] = useState();
const [id, setId] = useState(undefined);

const [token, setToken] = useState('');
const navigate = useNavigate


useEffect(() => {
    const usu = localStorage.getItem('TOKEN')
    setToken(usu)

    if (usu === undefined) {
        navigate('/')
    } else{ consultar();}

}, [])

async function consultar() {
    if (id !== undefined && token) {
        const url = `http://4.172.207.208:5029/pedido/${id}?x-access-token=${localStorage.getItem('TOKEN')}`;
        let resp = await axios.get(url);
        let dados = resp.data;

        setIdCliente(dados.IdCliente)
        setIdProcedimento(dados.IdProcedimento)
        setqtdProcedimento(dados.qtdProcedimento)


    }



}

    async function Salvar() {

        if(!token){
            alert('token não encontrado. faça o login novamente')
            return;
        }
        let paramCorpo = {
            'id_cliente': IdCliente,
            'id_produto':IdProcedimento,
            'qtd_produto':qtdProcedimento

		        }
        


                try {
                    if (id == undefined) {
                        const url = `http://4.172.207.208:5029/pedidos/?x-access-token=${token}`;
                        let resp = await axios.post(url, paramCorpo, {
                            headers : {
                                'x-acess-token':token
                            }
            
                        });
                        alert('pedido adicionado aos arquivos. Id: ' + resp.data.novoId);
                    } else {
                        const url = `http://4.172.207.208:5029/pedido/${id}?x-access-token=${token}`;
                        let resp = await axios.put(url, paramCorpo, {
            
                            headers : {
                                'x-acess-token':token
                            }
            
            
                        });
                        alert('pedido alterado nos arquivos.');
                    }  
                } catch (err) {
                    alert('erro ao salvar pedido'+err.message);
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


                

                <div className='pgt'>   
                    
                    <div className='nome'>
                    <h1>Cadastrar Pedido</h1>
                    <hr />
                </div>

                    <div className='part1'>

                        <div className="container">
                            <input 
                            required 
                            type="text" 
                            name="text" 
                            value={IdCliente}
                            onChange={e => setIdCliente(e.target.value)}
                            className="input" 
                            /> 
                            <label className="label">ID do Cliente</label>
                        </div>


                        <div className="container">
                            <input 
                            required 
                            type="text" 
                            name="text" 
                            value={IdProcedimento}
                            onChange={e => setIdProcedimento(e.target.value)}
                            className="input" 
                            /> 
                            <label className="label">ID do Procedimento</label>
                        </div>

                        <div className="container">
                            <input 
                            required 
                            type="text" 
                            name="text" 
                            value={qtdProcedimento}
                            onChange={e => setqtdProcedimento(e.target.value)}
                            className="input" 
                            /> 
                            <label className="label">Quantidadade de Procedimento</label>
                        </div>
                    
                    </div>
                
                </div> 

                <div class="botom">
                  <ul>
                     <li>
                       <Link to='#' className='button'onClick={Salvar}>Salvar</Link>
                     </li>
                  </ul>
               </div>

        </div>
    );
}