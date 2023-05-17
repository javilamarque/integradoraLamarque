import React, {useState} from "react";
import './Home.css'

const Home = () => {
    const [valor, setValor] = useState('');
    const [resultados, setResultado] = useState([]);
    const buscarResultado = async () => {
        const API_KEY = 'TJLOoCTyQLCcRU1kYWSPBAm-9OaJuUdOU2Ts-_SI9cQ';
        const URL = `https://api.unsplash.com/search/photos/?client_id=${API_KEY}&query=${valor}&per_page=15`; // Busca hasta 20 imagenes

        const response = await fetch(URL);
        const data = await response.json();
        setResultado(data.results)
        console.log(data);
    }
    return (
        <>
            <div to='/foto'>
            <h1 className="titulo-home">PAGINA PRINCIPAL</h1>
            <div className='search__box'>
                <input className='search__box--input' placeholder='Busca Tu Imagen' onChange={e => setValor(e.target.value)} />
                <button onClick={() => buscarResultado()} className='search__box--btn'>Buscar</button>
                </div>
                
                <div className='main__content'>
                    <div className='main__content--grid'>
                    {
                        resultados.map((elemento, indice) => {
                            return (
                                
                                <img key={indice} src={elemento.urls.regular} />
                                
                            )

                        })
                    }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;
