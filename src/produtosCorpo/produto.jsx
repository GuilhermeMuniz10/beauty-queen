import './produto.scss';


function Produto() {

    return (
       <div className="produto">
          
          <header>

             <nav className='linksP'>

                <img src="/assets/images/logoBQ.png" alt="Descrição da Imagem" class="imagem-opaca" />

                <ul>
                    <li><a href="#" className='Linkp'>Home</a></li>
                    <li><a href="#" className='Linkp'>Nossa História</a></li>
                    <li><a href="#" className='Linkp'>Serviços</a></li>
                    <li><a href="#" className='Linkp'>Galeria</a></li>
                    <li><a href="#" className='Linkp'>Produtos</a></li>
                </ul>

              </nav>

            </header>


         <div className='corporal'>
              <div className='corp'>
                <img src="/assets/images/setabaixo.svg" alt="" />
                <p className='prin'>CORPORAL</p>
                <p className='seg'>Óleo Corporal</p>
                <p className='seg'>Hidratantes</p>
                <p className='seg'>Sabonetes</p>
              </div>
              

              <div className='facia'>
                <img src="/assets/images/setabaixo.svg" alt="" />
                <p className='prime'>FACIAL</p>
                <p className='segun'>Cremes</p>
                <p className='segun'>Hidratantes</p>
              </div>
              
         </div>

        

        <div className='fileira1'>
            <div className='colun1'>

              <div className='fundo1'>
                    
                     <img src="/assets/images/manteigacorporal.svg" alt="imagem 1" />
              </div>
              <h2>Manteiga Corporal</h2>

            </div>

            <div className='colun1'>
                 <div className='fundo1'>
                    <img src="/assets/images/oleocorpo.svg" alt="imagem 2" />
                </div>
                <h2>Óleo corporal</h2>
            </div>

            <div className='colun1'>
                <div className='fundo1'>
                     <img src="/assets/images/protsolarcorpo.svg" alt="imagem 3" />
                </div>
                <h2>Protetor solar corporal</h2>
            </div>

            <div className='colun1'>
               <div className='fundo1'>
                     <img src="/assets/images/gelredutormedidas.svg" alt="imagem 4" />
                </div>
                <h2>Gel redutor de <br /> medidas</h2>
            </div>

        </div>


        <div className='fileira2'>
            <div className='colun2'>
                 <div className='fundo2'>
                         <img src="/assets/images/locaocorporal.svg" alt="imagem 5" />
                </div>
                <h2>Loção hidratante <br /> corporal</h2>
            </div>

            <div className='colun2'>
              <div className='fundo2'>
                     <img src="/assets/images/esfoliantecorporal.svg" alt="imagem 6" />
                </div>
                <h2>Esfoliante corporal</h2>
            </div>


            <div className='colun2'>
                <div className='fundo2'>
                     <img src="/assets/images/gelbanho.svg" alt="imagem 7" />
                </div>
                <h2>Gel de banho</h2>

            </div>

            <div className='colun2'>
                 <div className='fundo2'>
                      <img src="/assets/images/crememaoepe.svg" alt="imagem 8" />
                </div>
                <h2>Creme para mãos e <br /> pés</h2>
            </div>

        </div>


        <div className='fileira3'>
            <div className='colun3'>
                    <div className='fundo3'>
                          <img src="/assets/images/cremefirmadorcorpo.svg" alt="imagem 9" />
                 </div>
                 <h2>Creme firmador <br /> corporal</h2>
            </div>

            <div className='colun3'>
                 <div className='fundo3'>
                         <img src="/assets/images/desodoranteanti.svg" alt="imagem 10" />
                </div>
                <h2>Desodoraante antitranspirante</h2>
            </div>

            <div className='colun3'>
                 <div className='fundo3'>
                        <img src="/assets/images/saboliquidocorpo.svg" alt="imagem 11" />
                </div>
                <h2>Sabonete liquido <br /> corporal</h2>
            </div>

            <div className='colun3'>
               <div className='fundo3'>
                      <img src="/assets/images/cremeanticeluli.svg" alt="imagem 12" />
                </div>
                <h2>Creme anti-celulite</h2>
            </div>

        </div>

      



       </div>
  );
}
   
   

export default Produto;