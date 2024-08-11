export interface AutocompleteState {
    suggestions: string[];
    loading: boolean;
    error: string | null;
}