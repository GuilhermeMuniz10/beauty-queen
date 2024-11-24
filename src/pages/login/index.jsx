import './index.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 
import toast, { Toaster } from 'react-hot-toast';

export default function Login() {
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState(''); 
    const [inputSenha, setInputSenha] = useState(''); 
    const [showPassword, setShowPassword] = useState(false); 
    const [lastTypedChar, setLastTypedChar] = useState(''); 
 
      





    async function entrar() {
       

        const usuario = {
            "nm_usuario": nome,
            "ds_senha": senha
        }

        const url = `http://4.172.207.208:5029/entrar/`
        let resp = await axios.post(url, usuario)

        if (resp.data.erro != undefined) {
            toast.error(resp.data.erro)
        } else {
            localStorage.setItem('USUARIO', JSON.stringify(resp.data.usuario))
            localStorage.setItem('TOKEN', resp.data.token)
            navigate('/admHome')
        }

        alert (resp.data.token)
        alert(resp.data.id)
    }
 


    const navigate = useNavigate();

    useEffect(() => {
        if (lastTypedChar) {
            
            const timeoutId = setTimeout(() => {
                setInputSenha((prev) => prev.slice(0, -1) + '*');
            }, 1000);

            return () => clearTimeout(timeoutId); 
        }
    }, [lastTypedChar]);

   
   
    function togglePasswordVisibility() {
        setShowPassword(!showPassword);
    }

  
    function handlePasswordChange(e) {
        const value = e.target.value;
        const lastChar = value.slice(-1); 

        setSenha(value); 
        setInputSenha(value); 
        setLastTypedChar(lastChar); 
    }

   
    return (
        <div className='pagina-home'>
            <div className='login'>
                <div className='IMG'>
                    <img className='imagem1' src="/assets/images/pessoa.png" alt="Imagem de usuário" />
                    <h1 className='BV'>Bem-vindo de volta</h1>
                    <br />
                    <p className='letra'>Esta área é destinada apenas aos administradores do site!</p>
                </div>

                <div className='campo'>
                    <input
                        id='nome'
                        type='text'
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        placeholder='E-mail'
                    />
                </div>



                





                <div className='campo senha'>
                    <input
                        id='senha'
                        type={showPassword ? 'text' : 'password'}
                        value={showPassword ? senha : inputSenha}
                        onChange={handlePasswordChange}
                        placeholder='Senha'
                    />


                    <span  onClick={togglePasswordVisibility} className='eye-icon'>
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                </div>

                <div className='esqueceu'>
                <div className="checkbox-wrapper-30">
            <span className="checkbox">
                <input type="checkbox" id="lembrar" />
                <svg>
                    <symbol id="checkbox-30" viewBox="0 0 22 22">
                        <path
                            fill="none"
                            stroke="#8f44fd"
                            d="M5.5,11.3L9,14.8L20.2,3.3l0,0c-0.5-1-1.5-1.8-2.7-1.8h-13c-1.7,0-3,1.3-3,3v13c0,1.7,1.3,3,3,3h13c1.7,0,3-1.3,3-3v-13c0-0.4-0.1-0.8-0.3-1.2"
                        />
                    </symbol>
                    <use href="#checkbox-30" className="checkbox" />
                </svg>
            </span>
            <label className='lmb' htmlFor="lembrar">Lembre-se de mim?</label>
        </div>
                    <div className='ES'>
                    <a href="">Esqueceu a senha?</a>
                    </div>
                </div>
                

                <button className='botom' onClick={entrar}>Entrar</button>
            </div> 

            <Toaster/>
        
        </div>
    );
}