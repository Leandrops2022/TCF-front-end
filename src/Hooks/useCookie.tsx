import { useState } from 'react';

// Hook for managing cookies
const useCookie = (cookieName: string) => {
    // Function to get the cookie value
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

    // State to track the cookie value
    const [cookieValue, setCookieValue] = useState<string | null>(() => getCookie(cookieName));

    // Function to set the cookie
    const setCookie = (value: string, days: number) => {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        const expires = "expires=" + date.toUTCString();
        document.cookie = `${cookieName}=${value}; ${expires}; path=/`;

        // Update the state to reflect the new cookie value
        setCookieValue(value);
    };

    return [cookieValue, setCookie] as const;
};

export default useCookie;
