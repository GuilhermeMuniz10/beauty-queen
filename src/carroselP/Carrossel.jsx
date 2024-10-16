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
                    <img className='imgA' src="/assets/images/logoA.png" alt="Imagem 1" />
                </div>
                <div className="carousel-item">
                    <img className='imgB' src="/assets/images/logoC.avif" alt="Imagem 2" />
                </div>           
                <div className="carousel-item">
                    <img className='imgD' src="/assets/images/logoSalon.png" alt="Imagem 8" />
                </div>
                <div className="carousel-item">
                    <img className='imgC' src="/assets/images/logoN.png" alt="Imagem 10" />
                </div>
                <div className="carousel-item">
                    <img className='imgE' src="/assets/images/logoSw.png" alt="Imagem 10" />
                </div>
                <div className="carousel-item">
                    <img className='imgF' src="/assets/images/logoNeu.png" alt="Imagem 10" />
                </div>
            </AliceCarousel>
        </div>
    );
};

export default Carrossel;
