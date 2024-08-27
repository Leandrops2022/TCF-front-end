import HilightInterface from "./HighlightInterface";

interface DataInterface {
    content?: Record<string, any>;  
    highlights?: HilightInterface[]; 
    movies?: any; 
    data?: any;  
    poster?:string;   
    titulo_portugues?:string;
    ano_lancamento?:string;   
    resumo_portugues?:string;
    nota?:string;   
    genero:string;
}

export default DataInterface;