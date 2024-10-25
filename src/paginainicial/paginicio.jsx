
import Carrossel from '../carroselP/Carrossel';
import CarrosselC from '../carroselC/Carrosselc';
import CarrosselG from '../carroselG/Carrosselg';
import {Link} from 'react-router-dom'

import './paginicio.scss';




function Paginicio() {


   return (
      <div className="paginicio">


         <header>

            <nav className='links'>

               <img src="/assets/images/logoBQ.png" alt="Descrição da Imagem" class="imagem-opaca" />

               <ul>
                  <li><a href="#" className='Link'>Home</a></li>
                  <li><a href="#" className='Link'>Nossa História</a></li>
                  <li><a href="#" className='Link'>Serviços</a></li>
                  <li><a href="#" className='Link'>Galeria</a></li>
                  <li><a href="#" className='Link'>Produtos</a></li>
               </ul>

               <div class="botom">
                  <ul>
                     <li>
                       <Link to='/Login' className='button' >Login</Link>
                     </li>
                  </ul>
               </div>

            </nav>

         </header>

         <div className='carrosselC'>
         <CarrosselC />
         </div>


       

        




         <div className='historia'>
            
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

      <div className='comeco'>
         
      <img className='oncome' src="/assets/images/oncomecou.png" alt="" />

         <div className='OC'>
            <h2>Onde tudo Começou</h2>

            <p>Tudo começou com um sonho em uma <br /> sacada de uma casa.
             Em um espaço <br /> pequeno, mas cuidadosamente decorado, <br /> 
             nossa fundadora transformou sua paixão <br /> por estetica em um negicio 
             promissor.</p>
         </div>

        

         <div className='NH'>
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

            <div className='txt'>

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


         <p className='separa'>———————————————————————————————————————————————————————————————————————————————————— </p>
         </div>

         

         <div className='galeria'>
            <h3>Confira   ——————————————</h3>
            <h1>Nossa Galeria</h1>
         </div>

         <div className='carrosselG'>
         <CarrosselG />
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
            <h2>Nossos Contatos: <br /> ——————— </h2>
            
         </div>


         <div className='redes'>
               <img src="/assets/images/face.svg" alt="facebook" />
               <img src="/assets/images/insta.svg" alt="instagran" />
               <img src="/assets/images/twitter.svg" alt="twitter" />
            </div>


         <div className='funcio'>
            <h2>Horario de funcionamento: <br /> ———————————</h2>
            <h3> Segunda á sexta: 8:00 ás 20:00hs <br /> Sábado: 9:00 ás 15:00 </h3>
         </div>
         

            

         <h2 className='LoM'>Mapa de localização</h2>
         <div className='mapBox'>
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.189356950853!2d-46.70332172578109!3d-23.704931066880288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce4fb7e753c599%3A0x6f9ca28fe0093bd2!2sAut%C3%B3dromo%20de%20Interlagos%20-%20Port%C3%A3o%208%20%2F%20Gate%208!5e0!3m2!1spt-BR!2sbr!4v1728855956689!5m2!1spt-BR!2sbr"    allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
         </div>

         <footer>
            <h1>Site desenvolvido pela agência VeloxBity</h1>
         </footer>


      </div>
      
   );
}


export default Paginicio;



