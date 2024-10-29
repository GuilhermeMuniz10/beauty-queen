import './index.scss';
import {Link, UseParams, Navigate} from 'react-router-dom'
import React from 'react';
import axios from 'axios';
import { UseEffect, useState} from 'react'
import moment from 'moment';    


export default function CadastrarAdmProcedimento() {

const [nome, setNome] = useState('');
const [profissional, setProfissional] = useState('');
const [preco, setPreco] = useState('');
const [descricao, setDescricao] = useState('');
const [observacoes, setObservacoes] = useState('');
const [id, setId] = useState(undefined);

const [token, setToken] = useState('');



    async function Salvar() {
        let paramCorpo = {
            "NM_procedimento": nome,
            "NM_profissional": profissional,
            "PRECO": preco,
            "DESCRICAO": descricao,
            "OBSERVACOES": observacoes
		        }
        
        if (id == undefined) {
            const url = `http://localhost:5010/produtos/?x-access-token=${token}`;
            let resp = await axios.post(url, paramCorpo);
            alert('Pessoa adicionada nos arquivos. Id: ' + resp.data.novoId);
        } else {
            const url = `http://localhost:5010/produtos/${id}?x-access-token=${token}`;
            let resp = await axios.put(url, paramCorpo);
            alert('Pessoa alterada nos arquivos.');
        }
    }

    async function consultar() {
        if (id != undefined) {
            const url = `http://localhost:5010/produtos/${id}?x-access-token=${token}`;
            let resp = await axios.get(url);
            let dados = resp.data;

            let data = moment(dados.nascimento).format('YYYY-MM-DD')
            console.log(data)

            setNome(dados.nome)
            setProfissional(dados.profissional)
            setPreco(dados.preco)
            setDescricao(dados.descricao)    
            setObservacoes(dados.observacoes)

        }


        UseEffect(() => {
            let usu = localStorage.getItem('USUARIO')
            setToken(usu)
    
            if (usu == undefined) {
                Navigate('/')
            }
    
            consultar();
        }, [])

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
                    <li><a href="#">Examinar Cliente</a></li>
                    <li><a href="#">Examinar Procedimentos</a></li>

                    <div className='sair'>
                        <li>
                            <a className='sairr' href="#">Finalizar Sessão</a>
                            <a href="#" className="sair-icon"><img src="/assets/images/sair.png" alt="" /></a>
                        </li>
                    </div>
                </ul>
            </nav>


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

                <div class="botom">
                  <ul>
                     <li>
                       <Link to='#' className='button' onClick={Salvar}>Salvar</Link>
                     </li>
                  </ul>
               </div>

        </div>
    );
}