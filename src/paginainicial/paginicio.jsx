
import Carrossel from '../carroselP/Carrossel';
import CarrosselC from '../carroselC/Carrosselc';

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
                        <a href="#" class="button">Login</a>
                     </li>
                  </ul>
               </div>

            </nav>

         </header>

         <div className='carrosselC'>
         <CarrosselC />
         </div>


       

        






         <div className='historia'>
            <div className='imagem'>
               <img src="/assets/images/historia.png" alt="" />
            </div> 

            <div className='txt'>

                  <div className='QS'>
                     <p>Quem Somos?</p>
                     <br />
                     <p>Beauty Queen Spa Fundado por Adriana Gomes, é um oásis de tranquilidade e luxo, dedicado a proporcionar bem-estar e beleza a todos os seus clientes. Com uma abordagem personalizada, o spa oferece tratamentos que combinam tecnologia avançada com técnicas tradicionais, sempre visando renovar corpo e mente. O compromisso de Adriana é garantir que cada cliente se sinta como uma verdadeira rainha, revitalizada e confiante, através de uma experiência de cuidado única e inesquecível.</p>
                  </div>

                  <div className='NM'>
                     <p>Nossa Missão</p>
                     <br />
                     <p>Na Beauty Queen, nossa missão é oferecer tratamentos de spa de alta qualidade que promovem relaxamento, bem-estar e autoconfiança. Fundada por Adriana Gomes, buscamos criar um ambiente acolhedor onde cada cliente se sinta valorizada. Acreditamos que o cuidado com o corpo e a mente é essencial para revelar a verdadeira beleza de cada pessoa.</p>
                  </div>

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


         <div className='mapBox'>
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.189356950853!2d-46.70332172578109!3d-23.704931066880288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce4fb7e753c599%3A0x6f9ca28fe0093bd2!2sAut%C3%B3dromo%20de%20Interlagos%20-%20Port%C3%A3o%208%20%2F%20Gate%208!5e0!3m2!1spt-BR!2sbr!4v1728855956689!5m2!1spt-BR!2sbr"    allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
         </div>
      </div>
      


   );



}


export default Paginicio;



