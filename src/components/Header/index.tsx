import {
    StyledButton,
    StyledHeader,
    StyledIcon,
    StyledLink,
    StyledLogo,
    StyledLogoDiv,
    StyledMenuButtonDiv,
    StyledMenuDiv,
    StyledMenuItem,
    StyledMenuList,
    StyledP,
    StyledSearchDiv
} from "./styles";
import { menu } from "./menu";
import TCFLogo from "../../assets/logos/TCFLogoSite.svg";
import { Link } from "react-router-dom";
import MenuButton from "../../assets/icons/menu.svg";
import SearchBar from "./components/SearchBar";
import { MyContext } from "../../MyContext";
import { useContext } from "react";


const Header = () => {
    const { showingMenu, showMenu, hideMenu } = useContext(MyContext);

    return <>
        <StyledHeader>

            <StyledLogoDiv>
                <Link to={'/'}>
                    <StyledLogo src={TCFLogo} /></Link>
            </StyledLogoDiv>

            <StyledSearchDiv>
                <SearchBar />
            </StyledSearchDiv>

            <StyledMenuDiv>
                <StyledMenuButtonDiv>
                    <StyledButton onClick={showingMenu ? hideMenu : showMenu} type="button"><img src={MenuButton} /></StyledButton>
                </StyledMenuButtonDiv>
            </StyledMenuDiv>

        </StyledHeader>

        <StyledMenuList style={{ display: showingMenu ? 'block' : 'none' }}>
            {menu.map(item => (

                <StyledMenuItem key={item.route}>
                    <StyledLink to={item.link} >
                        <StyledIcon src={item.icon} />
                        <StyledP>{item.route}</StyledP>
                    </StyledLink>
                </StyledMenuItem>

            ))}
        </StyledMenuList>
    </>



}

export default Header;