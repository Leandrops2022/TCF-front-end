import { StyledButton, StyledHeader, StyledLogoDiv, StyledMenuButtonDiv, StyledMenuDiv, StyledMenuItem, StyledMenuList, StyledP, StyledSearchDiv } from "./styles";
import { menu } from "./menu";
import { useRef } from "react";

const Header = () => {
    const menuListRef = useRef<HTMLUListElement>(null);

    const showMenu = () => {
        if (menuListRef.current) {
            console.log(menuListRef.current);
            menuListRef.current.style.display = menuListRef.current.style.display === 'block' ?
                'none' : 'block'
        }
    }
    return (
        <StyledHeader>
            <StyledLogoDiv></StyledLogoDiv>
            <StyledSearchDiv></StyledSearchDiv>
            <StyledMenuDiv>
                <StyledMenuButtonDiv>
                    <StyledButton onClick={showMenu} type="button">Menu</StyledButton>
                </StyledMenuButtonDiv>
                <StyledMenuList ref={menuListRef}>
                    {menu.map(item => (<StyledMenuItem key={item.route}><StyledP>{item.route}</StyledP></StyledMenuItem>))}
                </StyledMenuList>
            </StyledMenuDiv>
        </StyledHeader>
    )

}

export default Header;