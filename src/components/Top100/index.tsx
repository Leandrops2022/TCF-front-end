import styled from "styled-components";


const Top100 = () => {
    return (<StyledTop100Div>
        <p>this is the top100 component</p>
    </StyledTop100Div>);
}

export default Top100;

const StyledTop100Div = styled.div`
    background-color: var(--background-color);
`;