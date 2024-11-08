import './index.scss';
import {Link} from 'react-router-dom'

export default function AdmHome() {
    return (
        <div className='pagina-home'>
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
                    <li><Link to='/ExaminarPedidos'>Examinar Pedidos</Link></li>
                    
                    <div className='sair'>
                        <li>
                            <a  href="#"></a>
                            <Link to='/' className='sairr'>Finalizar Sessão</Link>
                            <Link to='/' className="sair-icon"><img src="/assets/images/sair.png" alt="" /></Link>
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
                    <Link to='/CadastrarAdmCliente' href="#"><img className='imagem' src="/assets/images/caderno.png" alt="" /></Link>
                    <Link to='/CadastrarAdmCliente'>Cadastrar Cliente</Link>
                </div>

                <div className='botoes'>
                    <a href="/ExaminarClientes"><img className='imagem' src="/assets/images/pasta.png" alt="" /></a>
                    <a href="/ExaminarClientes">Examinar cliente</a>
                </div>


            </div>

            </div>

        </div>
    );
}
