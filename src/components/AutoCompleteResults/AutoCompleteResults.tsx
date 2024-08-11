import { ResultsContainer } from "./styles";
import { useSelector } from "react-redux";

const AutoCompleteResults = () => {

    const suggestions = useSelector((state: any) => state.autocomplete.suggestions);

    return <ResultsContainer>
        <ul>
            {suggestions.map((suggestion: string, index: number) => {

                return <li className="text-slate-950" key={index}>{suggestion}</li>
            })}
        </ul>
    </ResultsContainer>;
}

export default AutoCompleteResults;