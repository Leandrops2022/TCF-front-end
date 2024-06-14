import { StyledButton, StyledHeader, StyledLogo, StyledLogoDiv, StyledMenuButtonDiv, StyledMenuDiv, StyledMenuItem, StyledMenuList, StyledP, StyledSearchDiv } from "./styles";
import { menu } from "./menu";
import { useRef } from "react";
import TCFLogo from "../../assets/logos/TCFLogoSite.svg";
import { Link } from "react-router-dom";
import MenuButton from "../../assets/icons/menu.svg";

const Header = () => {
    const menuListRef = useRef<HTMLUListElement>(null);

    const showMenu = () => {
        if (menuListRef.current) {
            console.log(menuListRef.current);
            menuListRef.current.style.display = menuListRef.current.style.display === 'block' ?
                'none' : 'block'
        }
    }
    return <>
        <StyledHeader>
            <StyledLogoDiv>
                <Link to={'/'}>
                    <StyledLogo src={TCFLogo} /></Link>
            </StyledLogoDiv>
            <StyledSearchDiv></StyledSearchDiv>
            <StyledMenuDiv>
                <StyledMenuButtonDiv>
                    <StyledButton onClick={showMenu} type="button"><img src={MenuButton} /></StyledButton>
                </StyledMenuButtonDiv>
            </StyledMenuDiv>
        </StyledHeader>
        <StyledMenuList ref={menuListRef}>
            {menu.map(item => (<StyledMenuItem key={item.route}><StyledP>{item.route}</StyledP></StyledMenuItem>))}
        </StyledMenuList>
    </>



}

export default Header;