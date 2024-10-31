import React from 'react';
import AliceCarouselGB from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Carrosselgb.scss';

const CarrosselGB = () => {
    const responsive = {
        0: { items: 1 },
        1024: { items: 3 },
    };

    const renderPrevButton = () => (
        <button className="unique-carousel-controlB unique-prevB">❮</button>
    );

    const renderNextButton = () => (
        <button className="unique-carousel-controlB unique-nextB">❯</button>
    );

    return (
        <div className="unique-carousel-containerB">
            <AliceCarouselGB
                mouseTracking
                responsive={responsive}
                controlsStrategy="alternate"
                renderPrevButton={renderPrevButton}
                renderNextButton={renderNextButton}
                infinite
                disableDotsControls
            >
                <div className="unique-carousel-itemB">
                    <img className='unique-imgB' src="/assets/images/galeria4.svg" alt="Imagem 4" />
                </div>
                <div className="unique-carousel-itemB">
                    <img className='unique-imgB' src="/assets/images/galeria5.svg" alt="Imagem 5" />
                </div>           
                <div className="unique-carousel-itemB">
                    <img className='unique-imgB' src="/assets/images/galeria6.svg" alt="Imagem 6" />
                </div>
            
            </AliceCarouselGB>
        </div>
    );
};

export default CarrosselGB;