import styled from "styled-components";
import SearchIcon from "../../../assets/icons/search.svg";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useCallback, useRef, useState } from "react";
import { debounce, isEmpty } from "lodash";
import { useDispatch } from "react-redux";
import { fetchSuggestionsStart, fetchSuggestionsSuccess, fetchSuggestionsFailure } from "../../../ReduxStore/autocompleteSlice";

const SearchBar = () => {
    const dispatch = useDispatch();
    const abortControllersRef = useRef<AbortController[]>([]);
    const [lastQuery, setLastQuery] = useState<string | null>(null);

    const getAutoComplete = useCallback(debounce((textQuery: string) => {

        const abortController = new AbortController();
        abortControllersRef.current.push(abortController);

        dispatch(fetchSuggestionsStart());
        axios.post('http://localhost:8000/api/auto-complete', {
            textQuery: textQuery
        }, { signal: abortController.signal })
            .then(response => {
                if (response.status === 200 && !isEmpty(lastQuery)) {
                    dispatch(fetchSuggestionsSuccess(response.data));
                }
            })
            .catch(error => {
                if (axios.isCancel(error)) {
                    console.log("Request canceled:", error.message);
                } else {
                    dispatch(fetchSuggestionsFailure(error.message))
                }
            })
            .finally(() => {
                abortControllersRef.current = abortControllersRef.current.filter(ctrl => ctrl !== abortController);
            });
    }, 300), [dispatch, lastQuery]);

    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value.trim();

        if (isEmpty(value)) {
            abortControllersRef.current.forEach(controller => controller.abort());
            abortControllersRef.current = []; // Clear the controllers array

            dispatch(fetchSuggestionsSuccess(null));
            setLastQuery(null);

        } else {
            setLastQuery(prevQuery => {
                if (value.length % 2 === 0) {
                    console.log('fazendo requisição...');
                    getAutoComplete(value);
                }
                return value;
            });
        }

    }

    return (
        <StyledDiv>
            <StyledInput type="text" onChange={handleTextChange} />
            <StyledSearchButton>
                <FontAwesomeIcon icon={faSearch} />
            </StyledSearchButton>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    display:flex;
    flex-direction:row;
    align-self:center;
    justify-self:center;
    width: 50%;
    @media screen and (max-width: 900px) {
        width:80%;
    }
`;

const StyledInput = styled.input`
    width: 95%;
    border:none;
    border-radius:5px 0 0 5px;
    background-color:gray;
    color:whitesmoke;
    padding:.5rem;
    &:focus {
        outline:none;
    }
    
`;

const StyledSearchButton = styled.button`
    width: 3rem;
    height:fit-content;
    padding:0.5rem;
    border:none;
    border-radius:0 5px 5px 0;
    background-image: url(${SearchIcon});
    background-position:center;
    background-size:contain;
    background-repeat:no-repeat;
    border:1px solid silver;
`;

export default SearchBar;
