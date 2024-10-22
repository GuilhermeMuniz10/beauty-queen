import './index.scss';

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
                    <li><a href="#">Cadastrar Consultas</a></li>
                    <li><a href="#">Cadastrar Procedimentos</a></li>
                    <li><a href="#">Examinar Consultas</a></li>
                    <li><a href="#">Examinar Procedimentos</a></li>
                </ul>
            </nav>
        </div>
    );
}
