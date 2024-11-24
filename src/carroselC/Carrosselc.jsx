import React from 'react';
import AliceCarouselC from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Carrosselc.scss';

const CarrosselC = () => {
    
    const responsive = {
        0: { items: 1 }, 
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
                autoPlayInterval={2000}
            >
                <div className="carousel-slide">
                    <img src="/assets/images/image6.webp" alt="Imagem 4" />
                </div>
                <div className="carousel-slide">
                    <img src="/assets/images/image8.webp" alt="Imagem 3" />
                </div>
                <div className="carousel-slide">
                    <img src="/assets/images/image5.webp" alt="Imagem 2" />
                </div>
                <div className="carousel-slide">
                    <img src="/assets/images/image11.webp" alt="Imagem 1" />
                </div>      
                <div className="carousel-slide">
                    <img src="/assets/images/image12.webp" alt="Imagem 6" />
                </div>
                <div className="carousel-slide">
                    <img src="/assets/images/image13.webp" alt="Imagem 7" />
                </div>
                <div className="carousel-slide">
                    <img src="/assets/images/image10.webp" alt="Imagem 5" />
                </div>
            </AliceCarouselC>
        </div>
    );
};

export default CarrosselC;
