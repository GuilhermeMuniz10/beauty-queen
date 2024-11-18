import './index.scss'
import { Link } from 'react-router-dom'


export default function NotFound(){

    return(
        <div className='pagina-notfound'>

            <div className='textooo'>

                <div className='txt1'>
                    <p>Página não encontrada</p>
                </div>

                <div className='txt2'>
                    <p>Oops! Desculpe, não encontramos essa página.
                    </p>
                </div>

                <div className='txt3'>
                    <Link className='Link' to='/'><p >Voltar ao início</p></Link>
                    <img className='linha' src="/assets/images/Line 21.png" alt="" />
                </div>
                
        <img className='notfound' src="/assets/images/NFimg.png" alt="" />

            </div>


        </div>
    )
}