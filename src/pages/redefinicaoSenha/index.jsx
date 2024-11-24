import './index.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 

export default function RedefinirSenha() {
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState(''); 
    const [inputSenha, setInputSenha] = useState('');
    const [showPassword, setShowPassword] = useState(false); 
    const [lastTypedChar, setLastTypedChar] = useState(''); 

    const navigate = useNavigate();

    useEffect(() => {
        if (lastTypedChar) {
           
            const timeoutId = setTimeout(() => {
                setInputSenha((prev) => prev.slice(0, -1) + '*');
            }, 1000);

            return () => clearTimeout(timeoutId); 
        }
    }, [lastTypedChar]);

    async function entrar() {
        const usuario = {
            nome: nome,
            senha: senha
        };

        const url = `http://localhost:8001/entrar/`;
        let resp = await axios.post(url, usuario);

        if (resp.data.erro !== undefined) {
            alert(resp.data.erro);
        } else {
            localStorage.setItem('USUARIO', resp.data.token);
            navigate('/consultar');
        }
    }

    
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
                    <h1 className='BV'>Redefinição de Senha</h1>
                    <br />
                    <p>Defina uma senha segura para ter acesso à plataforma Beauty Queen.</p>
                </div>

                <div className='campo senha'>
                    <input
                        id='senha'
                        type={showPassword ? 'text' : 'password'}
                        value={showPassword ? senha : inputSenha}
                        onChange={handlePasswordChange}
                        placeholder='Nova senha'
                    />
                    <span onClick={togglePasswordVisibility} className='eye-icon'>
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                </div>

                <div className='campo senha'>
                    <input
                        id='senha'
                        type={showPassword ? 'text' : 'password'}
                        value={showPassword ? senha : inputSenha}
                        onChange={handlePasswordChange}
                        placeholder='Confirmar nova senha'
                    />
                    <span onClick={togglePasswordVisibility} className='eye-icon'>
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                </div>                

                <div className='botom'><a>Confirmar</a></div>
            </div>


        
        </div>
    );
}