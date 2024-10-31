import styled from "styled-components";
import SearchIcon from "../../../assets/icons/search.svg";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useCallback, useContext, useRef } from "react";
import { debounce, isEmpty } from "lodash";
import { useDispatch } from "react-redux";
import { fetchSuggestionsStart, fetchSuggestionsSuccess, fetchSuggestionsFailure } from "../../../ReduxStore/autocompleteSlice";
import { MyContext } from "../../../MyContext";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
    const dispatch = useDispatch();
    const abortControllersRef = useRef<AbortController[]>([]);
    const lastSentQueryRef = useRef<string | null>(null);

    const { defaultUrl } = useContext(MyContext);
    const navigate = useNavigate();

    const handleSearchClick = () => {
        const slug = lastSentQueryRef.current || '';
        dispatch(fetchSuggestionsSuccess(null));
        navigate(`/busca/${encodeURI(slug)}`);
    };

    const getAutoComplete = useCallback(debounce((textQuery: string) => {

        const abortController = new AbortController();
        abortControllersRef.current.push(abortController);


        dispatch(fetchSuggestionsStart());

        axios.post(`${defaultUrl}/auto-complete`, {
            textQuery: textQuery
        }, { signal: abortController.signal })
            .then(response => {
                if (response.status === 200 && lastSentQueryRef.current != null) {

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
    }, 300), [dispatch]);

    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value.trim();

        lastSentQueryRef.current = value;

        if (isEmpty(value)) {
            abortControllersRef.current.forEach(controller => controller.abort());
            abortControllersRef.current = []; // Clear the controllers array

            dispatch(fetchSuggestionsSuccess(null));
            lastSentQueryRef.current = null;


        } else {

            if (value.length % 3 === 0) {
                getAutoComplete(value);
            }
        }

    }

    return (
        <StyledDiv>
            <StyledInput
                type="text"
                onChange={handleTextChange}
                onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                        handleSearchClick();
                    }
                }}

            />
            <StyledSearchButton onClick={handleSearchClick}>
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
