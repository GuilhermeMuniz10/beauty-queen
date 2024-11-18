import './index.scss';
import {Link} from 'react-router-dom'

export default function AdmHome() {
    return (
        <div className='pagina-hom'>
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
