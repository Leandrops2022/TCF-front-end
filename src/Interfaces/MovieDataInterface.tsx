import ActorInterface from "./ActorInterface";
import { WhereToWatchInterface } from "./WhereToWatchInterface";

interface MovieDataInterface {
    tmdb_id: String,
    titulo_portugues: string,
    resumo_portugues: string,
    ano_lancamento: string,
    genero_1: string,
    genero_2: string,
    genero_3: string,
    nota: string,
    poster: string,
    poster_fallback: string,
    poster_mobile: string,
    tagline: string,
    trailer: string,
    videos: string[],
    atores: ActorInterface[],
    onde_assistir: WhereToWatchInterface[]

}

export default MovieDataInterface;