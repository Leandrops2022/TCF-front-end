import React from "react";
import { LegalLinks, MainContainer, MainContentDiv, StyledP, StyledSpan, StyledUl } from "./styles";

const Footer: React.FC = () => {

    return <MainContainer>
        <LegalLinks>
            <StyledUl>

                <li>
                    <a target="_blank" href="http://127.0.0.1:8000/policy" role="button"
                        id="politica-privacidade">
                        <div>Política de privacidade</div>
                    </a>
                </li>

                <li>
                    <a target="_blank" href="http://127.0.0.1:8000/terms" role="button"
                        id="condicoes-de-uso">
                        <div>Condições de uso</div>
                    </a>
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