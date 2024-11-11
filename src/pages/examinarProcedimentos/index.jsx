import './index.scss'
import React from 'react';

import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';




export default function ConsultarProcedimentos() {
    const [token, setToken] = useState(null);
    const [procedimento, setProcedimento] = useState([]);

    const navigate = useNavigate();


    useEffect(() => {
        const token = localStorage.getItem('TOKEN');
        setToken(token);

        if (!token || token === 'null') {
            navigate('/');
        } else {
            buscar(); 
        }
    }, [navigate]);


     async function buscar() {
         try {
             const url = `http://localhost:5029/produto?x-access-token=${token}`;
             const resp = await axios.get(url);
             setProcedimento(resp.data);

             toast(`${resp.data.length} iten(s) encontrado(s)!, { icon: '🔎' }`);
         } catch (error) {
             toast.error("Erro ao buscar procedimentos!");
         }
     }

     async function excluir(id, procedimento) {
         try {
            const url = `http://localhost:5029/produtos/${id}?x-access-token=${token}`;
             await axios.delete(url);

             await buscar();
             toast.success(`${procedimento} removido da lista de Procedimentos!`);
         } catch (error) {
             toast.error("Erro ao excluir procedimento!");
         }
     }

    

    return (
            <div className='pagina-consultar'>
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
                    <li><Link to='/CadastrarAdmProcedimento' href="#">Cadastrar Procedimentos</Link></li>
                    <li><Link to='/CadastrarAdmPedido'>Cadastrar Pedido</Link></li>
                    <li><Link to='/ExaminarClientes'>Examinar Clientes</Link></li>
                    <li><Link to='/ExaminarProcedimento'>Examinar Procedimentos</Link></li>
                    <li><Link to='/ExaminarPedido'>Examinar Pedidos</Link></li>
                    
                    <div className='sair'>
                        <li>
                            <a  href="#"></a>
                            <Link to='/' className='sairr'>Finalizar Sessão</Link>
                            <Link to='/' className="sair-icon"><img src="/assets/images/sair.png" alt="" /></Link>
                        </li>
                    </div>
                </ul>
            </nav>


            
            <div>
                 <br />
            </div>
                
                <div className='nome'>
                    <h1>Examinar Procedimentos</h1>
                    <hr />
                </div>


                <div className="acoes">
            <button className="botom" onClick={buscar}  >
                {/* SVG da Lupa */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="lupa-icon"
                    viewBox="0 0 16 16"
                >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85zm-5.242.656a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z" />
                </svg>
                Buscar
            </button>
        </div>


               <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Nome do Profissional</th>
                            <th>Preço</th>
                            <th>Descrição</th>
                            <th>Observações</th>
                            <th>Ações</th>
                        </tr>
                    </thead>

                    <tbody>
                       {procedimento.map((item) => (
                            <tr key={item.id}>
                               <td>{item.id}</td>
                                <td>{item.procedimento}</td>
                                <td>{item.profissional}</td>
                                <td>{item.preço}</td>
                                <td>{item.descrição}</td>                             
                                   <td>{item.obs}</td>
                                
                                <td className='acoes'>
                                    <Link to={`/cadastrarAdmProcedimento/${item.id}`}>
                                        <i className='fa-solid fa-pencil botao' />
                                    </Link>
                                    <button  className='botao'
                                    onClick={()=>excluir(item.id , item.procedimento)}>
                                        <i className='fa-solid fa-trash-can' />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                                     </table>

                <Toaster />
            </div>
        
    );
}
