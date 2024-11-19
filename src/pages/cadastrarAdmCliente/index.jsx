import './index.scss';
import {Link, UseParams, useNavigate, useParams} from 'react-router-dom'
import React from 'react';
import axios from 'axios';
import { useEffect, useState, Hook  } from 'react' 
import moment from 'moment';


export default function CadastrarAdmCliente() {

const [nome, setNome] = useState('');
const [nascimento, setNascimento] = useState('');
const [telefone, setTelefone] = useState('');
const [cpf, setCpf] = useState('');
const [medidas, setMedidas] = useState('');
const [observacoes, setObservacoes] = useState('');
const [email, setEmail] = useState('');
const {id} = useParams();

const [token, setToken] = useState('');
const navigate = useNavigate();


useEffect(() => {
    const usu = localStorage.getItem('TOKEN');
    setToken(usu);

    if (usu === undefined) {
        navigate('/');
    } else{ consultar();}
   
}, []); 

async function consultar() {
    if (id != undefined) {
        const url = `http://4.172.207.208:5029/cliente/${id}?x-access-token=${localStorage.getItem('TOKEN')}`;
      
       
        let resp = await axios.get(url);
        let dados = resp.data;

        let data = moment(dados.nascimento).format('YYYY-MM-DD')
        console.log(data)

        setNome(dados.nome)
        setNascimento(dados.nascimento)
    setTelefone(dados.telefone)
    setCpf(dados.cpf)
    setMedidas(dados.medidas)
    setObservacoes(dados.observacoes)
    setEmail(dados.email)

    }


  
    

}



    async function Salvar() {

        if(!token){alert('token não encontrado. por favor , faça login novamente')
        return;
    }

        let paramCorpo = {
            "NOME_cliente": nome,
            "data_Nascimento":nascimento,
		"telefone": telefone,
		"cpf":cpf,
		"medidas":medidas,
		"observacoes" : observacoes, 
		"E_Mail" : email
		        }

                try {
                    if (id == undefined) {
                        const url = `http://localhost:5029/cliente/?x-access-token=${token}`;
                        let resp = await axios.post(url, paramCorpo , {
                            headers : {
                                'x-acess-token':token

                            }
                        });
                        alert('Pessoa adicionada nos arquivos. Id: ' + resp.data.novoId);
                    } else {
                        alert(id)
                        const url = `http://localhost:5029/cliente/${id}?x-access-token=${token}`;
                        let resp = await axios.put(url, paramCorpo, {
                            headers : {
                                'x-acess-token':token

                            }

                        });
                        console.log(email, nome)
                        alert('Pessoa alterada nos arquivos.');
                    }

                    navigate("/admHome")
                } catch (err) {
                    alert ('erro ao salvar , verifique se este email já não está cadastrado' + err.message);
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
                    <h1 className='no'>Cadastrar Cliente</h1>
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
                            value={nome}
                            onChange={e => setNome(e.target.value)}
                            className="input" 
                            /> 
                            <label className="label">Nome do Cliente</label>
                        </div>

                        <div className="container">
                        <input  
                        required
                        type="date"
                        name='date'
                        value = {nascimento}
                        onChange={e => setNascimento(e.target.value)}
                        className='input'
                        />
                        <label htmlFor="date" className="label-data" >Data de Nascimento</label>
                        </div>


                        <div className="container">
                            <input 
                            required 
                            type="text" 
                            name="text" 
                            value={cpf}
                            onChange={e => setCpf(e.target.value)}
                            className="input" 
                            /> 
                            <label className="label">CPF</label>
                        </div>

                        <div className="container">
                            <input 
                            required 
                            type="text" 
                            name="text" 
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className="input" 
                            /> 
                            <label className="label">E-mail</label>
                        </div>

                        <div className="container">
                            <input 
                            required 
                            type="text" 
                            name="text" 
                            value={telefone}
                            onChange={e => setTelefone(e.target.value)}
                            className="input" 
                            /> 
                            <label className="label">Telefone</label>
                        </div>
                    
                    </div>

<div className='direc'>
                    <div className='part3'>
                        <div className="container">
                            <input 
                            required 
                            type="text" 
                            name="text" 
                            value={medidas}
                            onChange={e => setMedidas(e.target.value)}
                            className="input" 
                            /> 
                            <label className="label">Medidas</label>
                        </div>

                        <div className="container">
                            <input 
                            required 
                            type="text" 
                            value={observacoes}
                            onChange={e => setObservacoes(e.target.value)}
                            name="text" 
                            className="input" 
                            /> 
                            <label className="label">Observações</label>
                        </div>
                    </div>
                
                </div> 
</div>                
</div>
                <div class="botom">
                  <ul>
                     <li>
                       <button className='button'onClick={Salvar}>Salvar</button>
                     </li>
                  </ul>
               </div>
        </div>
    );
}