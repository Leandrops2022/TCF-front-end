import HilightInterface from "./HighlightInterface";

interface DataInterface {
    content?: Record<string, any>;  
    highlights?: HilightInterface[]; 
    movies?: any; 
    data?: any;  
    poster?:string;      
}

export default DataInterface;