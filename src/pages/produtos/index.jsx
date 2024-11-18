import './index.scss';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

export default function ProdutosCF(){

  const [activeCategory, setActiveCategory] = useState("corporal"); // Define a categoria ativa

  const corporalProducts = (
    <div>
      
      <div className='fileira1'>
            <div className='colun1'>
              <div className='fundo1'>
                    <img className='cora' src="/assets/images/coracaoavaliar.svg" alt="" />
                     <img className='imag' src="/assets/images/manteigacorporal.svg" alt="imagem 1" />
              </div>
              <p className='marca'>BACURI</p>
              <h2>Manteiga Corporal</h2>
              <img className='estrela' src="/assets/images/estrelaavaliar.svg" alt="" />
              <p className='pre'>R$ 10,00</p>

            </div>

            <div className='colun1'>
                 <div className='fundo1'>
                 <img className='cora' src="/assets/images/coracaoavaliar.svg" alt="" />
                    <img className='imag' src="/assets/images/oleocorpo.svg" alt="imagem 2" />
                </div>
              <p className='marca'>LABOTRAT</p>
                <h2>Óleo corporal</h2>
                <img className='estrela' src="/assets/images/estrelaavaliar.svg" alt="" />
                <p className='pre'>R$ 10,00</p>
            </div>

            <div className='colun1'>
                <div className='fundo1'>
                <img className='cora' src="/assets/images/coracaoavaliar.svg" alt="" />
                     <img className='imag' src="/assets/images/protsolarcorpo.svg" alt="imagem 3" />
                </div>
              <p className='marca'>L´OREAL</p>
              
                <h2>Protetor solar corporal</h2>
                <img className='estrela' src="/assets/images/estrelaavaliar.svg" alt="" />
                <p className='pre'>R$ 10,00</p>
            </div>

            <div className='colun1'>
               <div className='fundo1'>
               <img className='cora' src="/assets/images/coracaoavaliar.svg" alt="" />
                     <img className='imag' src="/assets/images/gelredutormedidas.svg" alt="imagem 4" />
                </div>
              <p className='marca'>BIOCAP</p>

                <h2>Gel redutor de <br /> medidas</h2>
                <img className='estrela' src="/assets/images/estrelaavaliar.svg" alt="" />
                <p className='pre'>R$ 10,00</p>
            </div>

        </div>


        <div className='fileira2'>
            <div className='colun2'>
                 <div className='fundo2'>
                 <img className='cora' src="/assets/images/coracaoavaliar.svg" alt="" />
                         <img className='imag' src="/assets/images/locaocorporal.svg" alt="imagem 5" />
                </div>
              <p className='marca'>LOVE SECRET</p>

                <h2>Loção hidratante <br /> corporal</h2>
                <img className='estrela' src="/assets/images/estrelaavaliar.svg" alt="" />
                <p className='pre'>R$ 10,00</p>
            </div>

            <div className='colun2'>
              <div className='fundo2'>
              <img className='cora' src="/assets/images/coracaoavaliar.svg" alt="" />
                     <img className='imag' src="/assets/images/esfoliantecorporal.svg" alt="imagem 6" />
                </div>
              <p className='marca'>LABOTAT</p>

                <h2>Esfoliante corporal</h2>
                <img className='estrela' src="/assets/images/estrelaavaliar.svg" alt="" />
                <p className='pre'>R$ 10,00</p>
            </div>


            <div className='colun2'>
                <div className='fundo2'>
                <img className='cora' src="/assets/images/coracaoavaliar.svg" alt="" />
                     <img className='imag' src="/assets/images/gelbanho.svg" alt="imagem 7" />
                </div>
              <p className='marca'>BIODERMA</p>

                <h2>Gel de banho</h2>
                <img className='estrela' src="/assets/images/estrelaavaliar.svg" alt="" />
                <p className='pre'>R$ 10,00</p>

            </div>

            <div className='colun2'>
                 <div className='fundo2'>
                 <img className='cora' src="/assets/images/coracaoavaliar.svg" alt="" />
                      <img className='imag' src="/assets/images/crememaoepe.svg" alt="imagem 8" />
                </div>
              <p className='marca'>FISIOGEL</p>

                <h2>Creme para mãos e <br /> pés</h2>
                <img className='estrela' src="/assets/images/estrelaavaliar.svg" alt="" />
                <p className='pre'>R$ 10,00</p>
            </div>

        </div>


        <div className='fileira3'>
            <div className='colun3'>
                    <div className='fundo3'>
                    <img className='cora' src="/assets/images/coracaoavaliar.svg" alt="" />
                          <img className='imag' src="/assets/images/cremefirmadorcorpo.svg" alt="imagem 9" />
                 </div>
              <p className='marca'>GOICOECHEA</p>

                 <h2>Creme firmador <br /> corporal</h2>
                 <img className='estrela' src="/assets/images/estrelaavaliar.svg" alt="" />
                 <p className='pre'>R$ 10,00</p>
            </div>

            <div className='colun3'>
                 <div className='fundo3'>
                 <img className='cora' src="/assets/images/coracaoavaliar.svg" alt="" />
                         <img className='imag' src="/assets/images/desodoranteanti.svg" alt="imagem 10" />
                </div>
              <p className='marca'>OBOTICÁRIO</p>

                <h2>Desodoraante antitranspirante</h2>
                <img className='estrela' src="/assets/images/estrelaavaliar.svg" alt="" />
                <p className='pre'>R$ 10,00</p>
            </div>

            <div className='colun3'>
                 <div className='fundo3'>
                 <img className='cora' src="/assets/images/coracaoavaliar.svg" alt="" />
                        <img className='imag' src="/assets/images/saboliquidocorpo.svg" alt="imagem 11" />
                </div>
              <p className='marca'>LA PIEL</p>

                <h2>Sabonete liquido <br /> corporal</h2>
                <img className='estrela' src="/assets/images/estrelaavaliar.svg" alt="" />
                <p className='pre'>R$ 10,00</p>
            </div>

            <div className='colun3'>
               <div className='fundo3'>
               <img className='cora' src="/assets/images/coracaoavaliar.svg" alt="" />
                      <img className='imag' src="/assets/images/cremeanticeluli.svg" alt="imagem 12" />
                </div>
              <p className='marca'>NIVA</p>

                <h2>Creme anti-celulite</h2>
                <img className='estrela' src="/assets/images/estrelaavaliar.svg" alt="" />
                <p className='pre'>R$ 10,00</p>
            </div>

        </div>
    </div>
  );


  const facialProducts = (
    <div>
        

        <div className='fileira1'>
            <div className='colun1'>
              <div className='fundo1'>
                    <img className='cora' src="/assets/images/coracaoavaliar.svg" alt="" />
                     <img className='imag' src="/assets/images/esfoliante facial.webp" alt="imagem 1" />
              </div>
              <p className='marca'>ASEPXIA</p>
              <h2>Esfoliante Facial</h2>
              <img className='estrela' src="/assets/images/estrelaavaliar.svg" alt="" />
              <p className='pre'>R$ 10,00</p>

            </div>

            <div className='colun1'>
                 <div className='fundo1'>
                 <img className='cora' src="/assets/images/coracaoavaliar.svg" alt="" />
                    <img className='imag' src="/assets/images/protetor solar facial.png" alt="imagem 2" />
                </div>
              <p className='marca'>SOLARIS</p>
                <h2>Protetor solar facial</h2>
                <img className='estrela' src="/assets/images/estrelaavaliar.svg" alt="" />
                <p className='pre'>R$ 10,00</p>
            </div>

            <div className='colun1'>
                <div className='fundo1'>
                <img className='cora' src="/assets/images/coracaoavaliar.svg" alt="" />
                     <img className='imag' src="/assets/images/agua micelar.jpg" alt="imagem 3" />
                </div>
              <p className='marca'>L´OREAL</p>
              
                <h2>Agua micelar</h2>
                <img className='estrela' src="/assets/images/estrelaavaliar.svg" alt="" />
                <p className='pre'>R$ 10,00</p>
            </div>

            <div className='colun1'>
               <div className='fundo1'>
               <img className='cora' src="/assets/images/coracaoavaliar.svg" alt="" />
                     <img className='imag' src="/assets/images/creme area olhos.webp" alt="imagem 4" />
                </div>
              <p className='marca'>CERAVE</p>

                <h2>Crem para área dos <br /> olhos </h2>
                <img className='estrela' src="/assets/images/estrelaavaliar.svg" alt="" />
                <p className='pre'>R$ 10,00</p>
            </div>

        </div>


        <div className='fileira2'>
            <div className='colun2'>
                 <div className='fundo2'>
                 <img className='cora' src="/assets/images/coracaoavaliar.svg" alt="" />
                         <img className='imag' src="/assets/images/creme hidratante facial.webp" alt="imagem 5" />
                </div>
              <p className='marca'>VULT</p>

                <h2>Creme hidratante facial</h2>
                <img className='estrela' src="/assets/images/estrelaavaliar.svg" alt="" />
                <p className='pre'>R$ 10,00</p>
            </div>

            <div className='colun2'>
              <div className='fundo2'>
              <img className='cora' src="/assets/images/coracaoavaliar.svg" alt="" />
                     <img className='imag' src="/assets/images/gel de limpeza facial.webp" alt="imagem 6" />
                </div>
              <p className='marca'>DARROW</p>

                <h2>Gel de limpeza facial</h2>
                <img className='estrela' src="/assets/images/estrelaavaliar.svg" alt="" />
                <p className='pre'>R$ 10,00</p>
            </div>


            <div className='colun2'>
                <div className='fundo2'>
                <img className='cora' src="/assets/images/coracaoavaliar.svg" alt="" />
                     <img className='imag' src="/assets/images/mascara de hidrogel.webp" alt="imagem 7" />
                </div>
              <p className='marca'>NEUTROGENA</p>

                <h2>Mascara de hidrogel</h2>
                <img className='estrela' src="/assets/images/estrelaavaliar.svg" alt="" />
                <p className='pre'>R$ 10,00</p>

            </div>

            <div className='colun2'>
                 <div className='fundo2'>
                 <img className='cora' src="/assets/images/coracaoavaliar.svg" alt="" />
                      <img className='imag' src="/assets/images/mascara facial de argila.webp" alt="imagem 8" />
                </div>
              <p className='marca'>LABOTRAT</p>

                <h2>Mascara de argila <br /> facial</h2>
                <img className='estrela' src="/assets/images/estrelaavaliar.svg" alt="" />
                <p className='pre'>R$ 10,00</p>
            </div>

        </div>


        <div className='fileira3'>
            <div className='colun3'>
                    <div className='fundo3'>
                    <img className='cora' src="/assets/images/coracaoavaliar.svg" alt="" />
                          <img className='imag' src="/assets/images/primer facial.png" alt="imagem 9" />
                 </div>
              <p className='marca'>TRACTA</p>

                 <h2>Primer facial</h2>
                 <img className='estrela' src="/assets/images/estrelaavaliar.svg" alt="" />
                 <p className='pre'>R$ 10,00</p>
            </div>

            <div className='colun3'>
                 <div className='fundo3'>
                 <img className='cora' src="/assets/images/coracaoavaliar.svg" alt="" />
                         <img className='imag' src="/assets/images/serum anti-idade.webp" alt="imagem 10" />
                </div>
              <p className='marca'>LA ROCHE-POSAY</p>

                <h2>Serum anti-idade</h2>
                <img className='estrela' src="/assets/images/estrelaavaliar.svg" alt="" />
                <p className='pre'>R$ 10,00</p>
            </div>

            <div className='colun3'>
                 <div className='fundo3'>
                 <img className='cora' src="/assets/images/coracaoavaliar.svg" alt="" />
                        <img className='imag' src="/assets/images/oleo facial hidratante.webp" alt="imagem 11" />
                </div>
              <p className='marca'>BIOAGE</p>

                <h2>Óleo facial <br /> hidratante</h2>
                <img className='estrela' src="/assets/images/estrelaavaliar.svg" alt="" />
                <p className='pre'>R$ 10,00</p>
            </div>

            <div className='colun3'>
               <div className='fundo3'>
               <img className='cora' src="/assets/images/coracaoavaliar.svg" alt="" />
                      <img className='imag' src="/assets/images/tonico_facial.webp" alt="imagem 12" />
                </div>
              <p className='marca'>NIVA</p>

                <h2>Tônico facial</h2>
                <img className='estrela' src="/assets/images/estrelaavaliar.svg" alt="" />
                <p className='pre'>R$ 10,00</p>
            </div>

        </div>
    </div>
  );


    return(
        <div className='pagina-produto'>


        <header>
        <nav className="links">
        <img src="/assets/images/logoBQ.png" alt="Descrição da Imagem" className="imagem-opaca" />

        <ul>  
            <li><a href="#home" className="Link">Home</a></li>
            <li><a href="#historia" className="Link">Nossa História</a></li>
            <li><a href="#servicos" className="Link">Serviços</a></li>
            <li><a href="#galeria" className="Link" >Galeria</a></li>
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


        <div className='ini' style={{ padding: "20px" }}>
      <h1>Escolha uma Categoria</h1>
      <div>
        <button
          onClick={() => setActiveCategory("corporal")}
          style={{
            padding: "10px 20px",
            margin: "5px",
            backgroundColor: activeCategory === "corporal" ? "#ddd" : "#fff",
            cursor: "pointer",
          }}
        >
          Produtos Corporais
        </button>
        <button
          onClick={() => setActiveCategory("facial")}
          style={{
            padding: "10px 20px",
            margin: "5px",
            backgroundColor: activeCategory === "facial" ? "#ddd" : "#fff",
            cursor: "pointer",
          }}
        >
          Produtos Faciais
        </button>
      </div>

      <div style={{ marginTop: "20px" }}>
        {activeCategory === "corporal" && corporalProducts}
        {activeCategory === "facial" && facialProducts}
      </div>
    </div>


        </div>
    );
}