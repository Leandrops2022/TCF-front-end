import { Outlet } from "react-router-dom"
import { StyledDiv } from "./styles";
import { useContext } from "react";
import { MyContext } from "../../MyContext";

const Main = (): JSX.Element => {
    const { showingMenu, showMenu, hideMenu } = useContext(MyContext);

    return (
        <StyledDiv onClick={() => {
            showingMenu ? hideMenu() : '';
        }}>
            <Outlet />
        </StyledDiv>
    )
}

export default Main;