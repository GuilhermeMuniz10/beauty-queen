import './index.scss';
import {Link, useParams, Navigate} from 'react-router-dom'
import React from 'react';
import axios from 'axios';
import { useEffect, useState, Hook  } from 'react' 
import moment from 'moment';


export default function CadastrarAdmPedido() {

const [IdCliente, setIdCliente] = useState('');
const [IdProcedimento, setIdProcedimento] = useState('');
const [qtdProcedimento, setqtdProcedimento] = useState();
const [id, setId] = useState(undefined);

const [token, setToken] = useState('');



useEffect(() => {
    let usu = localStorage.getItem('TOKEN')
    setToken(usu)

    if (usu == undefined) {
        Navigate('/')
    }

    consultar();
}, [])

async function consultar() {
    if (id !== undefined && token) {
        const url = `http://localhost:5010/pedido/${id}?x-access-token=${token}`;
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
                        const url = `http://localhost:5010/pedidos/?x-access-token=${token}`;
                        let resp = await axios.post(url, paramCorpo, {
                            headers : {
                                'x-acess-token':token
                            }
            
                        });
                        alert('pedido adicionado aos arquivos. Id: ' + resp.data.novoId);
                    } else {
                        const url = `http://localhost:5010/pedido/${id}?x-access-token=${token}`;
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
            <input type="checkbox" className='menu-faketrigger' id="menu-toggle" />
            <label htmlFor="menu-toggle" className='menu-lines'>
                <span></span>
                <span></span>
                <span></span>
            </label>


            <nav className='menu'>
                <ul>
                    <div className='imagem'>
                        <li>
                            <img className='imagem' src="/assets/images/adm.png" alt="" />
                        </li>
                    </div>
                    <li><Link to='/AdmHome'>Home</Link></li>
                    <li><Link to='/CadastrarAdmCliente'>Cadastrar Cliente</Link></li>
                    <li><Link to='/CadastrarAdmProcedimento'>Cadastrar Procedimento</Link></li>
                    <li><Link to='/CadastrarAdmPedido'>Cadastrar Pedido</Link></li>
                    <li><a href="/ExaminarClientes">Examinar Cliente</a></li>
                    <li><a href="/ExaminarProcedimentos">Examinar Procedimentos</a></li>
                    <li><a href="/ExaminarPedidos">Examinar Pedidos</a></li>

                    <div className='sair'>
                        <li>
                            <a className='sairr' href="#">Finalizar Sessão</a>
                            <a href="#" className="sair-icon"><img src="/assets/images/sair.png" alt="" /></a>
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