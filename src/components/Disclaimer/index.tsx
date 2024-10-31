import { useEffect, useState } from "react";
import { ConfirmationButton, ConfirmationButtonsDiv, ModalDiv, StyledDialogBox } from "./styles"
import useCookie from "../../Hooks/useCookie";

const Disclaimer = () => {
    const [showingDialog, setShowingDialog] = useState<boolean>(true);
    const [ageCookie, setAgeCookie] = useCookie('ageCookie');

    const handleAgreement = () => {
        setAgeCookie('true', 365);
        setShowingDialog(false);

    };

    useEffect(() => {
        if (!ageCookie) {
            setShowingDialog(true);
        } else {
            setShowingDialog(false);
        }
    }, [ageCookie]);

    return <>
        {showingDialog &&
            <ModalDiv>
                <StyledDialogBox>
                    <h1 className={"text-center"}>Aviso!</h1>
                    <span className={"text-center"}>O Site Top100Filmes pode conter conteúdo não apropriado para menores de 18 anos, confirme a sua idade: </span>
                    <ConfirmationButtonsDiv >

                        <ConfirmationButton onClick={() => handleAgreement()}>Tenho 18 anos ou mais</ConfirmationButton>
                        <ConfirmationButton onClick={() => window.location.href = "https://www.google.com.br"} >Tenho menos de 18 anos</ConfirmationButton>

                    </ConfirmationButtonsDiv>

                </StyledDialogBox>
            </ModalDiv>

        }
    </>

}
export default Disclaimer;