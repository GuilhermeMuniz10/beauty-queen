import React from 'react';
import AliceCarouselGC from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Carrosselgc.scss';

const CarrosselGC = () => {
    const responsive = {
        0: { items: 1 },
        1024: { items: 3 },
    };

    const renderPrevButton = () => (
        <button className="unique-carousel-controlC unique-prevC">❮</button>
    );

    const renderNextButton = () => (
        <button className="unique-carousel-controlC unique-nextC">❯</button>
    );

    return (
        <div className="unique-carousel-containerC">
            <AliceCarouselGC
                mouseTracking
                responsive={responsive}
                controlsStrategy="alternate"
                renderPrevButton={renderPrevButton}
                renderNextButton={renderNextButton}
                infinite
                disableDotsControls
            >
                <div className="unique-carousel-itemC">
                    <img className='unique-imgC' src="/assets/images/galeria7.svg" alt="Imagem 7" />
                </div>
                <div className="unique-carousel-itemC">
                    <img className='unique-imgC' src="/assets/images/galeria8.svg" alt="Imagem 8" />
                </div>           
                <div className="unique-carousel-itemC">
                    <img className='unique-imgC' src="/assets/images/galeria9.svg" alt="Imagem 9" />
                </div>
            
            </AliceCarouselGC>
        </div>
    );
};

export default CarrosselGC;