import './index.scss'
import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'

export default function Feedbacks(){


    return(
        <div className='pagina-feedbacks'>
             <input type="checkbox" id="menu-trigger" class="menu-faketrigger"/>
      <label for="menu-trigger" class="menu-lines">
            <span></span>
            <span></span>
            <span></span>
      </label>


            <div class="menu">
                  <ul>
                  <li><a href="#home" className="Link" >Home</a></li>
            <li><a href="#historia" className="Link" >Nossa História</a></li>
            <li><a href="#servicos" className="Link" >Serviços</a></li>
            <li><Link to="/" className="Link" >Galeria</Link></li>
            <li><Link to="/Produtos" className="Link" >Produtos</Link></li>
            <li><Link to="/Feedbacks" className="Link" >Feedbacks</Link></li>

                     <li><Link to="/LoginAdm" className="Link" >Login</Link></li>
                     
                     </ul>
            </div>


<header>



        <nav className="links">
          <img src="/assets/images/logoBQ.png" alt="Descrição da Imagem" className="imagem-opaca" />

          <ul>  
            <li><Link to="/" className="Link" >Home</Link></li>
            <li><Link to="/" className="Link" >Nossa História</Link></li>
            <li><Link to="/" className="Link" >Serviços</Link></li>
            <li><Link to="/" className="Link" >Galeria</Link></li>
            <li><Link to="/Produtos" className="Link" >Produtos</Link></li>
            <li><Link to="/Feedbacks" className="Link" >Feedbacks</Link></li>
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

        <div className='txt'><h2>Confira os depoimentos de nossos clientes sobre a experiência no spa.</h2></div>

        <div className='conteiners'>
            <div className='conteiner'>
                <div className='imge'>
                    <img src="/assets/images/imageF1.webp" alt="" />
                </div>

                <div className='texto'>
                    <h3>Depoimento de Redução de Celulite com Massagem Modeladora</h3>
                    <div className='dire'><img src="/assets/images/rosto2.jpg" alt="" />
                    <img className='estrelinha' src="/assets/images/estrelaavaliar.svg" alt="" />
                    </div>
                    <p>
                    "Nunca acreditei que poderia ver resultados tão rápidos! Fiz um pacote de massagem modeladora e notei uma diferença gritante nas minhas pernas e no bumbum. Minha pele ficou mais firme e as ondulações diminuíram muito. É um tratamento transformador e, além de tudo, super relaxante!"
                    — Renata M., 29 anos</p>
                </div>
            </div>

            <div className='conteiner'>
                <div className='imge-2'>
                    <img src="/assets/images/imageF2.webp" alt="" />
                </div>

                <div className='texto'>
                    <h3>Depoimento de Criolipólise com Placas</h3>
                    <div className='dire'><img src="/assets/images/rosto2.jpg" alt="" />
                    <img className='estrelinha' src="/assets/images/estrelaavaliar.svg" alt="" />
                    </div>
                    <p>
                    "Fiz o procedimento de criolipólise com placas e adorei a experiência! Fui muito bem atendida, me senti confortável durante todo o processo, e já estou começando a perceber os resultados. Com certeza voltarei para outros tratamentos!"
                    — Maria S., 35 anos</p>
                </div>
            </div>
        </div>

        <div className='conteiners'>
            <div className='conteiner'>
                <div className='imge-2'>
                    <img src="/assets/images/imageF4.webp" alt="" />
                </div>

                <div className='texto'>
                    <h3>Depoimento de Hidrolipoclasia</h3>
                    <div className='dire'><img src="/assets/images/rosto2.jpg" alt="" />
                    <img className='estrelinha' src="/assets/images/estrelaavaliar.svg" alt="" />
                    </div>
                    <p>
                    "Fiz o procedimento de Hidrolipoclasia e estou muito satisfeita com os resultados. O atendimento foi excelente, a equipe explicou  e o procedimento foi tranquilo, sem dor. Já percebo uma redução na gordura localizada e a pele está mais firme. Recomendo a Hidrolipoclasia para quem busca bons resultados de forma segura e eficaz."
                    — Marcia A., 42 anos</p>
                </div>
            </div>

            <div className='conteiner'>
                <div className='imge-2'>
                    <img src="/assets/images/imageF3.webp" alt="" />
                </div>

                <div className='texto'>
                    <h3>Depoimento de Dreno Detox</h3>
                    <div className='dire'><img src="/assets/images/rosto2.jpg" alt="" />
                    <img className='estrelinha' src="/assets/images/estrelaavaliar.svg" alt="" />
                    </div>
                    <p>
                    "Realizei o Dreno Detox e amei o procedimento! O atendimento foi excelente, o ambiente super agradável e relaxante. Saí me sentindo mais leve e com uma sensação de bem-estar incrível. Com certeza vou continuar fazendo!"
                    — Sonia J., 49 anos</p>
                </div>
            </div>
        </div>

        </div>
    )
}