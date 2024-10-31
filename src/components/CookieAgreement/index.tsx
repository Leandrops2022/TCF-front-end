import { useState, useEffect } from 'react';
import { Button, Container, Message } from './styles';

const setCookie = (name: string, value: string, days: number) => {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`;
};

const getCookie = (name: string) => {
    const cookieArr = document.cookie.split("; ");
    for (let cookie of cookieArr) {
        const cookiePair = cookie.split("=");
        if (cookiePair[0] === name) {
            return cookiePair[1];
        }
    }
    return null;
};

const CookieDisclaimer = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (!getCookie("cookieConsent")) {
            setIsVisible(true);
        }
    }, []);

    const handleAgree = () => {
        setCookie("cookieConsent", "true", 365);
        setIsVisible(false);
    };

    if (!isVisible) {
        return null;
    }

    return (
        <Container>
            <Message >
                Este site utiliza cookies e tecnologias similares para melhorar navegação e salvar as escolhas do usuário, ao continuar navegando você concorda com a nossa política de cookies.
            </Message>
            <Button onClick={handleAgree}>
                Concordo
            </Button>
        </Container>
    );
};



export default CookieDisclaimer;
