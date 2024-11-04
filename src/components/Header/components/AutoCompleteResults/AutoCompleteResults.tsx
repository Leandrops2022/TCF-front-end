import { useEffect, useRef } from "react";
import { SuggestionInterface } from "../../../../Interfaces/SuggestionInterface";
import { fetchSuggestionsSuccess } from "../../../../ReduxStore/autocompleteSlice";
import { StyledLink } from "../../styles";
import { ResultsContainer } from "./styles";
import { useDispatch, useSelector } from "react-redux";

const AutoCompleteResults = () => {
    const suggestions = useSelector((state: any) => state.autocomplete.suggestions);
    const dispatch = useDispatch();

    const resultsRef = useRef<HTMLDivElement | null>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (resultsRef.current && !resultsRef.current.contains(event.target as Node)) {
            dispatch(fetchSuggestionsSuccess(null));
        }
    };


    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);


    return <ResultsContainer ref={resultsRef}>
        <ul>
            {suggestions.map((suggestion: SuggestionInterface, index: number) => {

                return <li key={index}>
                    <StyledLink
                        to={`/${suggestion.rota}/${suggestion.slug}`}
                        onClick={() => {
                            dispatch(fetchSuggestionsSuccess(null));

                        }}
                    >
                        {suggestion.nome}<span className="text-xs">({suggestion.tag})</span>
                    </StyledLink>

                </li>
            })}
        </ul>
    </ResultsContainer>
}

export default AutoCompleteResults;