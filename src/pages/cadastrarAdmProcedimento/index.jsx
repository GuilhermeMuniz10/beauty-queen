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
                    <li><a href="#">Cadastrar Consultas</a></li>
                    <li><a href="#">Cadastrar Procedimentos</a></li>
                    <li><a href="#">Examinar Consultas</a></li>
                    <li><a href="#">Examinar Procedimentos</a></li>

                    <div className='sair'>
                        <li>
                            <a className='sairr' href="#">Finalizar Sessão</a>
                            <a href="#" className="sair-icon"><img src="/assets/images/sair.png" alt="" /></a>
                        </li>
                    </div>
                </ul>
            </nav>

            <div className='home'>

                <div className='txt'>
                    <h1>Bem Vindo!</h1>
                    <h2>O que você deseja fazer hoje?</h2>
                </div>

                <div className='fzr'>

                    <div className='botoes'>
                        <a href="#"><img className='imagem' src="/assets/images/caderno.png" alt="" /></a>
                        <a href="#">Cadastrar consultas</a>
                    </div>

                    <div className='botoes'>
                        <a href="#"><img className='imagem' src="/assets/images/pasta.png" alt="" /></a>
                        <a href="#">Examinar consultas</a>
                    </div>
                </div>


                <div className='input'>
                    <div className='p1'>
                        
                        
                        <input  placeholder = "nome do cliente" type="text" />
                        <input  placeholder=' data de nascimento ' type="date" />
                        <input placeholder='CPF' type="text" />
                        <input placeholder='email' type="text" />
                        <input placeholder='telefone' type="text" />
                    
                    
                    </div> 

                    <div className='p2'>
                        
                        
                        <input  placeholder = "procedimento" type="text" />
                        <input  placeholder=' data ' type="date" />
                        <input placeholder='hora de inicialização' type="time" />
                        <input placeholder='hora de finalização' type="time" />
                        <input placeholder='status' type="text" />
                    
                    
                    </div>  
                
                    <div  className='p3'>
                        <input placeholder='medidas' type="-text area" />
                        <input placeholder='observações' type="text" />

                    </div> 


                </div>       
            </div>
        </div>
    );
}