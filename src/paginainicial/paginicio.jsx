
import Carrossel from '../carroselP/Carrossel';
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

         <div className='slider'>

            <div className='slides'>

               {/* Botões de radios */}
               <input type="radio" name="radio-btn" id="radio1" />
               <input type="radio" name="radio-btn" id="radio2" />
               <input type="radio" name="radio-btn" id="radio3" />
               <input type="radio" name="radio-btn" id="radio4" />
               <input type="radio" name="radio-btn" id="radio5" />
               <input type="radio" name="radio-btn" id="radio6" />
               {/* Fim Botão de radio */}


               {/* imagens de slides  */}
               <div className="slide first">
                  <img src="/assets/images/carros1.png" alt="Imagem 1" />
               </div>

               <div className="slide">
                  <img src="/assets/images/carros2.png" alt="Imagem 2" />
               </div>

               <div className="slide">
                  <img src="/assets/images/carros3.png" alt="Imagem 3" />
               </div>

               <div className="slide">
                  <img src="/assets/images/carros4.png" alt="Imagem 4" />
               </div>

               <div className="slide">
                  <img src="/assets/images/carros5.png" alt="Imagem 5" />
               </div>

               <div className="slide">
                  <img src="/assets/images/carros6.png" alt="Imagem 6" />
               </div>

               

               {/* Fim imagens de slides  */}

               {/* Navegação automatica */}
               <div className='navigation-auto'>
                  <div className="auto-btn1"></div>
                  <div className="auto-btn2"></div>
                  <div className="auto-btn3"></div>
                  <div className="auto-btn4"></div>
                  <div className="auto-btn5"></div>
                  <div className="auto-btn6"></div>

               </div>

            </div>


            <div className="manual-navigation">
               <label for="radio1" className='manual-btn'></label>
               <label for="radio2" className='manual-btn'></label>
               <label for="radio3" className='manual-btn'></label>
               <label for="radio4" className='manual-btn'></label>
               <label for="radio5" className='manual-btn'></label>
               <label for="radio6" className='manual-btn'></label>

            </div>


         </div>



         <div className='historia'>
            <div>

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

