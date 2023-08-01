import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../services/api";
import './filme-info.css';

function Filme(){
    const { id } = useParams();
    const navigation = useNavigate();

    const [filme, setFilme] = useState({ });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadFilmes() {
            await api.get(`/movie/${id}`,{
                params:{
                    api_key: "53397b6c8682720e2de6f3e1fc8dfb12",
                    language: "pt-BR",
                } 
            })
            .then((r)=>{
                setFilme(r.data);
                setLoading(false);
            })
            .catch(()=>{
                console.log("Pagina não encontrada!")
                navigation("/", { replace: true })
                return;
            })
        }
        loadFilmes();

        return() =>{
            console.log("o componente foi desmontado")
        }
    }, [navigation, id])

    if(loading){
        return(
            <div className="filme-info">
                <h2>carregando detalhes...</h2>
            </div>
        )
    }

    return(
    <div className="filme-info">
        <h1>{filme.title}</h1>
        <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />
        
        <h3>Sinopse</h3>
        <span>{filme.overview}</span>
        <strong>Avaliação: {filme.vote_average.toFixed(1)} / 10</strong>
        
        <div className="area-button">
            <button>Salvar</button>
                <a target="_blank" rel="external" href={ `https://youtube.com/results?search_query=${filme.title} Trailer` }>
                    <button>Trailer</button>
                    </a>
        </div>
    </div>
    )
}

export default Filme;