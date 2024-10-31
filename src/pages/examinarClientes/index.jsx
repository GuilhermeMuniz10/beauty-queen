// import './index.scss'

// import axios from 'axios'
// import { useEffect, useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom';
// import toast, { Toaster } from 'react-hot-toast';

// export default function Consultar() {
//     const [token, setToken] = useState(null);
//     const [clientes, setClientes] = useState([]);

//     const navigate = useNavigate();

//     async function buscar() {
//         try {
//             const url = http://localhost:5010/cliente?x-access-token=${token};
//             const resp = await axios.get(url);
//             setClientes(resp.data);

//             toast(${resp.data.length} iten(s) encontrado(s)!, { icon: '🔎' });
//         } catch (error) {
//             toast.error("Erro ao buscar clientes!");
//         }
//     }

//     async function excluir(id, nome) {
//         try {
//             const url = http://localhost:5010/cliente/${id}?x-access-token=${token};
//             await axios.delete(url);

//             await buscar();
//             toast.success(${nome} removido da lista de clientes!);
//         } catch (error) {
//             toast.error("Erro ao excluir cliente!");
//         }
//     }

//     useEffect(() => {
//         const token = localStorage.getItem('TOKEN');
//         setToken(token);

//         if (!token || token === 'null') {
//             navigate('/');
//         } else {
//             buscar(); // Carrega os dados assim que o token é confirmado
//         }
//     }, [navigate]);

//     return (
//         <>
//             <div className='pagina-consultar'>
//                 <h2>Consultar</h2>
//                 <h1>Clientes</h1>

//                 <div className='acoes'>
//                     <button onClick={buscar}>Buscar</button>
//                     <button onClick={() => navigate('/cadastrar')}>Cadastrar</button>
//                 </div>

//                 <table>
//                     <thead>
//                         <tr>
//                             <th>ID</th>
//                             <th>Nome</th>
//                             <th>Data de Nascimento</th>
//                             <th>Telefone</th>
//                             <th>CPF</th>
//                             <th>Medidas</th>
//                             <th>Observações</th>
//                             <th>Email</th>
//                             <th>Ações</th>
//                         </tr>
//                     </thead>

//                     <tbody>
//                         {clientes.map((item) => (
//                             <tr key={item.id}>
//                                 <td>{item.id}</td>
//                                 <td>{item.nome}</td>
//                                 <td>{new Date(item.data_Nascimento).toLocaleDateString()}</td>
//                                 <td>{item.telefone}</td>
//                                 <td>{item.cpf}</td>
//                                 <td>{item.medidas}</td>
//                                 <td>{item.observacoes}</td>
//                                 <td>{item.email}</td>
//                                 <td className='acoes'>
//                                     <Link to={/cadastrar/${item.id}}>
//                                         <i className='fa-solid fa-pencil botao' />
//                                     </Link>
//                                     <button onClick={() => excluir(item.id, item.nome)} className='botao'>
//                                         <i className='fa-solid fa-trash-can' />
//                                     </button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>

//                 <Toaster />
//             </div>
//         </>
//     );
// }