import './index.scss';
import {Link} from 'react-router-dom'

export default function cadastrarAdmProcedimento() {
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
                            className="input" 
                            /> 
                            <label className="label">Nome do Procedimento</label>
                        </div>

                        <div className="container">
                            <input 
                            required 
                            type="text" 
                            name="text" 
                            className="input" 
                            /> 
                            <label className="label">Nome do Profissional</label>
                        </div>

                        <div className="container">
                            <input 
                            required 
                            type="text" 
                            name="text" 
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
                            className="input" 
                            /> 
                            <label className="label">Descrição</label>
                        </div>

                        <div className="container">
                            <input 
                            required 
                            type="text" 
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
                       <Link to='#' className='button' >Salvar</Link>
                     </li>
                  </ul>
               </div>

        </div>
    );
}