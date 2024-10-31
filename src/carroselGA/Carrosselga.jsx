import React from 'react';
import AliceCarouselGA from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Carrosselga.scss';

const CarrosselGA = () => {
    const responsive = {
        0: { items: 1 },
        1024: { items: 3 },
    };

    const renderPrevButton = () => (
        <button className="unique-carousel-control unique-prev">❮</button>
    );

    const renderNextButton = () => (
        <button className="unique-carousel-control unique-next">❯</button>
    );

    return (
        <div className="unique-carousel-container">
            <AliceCarouselGA
                mouseTracking
                responsive={responsive}
                controlsStrategy="alternate"
                renderPrevButton={renderPrevButton}
                renderNextButton={renderNextButton}
                infinite
                disableDotsControls
            >
                <div className="unique-carousel-item">
                    <img className='unique-imgA' src="/assets/images/galeria1.svg" alt="Imagem 1" />
                </div>
                <div className="unique-carousel-item">
                    <img className='unique-imgA' src="/assets/images/galeria2.svg" alt="Imagem 2" />
                </div>           
                <div className="unique-carousel-item">
                    <img className='unique-imgA' src="/assets/images/galeria3.svg" alt="Imagem 3" />
                </div>
            
            </AliceCarouselGA>
        </div>
    );
};

export default CarrosselGA;