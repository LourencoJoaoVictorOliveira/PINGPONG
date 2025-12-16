import { useState } from 'react';
import { Data } from './noticiaData';
import './NoticiaCSS.css';

export default function Noticias() {
    const [busca, setBusca] = useState('');
    const [index, setIndex] = useState(0);

    const filtradas = Data.filter(n =>
        n.titulo.toLowerCase().includes(busca.toLowerCase())
    );

    const next = () => {
        if (filtradas.length > 0) {
            setIndex((index + 1) % filtradas.length);
        }
    };

    const prev = () => {
        if (filtradas.length > 0) {
            setIndex((index - 1 + filtradas.length) % filtradas.length);
        }
    };

    return (
        <div className='noticias-container'>
            <h2 className='noticias-header'>Últimas Notícias</h2>

            <input
                type="text"
                placeholder="Procure por algo interessante"
                value={busca}
                onChange={e => setBusca(e.target.value)}
                className='barra-busca'
            />

            {filtradas.length > 0 ? (
                <>
                    <div className="carrossel">
                        <button onClick={prev} className="btn">{'<'}</button>

                        <div className="card">
                            <h3>{filtradas[index].titulo}</h3>
                            <p>{filtradas[index].descricao}</p>
                            <a href={filtradas[index].url} target="_blank">Ler mais</a>
                        </div>

                        <button onClick={next} className="btn">{'>'}</button>
                    </div>
                </>
            ) : (
                <p>Nada encontrado.</p>
            )}
        </div>
    );
}
