import HilightInterface from "./HighlightInterface";

export interface HighlightsComponentInterface {
    highlights: HilightInterface[];
    cardsQuantity: number;
    gridConfig: {
        columns: number;
        rows: number;
    };
}