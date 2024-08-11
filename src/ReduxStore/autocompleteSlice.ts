import { createSlice } from "@reduxjs/toolkit";
import { AutocompleteState } from "../Interfaces/AutoCompleteStateInterface";

const initialState: AutocompleteState = {
    suggestions: [],
    loading: false,
    error: null,
};

const autocompleteSlice = createSlice({
    name: 'autocomplete',
    initialState,
    reducers: {
        fetchSuggestionsStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchSuggestionsSuccess: (state, action) => {
            state.loading = false;
            state.suggestions = action.payload;
            state.error = null;
        },
        fetchSuggestionsFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload
        },
    },
});

export const { fetchSuggestionsStart, fetchSuggestionsSuccess, fetchSuggestionsFailure } = autocompleteSlice.actions;
export default autocompleteSlice.reducer;