import React from "react";
import { LegalLinks, MainContainer, MainContentDiv, StyledP, StyledSpan, StyledUl } from "./styles";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {

    return <MainContainer>
        <LegalLinks>
            <StyledUl>

                <li>
                    <Link to={"/policy"}
                        id="politica-privacidade">
                        <div>Política de privacidade</div>
                    </Link>
                </li>

                <li>
                    <Link to={"/terms"}
                        id="condicoes-de-uso">
                        <div>Condições de uso</div>
                    </Link>
                </li>


            </StyledUl>
        </LegalLinks>

        <MainContentDiv>
            <StyledP>
                Todas as imagens utilizadas são de propriedade dos seus respectivos donos, e seu uso está
                restrito às permissões concedidas para fins de divulgação.
            </StyledP>
            <StyledSpan>
                &copy; 2024, Dominionlps. Todos os direitos reservados
            </StyledSpan>
            <StyledSpan>versão atual r0.9</StyledSpan>

        </MainContentDiv>



    </MainContainer>
}

export default Footer;