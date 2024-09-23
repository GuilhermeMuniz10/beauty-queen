import './paginicio.scss';

function Paginicio() {
  return (
    <div className="paginicio">


     <header>
          <div className='cabecalho'>
            <a href="">Home</a>
            <a href="">Nossa História</a>
            <a href="">Serviços</a>
            <a href="">Galeria</a>
            <a href="">Produtos</a>

            <a className='log' href="">Login</a>
          </div>
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











    </div>
  );
}

export default Paginicio;

