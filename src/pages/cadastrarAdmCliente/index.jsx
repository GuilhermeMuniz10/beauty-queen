import './index.scss';
import {Link, UseParams, Navigate} from 'react-router-dom'
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
const [id, setId] = useState(undefined);

const [token, setToken] = useState('');



useEffect(() => {
    const usu = localStorage.getItem('TOKEN');
    setToken(usu);

    if (usu === undefined) {
        Navigate('/');
    }
}, []); // Executado uma vez ao carregar o componente , para salvar o token da localstorage na variavel


async function consultar() {
    if (id !== undefined && token) {
        const url = `http://localhost:5010/cliente/${id}?x-access-token=${token}`;
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
            "DATA_nascimento":nascimento,
		"telefone": telefone,
		"cpf":cpf,
		"medidas":medidas,
		"observacoes" : observacoes, 
		"E_MAIL" : email
		        }

                try {
                    if (id == undefined) {
                        const url = `http://localhost:5010/cliente/?x-access-token=${token}`;
                        let resp = await axios.post(url, paramCorpo , {
                            headers : {
                                'x-acess-token':token

                            }
                        });
                        alert('Pessoa adicionada nos arquivos. Id: ' + resp.data.novoId);
                    } else {
                        const url = `http://localhost:5010/cliente/${id}?x-access-token=${token}`;
                        let resp = await axios.put(url, paramCorpo, {
                            headers : {
                                'x-acess-token':token

                            }

                        });
                        alert('Pessoa alterada nos arquivos.');
                    }
                } catch (err) {
                    alert ('erro ao salvar , verifique se este email já não está cadastrado' + err.message);
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
                    <li><a href="#">Examinar Procedimentos</a></li>

                    <div className='sair'>
                        <li>
                            <a className='sairr' href="#">Finalizar Sessão</a>
                            <a href="#" className="sair-icon"><img src="/assets/images/sair.png" alt="" /></a>
                        </li>
                    </div>
                </ul>
            </nav>

            

                
                <div className='nome'>
                    <h1>Cadastrar Cliente</h1>
                    <hr />
                </div>

                <div className='pgt'>   


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

                <div class="botom">
                  <ul>
                     <li>
                       <Link to='/admHome' className='button'onClick={Salvar}>Salvar</Link>
                     </li>
                  </ul>
               </div>
        </div>
    );
}