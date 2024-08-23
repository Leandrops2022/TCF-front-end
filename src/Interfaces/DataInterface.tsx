import HilightInterface from "./HighlightInterface";

interface DataInterface {
    content?: Record<string, any>;  
    highlights?: HilightInterface[]; 
    movies?: any;         
}

export default DataInterface;