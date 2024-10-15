import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Carrossel.scss';

const Carrossel = () => {
    const responsive = {
        0: { items: 1 },
        1024: { items: 3 },
    };

    const renderPrevButton = () => (
        <button className="carousel-control prev">❮</button>
    );

    const renderNextButton = () => (
        <button className="carousel-control next">❯</button>
    );

    return (
        <div className="carousel-container">
            <AliceCarousel
                mouseTracking
                responsive={responsive}
                controlsStrategy="alternate"
                renderPrevButton={renderPrevButton}
                renderNextButton={renderNextButton}
                infinite
                disableDotsControls
            >
                <div className="carousel-item">
                    <img src="/assets/images/logoA.png" alt="Imagem 1" />
                </div>
                <div className="carousel-item">
                    <img src="/assets/images/logoC.avif" alt="Imagem 2" />
                </div>
                <div className="carousel-item">
                    <img src="/assets/images/logoDep.webp" alt="Imagem 3" />
                </div>
                <div className="carousel-item">
                    <img src="/assets/images/logoE.jpeg" alt="Imagem 4" />
                </div>
                <div className="carousel-item">
                    <img src="/assets/images/carros5.png" alt="Imagem 5" />
                </div>
                <div className="carousel-item">
                    <img src="/assets/images/carros6.png" alt="Imagem 6" />
                </div>
            </AliceCarousel>
        </div>
    );
};

export default Carrossel;
