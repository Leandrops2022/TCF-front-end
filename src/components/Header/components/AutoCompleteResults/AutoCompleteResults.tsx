import { SuggestionInterface } from "../../../../Interfaces/SuggestionInterface";
import { fetchSuggestionsSuccess } from "../../../../ReduxStore/autocompleteSlice";
import { StyledLink } from "../../styles";
import { ResultsContainer } from "./styles";
import { useDispatch, useSelector } from "react-redux";

const AutoCompleteResults = () => {
    const suggestions = useSelector((state: any) => state.autocomplete.suggestions);
    const dispatch = useDispatch();

    const routes: { [key: string]: string } = {
        'detalhesFilme': 'filme',
        'detalhesAtor': 'ator'
    };

    return <ResultsContainer>
        <ul>
            {suggestions.map((suggestion: SuggestionInterface, index: number) => {

                return <li className="text-slate-950" key={index}>
                    <StyledLink className="hover:bg-slate-200	" onClick={()=> {
                        dispatch(fetchSuggestionsSuccess(null));

                    }} to={`/${routes[suggestion.rota]}?title=${suggestion.slug}`}>
                        {suggestion.nome}<span className="text-xs">({suggestion.tag})</span>
                    </StyledLink>
                   
                </li>
            })}
        </ul>
    </ResultsContainer>
}

export default AutoCompleteResults;