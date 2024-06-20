import { Outlet } from "react-router-dom"
import { StyledDiv } from "./styles";
import { useContext } from "react";
import { MyContext } from "../../MyContext";
import React from "react";


const Main: React.FC = () => {
    const { showingMenu, hideMenu } = useContext(MyContext);

    const checkShowingStatus = () => {
        if (showingMenu) {
            hideMenu()
        }
    }

    return (
        <StyledDiv onTouchMove={checkShowingStatus} onClick={checkShowingStatus}>
            <Outlet />
        </StyledDiv>
    )
}

export default Main;