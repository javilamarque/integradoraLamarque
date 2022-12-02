import React from "react";
import './Carousel.css'

const Carousel = () => {
    return (
        <>
            <h1 className="titulo-carousel">Carousel de Imagenes</h1>
            <div className="container">
                <div className="carousel">
                    <div className="image"><span>San Martin</span></div>
                    <div className="image"><span>7 Lagos</span></div>
                    <div className="image"><span>El Bolson</span></div>
                    <div className="image"><span>Bariloche</span></div>
                    <div className="image"><span>El Sur</span></div>
                    <div className="image"><span>El Ocaso</span></div>
                    <div className="image"><span>Atardecer</span></div>
                    <div className="image"><span>Desierto</span></div>
                    <div className="image"><span>Sierras</span></div>
                </div>    
                </div>  
            
        </>
    )
}

export default Carousel;