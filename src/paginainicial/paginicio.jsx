import Carrossel from '../carroselP/Carrossel';
import CarrosselC from '../carroselC/Carrosselc';
import CarrosselGA from '../carroselGA/Carrosselga';
import CarrosselGB from '../carroselGB/Carrosselgb';
import CarrosselGC from '../carroselGC/Carrosselgc';
import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import './paginicio.scss';


function Paginicio() {
   const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true); // Adiciona a classe 'visible' quando o usuário rola para baixo
    } else {
      setIsVisible(false); // Remove a classe 'visible' quando o usuário rola para cima
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Limpeza do evento de scroll quando o componente for desmontado
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSmoothScroll = (event, targetId) => {
   event.preventDefault();  // Impede o comportamento padrão do link (rolagem imediata)
 
   const targetElement = document.getElementById(targetId);
   
   if (targetElement) {
     window.scrollTo({
       top: targetElement.offsetTop,  // Obtém a posição vertical da âncora
       behavior: 'smooth'  // Aplica a rolagem suave
     });
   }
}


   return (
      <div className="paginicio">




      <input type="checkbox" id="menu-trigger" class="menu-faketrigger"/>
      <label for="menu-trigger" class="menu-lines">
            <span></span>
            <span></span>
            <span></span>
      </label>


            <div class="menu">
                  <ul>
                  <li><a href="#home" className="Link" onClick={(e) => handleSmoothScroll(e, 'home')}>Home</a></li>
            <li><a href="#historia" className="Link" onClick={(e) => handleSmoothScroll(e, 'historia')}>Nossa História</a></li>
            <li><a href="#servicos" className="Link" onClick={(e) => handleSmoothScroll(e, 'servicos')}>Serviços</a></li>
            <li><a href="#galeria" className="Link" onClick={(e) => handleSmoothScroll(e, 'galeria')}>Galeria</a></li>
                     <li><Link to="/LoginAdm" className="Link" >Login</Link></li>
                     </ul>
            </div>


<header className={`header ${isVisible ? 'visible' : ''}`}>


  
  


        <nav className="links">
          <img src="/assets/images/logoBQ.png" alt="Descrição da Imagem" className="imagem-opaca" />

          <ul>  
            <li><a href="#home" className="Link" onClick={(e) => handleSmoothScroll(e, 'home')}>Home</a></li>
            <li><a href="#historia" className="Link" onClick={(e) => handleSmoothScroll(e, 'historia')}>Nossa História</a></li>
            <li><a href="#servicos" className="Link" onClick={(e) => handleSmoothScroll(e, 'servicos')}>Serviços</a></li>
            <li><a href="#galeria" className="Link" onClick={(e) => handleSmoothScroll(e, 'galeria')}>Galeria</a></li>

            </ul>

          <div className="botom">
            <ul>
              <li>
                <Link to="/LoginAdm" className="buton">Login</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

         <div id="home" className='carrosselC'>
            <img className='logoBQB' src="/assets/images/logoBQBranca.png" alt="" />
         <CarrosselC />
         </div>



        <div className='fundoTrans'>

        </div>



         <div  className='historia'>
            
               <img  src="/assets/images/historia.png" alt="" />

               <div className='NM'>
                     <h1>Nossa Missão</h1>
                     <p>Na Beauty Queen, nossa missão é oferecer tratamentos <br /> de spa de alta qualidade que promovem relaxamento, <br />bem-estar e autoconfiança. Fundada por Adriana <br /> Gomes, buscamos criar um ambiente acolhedor onde <br /> cada cliente se sinta valorizada. Acreditamos que o <br /> cuidado com o corpo e a mente é essencial para <br /> revelar a verdadeira beleza de cada pessoa.</p>
               </div>


                  <div className='QS'>
                     <h1>Quem Somos?</h1>
                     <p>Beauty Queen Spa Fundado por Adriana Gomes, é um <br /> oásis de tranquilidade e luxo, dedicado a proporcionar <br /> bem-estar e beleza a todos os seus clientes. Com uma <br /> abordagem personalizada, o spa oferece tratamentos que <br /> combinam tecnologia avançada com técnicas tradicionais, <br /> sempre visando renovar corpo e mente. O compromisso de <br /> Adriana é garantir que cada cliente se sinta como uma <br /> verdadeira rainha, revitalizada e confiante, através de uma <br /> experiência de cuidado única e inesquecível.</p>
                  </div>

            
         </div>


         <div className='formacoes'>

            <div className='texto'>
               <p>Formações</p>


               <ul>
                  <li>Tec. Estética</li>
                  <li>Aromaterapeuta</li>
                  <li>Especialização em Jato de plasma</li>
                  <li>Especialização Pós operatório com taping terapia</li>
               </ul>
            </div>

            <div>
               <img className='img' src="/assets/images/mulherF.png" alt="" />
            </div>

         </div>

      <div  className='comeco'>
         
      <img  src="/assets/images/oncomecou.png" alt="" />

         <div id="historia" className='OC'>
            <h2>Onde tudo Começou</h2>

            <p>Tudo começou com um sonho em uma <br /> sacada de uma casa.
             Em um espaço <br /> pequeno, mas cuidadosamente decorado, <br /> 
             nossa fundadora transformou sua paixão <br /> por estetica em um negicio 
             promissor.</p>
         </div>

        

         <div  className='NH'>
           <h2>Nosssa Historia</h2>

           <p>Com serviços personalizados e um atendimento <br /> excepcional
           , a pequena sala na sacada rapidamente <br /> conquistou a fidelidade
           dos clientes. O sucesso <br /> crescente levou a expansão, e o que 
           começou <br /> como um modesto salão de beleza evoluiu para um <br />
           spa mediano, oferecendo uma experiência completa <br /> e sofisticada.
           Hoje, nossa empresa é sinônimo de <br /> qualidade e dedicação,
           refletindo a jornada que <br /> começou em uma simples sacada de casa.</p>
         </div>
      </div>

         <div className='servico'>

            <div id="servicos" className='txt'>

               <div className='estrelinha'>
                  <p className='estre'>★</p>
                  <p className='estre'>★</p>
                  <p className='estre'>★</p>
                  <p className='estre'>★</p>
                  <p className='estre'>★</p>
               </div>


               <div className='texto'>
                  <p className='N'>nossos</p>
                  <p className='S'>Serviços</p>
                  <p className='P'>——————————————</p>
               </div>

               <div className='estrelinha'>
                  <p className='estre'>★</p>
                  <p className='estre'>★</p>
                  <p className='estre'>★</p>
                  <p className='estre'>★</p>
                  <p className='estre'>★</p>
               </div>
            </div>

            <div className='conteiner'>

               <div className='imgs'>
                  <img className='card' src="/assets/images/cabelo1.png" alt="" />
                  <img className='card' src="/assets/images/esteticaF.png" alt="" />
                  <img className='card' src="/assets/images/esteticaC.png" alt="" />
               </div>

               <div className='imgs'>
                  <img className='card' src="/assets/images/manicure.png" alt="" />
                  <img className='card' src="/assets/images/sombrancelha.png" alt="" />
                  <img className='card' src="/assets/images/cilios.png" alt="" />
               </div>
             
            </div>


         <p id="galeria" className='separa'>———————————————————————————————————————————————————————————————————————————————————— </p>
         </div>

         

         <div  className='galeria'>
            <div className='direc'><h3>Confira   </h3>———————</div>
            <h1>Nossa Galeria</h1>
         </div>

         <div className='carrosselGS'>
           <CarrosselGA />
           <CarrosselGB />
           <CarrosselGC />

         </div>



         <div className='parcerias'>
            
               <hr />
               <div className='txt'>
                  <p className='N'>----NOSSAS----</p>
                  <p className='P'>Parcerias</p>
               </div>
              
               <Carrossel />
            
            <hr />
         </div>

         <div className='contat'>
            <h2>Nossos Contatos: <br /> ____________ </h2>
            
         </div>


         <div className="redes">
      <a href="https://x.com/BeautyQueeSpa?t=HadmY1hVbnOWRZ7QniqNdQ&s=09">
        <img className="wt" src="/assets/images/twitter.png" alt="Twitter" />
      </a>
      <a href="https://www.facebook.com/profile.php?id=61568535044106&mibextid=ZbWKwL">
        <img className="fa" src="/assets/images/face.svg" alt="Facebook" />
      </a>
      <a href="https://www.instagram.com/beutyqueen_estetica/profilecard/?igsh=MXdweTh1OW1jb2MwMQ==">
        <img className="in" src="/assets/images/insta.svg" alt="Twitter" />
      </a>
    </div>

         <div className='funcio'>
            <h2>Horario de funcionamento: <br />  ____________</h2>
            <h3> Segunda á sexta: 8:00 ás 20:00hs <br /> Sábado: 9:00 ás 15:00 </h3>
         </div>
         

         <div className='redes-1'>
            <a href="https://wa.me/5511998242606?text=Óla!+Gostaria+de+saber+sobre+o+seu+serviço.">
               <img className="wha" src="/assets/images/whats.png" alt="Whatts" />
            </a>   
         </div>   

      
         <div className='mapBox'>
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.048585268878!2d-46.69951782396472!3d-23.709958967069635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce4fbbad0ba35b%3A0xd513dad5edc66c5f!2sR.%20Casqueiro%2C%20208%20-%20Cidade%20Dutra%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004810-090!5e0!3m2!1spt-BR!2sbr!4v1731530406401!5m2!1spt-BR!2sbr"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
         </div>



         <footer>

            <div className='conteiners'> 
                        <div className='cont'>
                        <a href="https://maps.app.goo.gl/4gPwdN6T76LxZFsP6">
                           <img src="/assets/images/iconeLO.png" alt="" />
                           </a>
                           <div>
                              <p>Nosso Endereço:</p>
                           <p>R. Casqueiro, 208 | Cidade Dutra</p>
                           <p>CEP: 04810-090</p>
                           </div>
                           
                        </div>

                        <div className='plt'>|</div>

                        <div className='cont'>
                        <a href="https://wa.me/5511998242606?text=Óla!+Gostaria+de+saber+sobre+o+seu+serviço.">
                           <img src="/assets/images/iconeTEL.png" alt="" />
                        </a>
                           <div>
                              <p>Tel.: +55 (11) 9999-9999</p>
                              <p>Cel.: +55 (11) 9999-9999</p>
                           </div>
                        </div>

                        <div className='plt'>|</div>


                        <div className='cont'>
                        <img src="/assets/images/iconeEmail.png" alt="" />
                           <div>
                              <p>Segue o E-mail:</p>
                              <p>adrianagomes@gmail.com</p>
                           </div>
                        </div>

            </div>

            
            <h1>Site desenvolvido pela agência VeloxByte</h1>
         </footer>


      </div>
      
   );
}


export default Paginicio;



