import './index.scss';
import { Link } from 'react-router-dom';

export default function SenhaAlterada() {
    

    return (
        <div className='pagina-home'>
            <div className='login'>
                <div className='IMG'>
                    <img className='imagem' src="/assets/images/chaveee.png" alt="Imagem de usuário" />
                    <h1 className='BV'>Sua senha foi alterada!</h1>
                    <br />
                    <p className='p'><center>Agora você  pode acessar com a nova senha cadrastada e contiuar ultilizando a plataforma normalmente.</center></p>
                </div>

                

                <div className='botom'><Link to='/Login'>Voltar ao Login</Link></div>
            </div>


        
        </div>
    );
}