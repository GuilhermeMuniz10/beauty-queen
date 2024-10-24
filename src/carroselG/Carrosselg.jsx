import React from 'react';
import AliceCarouselG from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Carrosselg.scss';


const CarrosselG = () => {
    const responsivo = {
        0: { items: 1 }, // Exibir 1 item em telas pequenas
        600: { items: 3 }, // Exibir 3 itens em telas médias
        1024: { items: 9 }, // Exibir 9 itens em telas grandes
    };

    const botaoAnterior = () => (
        <button className="carousel-btng prev-btng">&#10094;</button> // Setinha esquerda
    );

    const botaoProximo = () => (
        <button className="carousel-btng next-btng">&#10095;</button> // Setinha direita
    );

    return (
        <div className="carousel-containerg">
            {/* Botão anterior */}
            <div className="prev-btng-container">
                {botaoAnterior()}
            </div>

            <AliceCarouselG
                mouseTracking
                responsive={responsivo}
                controlsStrategy="alternate"
                renderPrevButton={() => null} // Remover as setas internas
                renderNextButton={() => null} // Remover as setas internas
                infinite
                disableDotsControls
                autoPlay
                autoPlayInterval={3000}
            >
                <div className="carousel-slideg grid-layoutg">
                    {/* Coluna 1 */}
                    <div className="carousel-columng">
                        <img src="/assets/images/galeria1.svg" alt="Imagem 1" />
                        <img src="/assets/images/galeria2.svg" alt="Imagem 2" />
                        <img src="/assets/images/galeria3.svg" alt="Imagem 3" />
                    </div>
                    {/* Coluna 2 */}
                    <div className="carousel-columng">
                        <img src="/assets/images/galeria4.svg" alt="Imagem 4" />
                        <img src="/assets/images/galeria5.svg" alt="Imagem 5" />
                        <img src="/assets/images/galeria6.svg" alt="Imagem 6" />
                    </div>
                    {/* Coluna 3 */}
                    <div className="carousel-columng">
                        <img src="/assets/images/galeria7.svg" alt="Imagem 7" />
                        <img src="/assets/images/galeria8.svg" alt="Imagem 8" />
                        <img src="/assets/images/galeria9.svg" alt="Imagem 9" />
                    </div>
                </div>
            </AliceCarouselG>

            {/* Botão próximo */}
            <div className="next-btng-container">
                {botaoProximo()}
            </div>
        </div>
    );
};

export default CarrosselG;
