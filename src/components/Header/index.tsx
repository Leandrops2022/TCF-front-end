import {
    StyledBlackSeparator,
    StyledButton,
    StyledCloseButton,
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
import AutoCompleteResults from "../AutoCompleteResults/AutoCompleteResults";
import { useSelector } from "react-redux";


const Header = () => {
    const suggestions = useSelector((state: any) => state.autocomplete.suggestions);
    const { showingMenu, showMenu, hideMenu } = useContext(MyContext);

    return <>
        <StyledHeader>

            <StyledLogoDiv>
                <Link to={'/'}>
                    <StyledLogo src={TCFLogo} /></Link>
            </StyledLogoDiv>

            <StyledSearchDiv>
                <SearchBar />
                {suggestions && suggestions.length > 0 && <AutoCompleteResults />}
            </StyledSearchDiv>

            <StyledMenuDiv>
                <StyledMenuButtonDiv>
                    <StyledButton onClick={showingMenu ? hideMenu : showMenu} type="button"><img src={MenuButton} /></StyledButton>
                </StyledMenuButtonDiv>
            </StyledMenuDiv>

        </StyledHeader>

        <StyledBlackSeparator style={{ display: showingMenu ? 'block' : 'none' }}>
            <StyledCloseButton onClick={hideMenu}>X</StyledCloseButton>

            <StyledMenuList >

                {menu.map(item => (

                    <StyledMenuItem key={item.route} onClick={hideMenu}>

                        <StyledLink to={item.link} >
                            <StyledIcon src={item.icon} />
                            <StyledP>{item.route}</StyledP>
                        </StyledLink>

                    </StyledMenuItem>

                ))}

            </StyledMenuList>
        </StyledBlackSeparator>

    </>



}

export default Header;