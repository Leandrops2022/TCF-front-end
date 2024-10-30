import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { DisqusDiv } from "./styles";

const DisqusComponent = () => {
    const location = useLocation();
    const pathName = location.pathname;

    console.log(pathName)
    useEffect(() => {
        var disqus_config = function (this: any) {
            this.page.url = window.location.href;
            this.page.identifier = pathName;
        };

        (function () {
            const currentDate = new Date();
            const timestamp = currentDate.toISOString();
            var d = document,
                s = d.createElement('script');
            s.src = 'https://top100filmes.disqus.com/embed.js';
            s.setAttribute('data-timestamp', timestamp);
            (d.head || d.body).appendChild(s);
        })();
    }, [pathName]);

    return <DisqusDiv>

        <div id="disqus_thread"></div>

        <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
    </DisqusDiv>
}

export default DisqusComponent;