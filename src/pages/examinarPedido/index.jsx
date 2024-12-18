import './index.scss'
import React from 'react';

import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';




export default function ConsultarPedidos() {
    const [token, setToken] = useState(null);
    const [pedidos, setPedidos] = useState([]);

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
        let id = localStorage.getItem('USUARIO')
       
         try {
             const url = `http://4.172.207.208:5029/pedido/?x-access-token=${token}`;
             const resp = await axios.get(url);
             console.log(`resposta:`+resp.data);
             setPedidos(resp.data);

            toast(`${resp.data.length} iten(s) encontrado(s)!, { icon: '🔎' }`);
         } catch (error) {
             toast.error("Erro ao buscar pedidos!");
        }
     }

     async function excluir(id, nome) {
         try {
             const url = `http://4.172.207.208:5029/pedido/${id}?x-access-token=${token}`;
             await axios.delete(url);

             await buscar();
             toast.success(`${nome} removido da lista de pedidos!`);
         } catch (error) {
             toast.error("Erro ao excluir pedidos!");
         }
     }

    

    return (
            <div className='pagina-consultar'>
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
                    <h1>Examinar Pedidos</h1>
                    <hr />
                </div>


                <div className="acoes">
            <button className="botom" onClick={buscar}   >
                {}
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
                            <th>Nome do Cliente</th>
                            <th>Nome do Procedimento</th>
                            <th>Quantidade de Procedimentos</th>
                            
                        </tr>
                    </thead>

                    <tbody>
                       {pedidos.map((item) => (
                            <tr key={item.id}>
                               <td>{item.id_pedido}</td>
                                <td>{item.nome_cliente}</td>
                                <td>{item.nome_procedimento}</td>
                                <td>{item.quantidade_pedido}</td>
                               
                            </tr>
                        ))}
                    </tbody>
                                     </table>

                <Toaster />
            </div>
        
    );
}