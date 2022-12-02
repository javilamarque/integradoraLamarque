import React from "react";
import './card.css'

const Card = () => {
    return (
        <>
            <h1 className="titulo-h1">Elegi tu Destino</h1>
            <div className="container">
                <div className="card-ca card1">
                    <p className="text">San Martin de los Andes <br/>
                        Un paseo familiar ideal para una escala en la Ruta 40 (Camino de los Siete Lagos), en San Martín de los Andes.</p>
                    
                </div>
                <div className="card-ca card2">
                    <p className="text">VIVI BARILOCHE <br/> Ubicada a 1.640 kilómetros de la ciudad de Buenos Aires, Bariloche cuenta con excelente nivel en todos sus servicios: alojamiento</p>
                </div>
                <div className="card-ca card3">
                    <p className="text">Cascada en el Bolson <br />Las zonas aledañas a la ciudad ofrecen circuitos imperdibles y uno de ellos es el de las cascadas, fuertes saltos de agua.</p>
                </div>
                <div className="card-ca card4">
                    <p className="text">Cascada en 7 Lagos<br />Como llegar: La cascada Vullignanco se ubica a unos 50 kilómetros de la ciudad de San Martín de los Andes,</p>
                </div>
                <div className="card-ca card5">
                    <p className="text">Vista en Mendoza<br />Por todo esto, la ciudad de Mendoza, invita a quien la visite a reencontrarse con la naturaleza, la historia, nuevas amistades y por qué no, consigo mismo.</p>
                </div>
                <div className="card-ca card6">
                    <p className="text">Vista al Cañon<br />Una montaña es una forma topográfica del relieve terrestre positiva, una eminencia natural que se caracteriza por su altitud</p>
                </div>
                <div className="card-ca card7">
                    <p className="text">Sierras en Cordoba<br />Para aquellos que quieren optar por una alternativa diferente a las playas, y eligen para sus vacaciones las sierras cordobesas</p>
                </div>
                <div className="card-ca card8">
                    <p className="text">Atardecer en el Sur<br />Atardecer en El Lago, un magnífico lugar para descansar en contacto con la naturaleza, con Vista al Lago y a sólo 15 Km de Posadas</p>
                </div>
            </div>
        </>
    )
}

export default Card;