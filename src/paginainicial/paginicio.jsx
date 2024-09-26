import './paginicio.scss';

function Paginicio() {
  return (
    <div className="paginicio">


     <header>

         <nav className='links'>

         <img src="/assets/images/logoBQ.png" alt="Descrição da Imagem" class="imagem-opaca"  />
            
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
               {/* Fim Botão de radio */}
               

               {/* imagens de slides  */}
               <div className="primeiro slide">
                  <img src="teste.png" alt="Imagem 1"/>
               </div>

               <div className="slide">
                  <img src="public/estetica-facil-saude-rosto.jpg" alt="Imagem 2"/>
               </div>

               <div className="slide">
                  <img src="teste.png" alt="Imagem 3"/>
               </div>

               <div className="slide">
                  <img src="teste.png" alt="Imagem 4"/>
               </div>

                {/* Fim imagens de slides  */}

                {/* Navegação automatica */}
                <div className='navigation-auto'>
                     <div className="auto-btn1"></div>
                     <div className="auto-btn2"></div>
                     <div className="auto-btn3"></div>
                     <div className="auto-btn4"></div>
                     
                </div>

         </div>


         <div className="manual-navigation">
             <label For="radio1" className='manual-btn'></label>
             <label For="radio2" className='manual-btn'></label>
             <label For="radio3" className='manual-btn'></label>
             <label For="radio4" className='manual-btn'></label>
          
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
            <p className='N'>nossos</p>
            <p className='S'>Serviços</p>
            ―――――――――――――
            
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

      




    </div>
  );
}

export default Paginicio;

