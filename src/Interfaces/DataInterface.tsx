import ActorInterface from "./ActorInterface";
import HilightInterface from "./HighlightInterface";
import MovieDataInterface from "./MovieDataInterface";
import { SearchResultInterface } from "./SearchResultInterface";

interface DataInterface {
    content?: Record<string, any>;
    highlights?: HilightInterface[];
    movies?: any;
    data?: any | SearchResultInterface[];
    poster?: string;
    titulo_portugues?: string;
    ano_lancamento?: string;
    resumo_portugues?: string;
    nota?: string;
    genero: string;
    movieData: MovieDataInterface;
    actorData: ActorInterface;
    current_page?: number;
    first_page_url?: string;
    from?: number;
    last_page?: number;
    last_page_url?: string;
    links?: any[];
    next_page_url?: string | null;
    path?: string;
    per_page?: number;
    prev_page_url?: string | null;
    to?: number;
    total?: number;

}

export default DataInterface;