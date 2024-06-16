import styled from "styled-components"
import SearchIcon from "../../../assets/icons/search.svg";
import axios from "axios";

const SearchBar = () => {

    const getAutoComplete = () => {
        axios.get('http://localhost:8000/api/getAutoComplete')
            .then(response => {
                if (response.status === 200) {
                    return response.data;
                }
            })
            .then(data => console.log(data))
            .catch(error => console.log('There was an error completing the requisition - ' + error.message))
    }

    return (
        <StyledDiv>
            <StyledInput type="text" onClick={getAutoComplete} />
            <StyledSearchButton></StyledSearchButton>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    display:flex;
    flex-direction:row;
    align-self:center;
    justify-self:center;
    width:80%;
`;

const StyledInput = styled.input`
    width: 90%;
    border:none;
    border-radius:5px 0 0 5px;
    background-color:gray;
    color:whitesmoke;
    padding:.5rem;
    &:focus {
        outline:none;
    }
    &:hover {
        cursor: pointer;
    }
`;

const StyledSearchButton = styled.button`
    width: 3rem;
    height:2rem;
    border:none;
    border-radius:0 5px 5px 0;
    background-image: url(${SearchIcon});
    background-position:center;
    background-size:contain;
    background-repeat:no-repeat;
`;

export default SearchBar;