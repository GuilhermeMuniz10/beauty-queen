import React from 'react';
import AliceCarouselC from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Carrosselc.scss';

const CarrosselC = () => {
    // Ajuste para garantir que apenas 1 imagem será exibida por vez
    const responsive = {
        0: { items: 1 }, // Sempre exibir 1 item em qualquer tamanho de tela
        1024: { items: 1 },
    };

    const renderPrevButton = () => (
        <button className="carousel-btn prev-btn"></button>
    );

    const renderNextButton = () => (
        <button className="carousel-btn next-btng"></button>
    );

    return (
        <div className="carousel-wrapper">
            <AliceCarouselC
                mouseTracking
                responsive={responsive}
                controlsStrategy="alternate"
                renderPrevButton={renderPrevButton}
                renderNextButton={renderNextButton}
                infinite
                disableDotsControls
                autoPlay
                autoPlayInterval={3000}
            >
                <div className="carousel-slide">
                    <img src="/assets/images/carros1.png" alt="Imagem 1" />
                </div>
                <div className="carousel-slide">
                    <img src="/assets/images/carros2.png" alt="Imagem 2" />
                </div>
                <div className="carousel-slide">
                    <img src="/assets/images/carros3.png" alt="Imagem 3" />
                </div>
                <div className="carousel-slide">
                    <img src="/assets/images/carros4.png" alt="Imagem 4" />
                </div>
                <div className="carousel-slide">
                    <img src="/assets/images/carros5.png" alt="Imagem 5" />
                </div>
                <div className="carousel-slide">
                    <img src="/assets/images/carros6.png" alt="Imagem 6" />
                </div>
            </AliceCarouselC>
        </div>
    );
};

export default CarrosselC;
