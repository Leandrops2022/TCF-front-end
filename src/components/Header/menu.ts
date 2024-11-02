import homeIcon from "../../assets/icons/home.svg";
import top100Icon from "../../assets/icons/top100.svg";
import bestOf2023Icon from "../../assets/icons/trophy.svg";
import listsIcon from "../../assets/icons/lista.svg";
import articlesIcon from "../../assets/icons/newspaper.svg";
import newsIcon from "../../assets/icons/noticias.svg";
import otherTop10 from "../../assets/icons/star-sharp.svg";


interface MenuProps {
    route: string;
    link: string;
    icon: string;
}


export const menu: MenuProps[] = [
    { 'route': 'Home', 'link': '/', 'icon': homeIcon },
    { 'route': 'Melhores de 2023', 'link': 'top100s/anopassado', 'icon': bestOf2023Icon },
    { 'route': 'Melhores de todos tempos', 'link': 'top100s/geral', 'icon': top100Icon },
    { 'route': 'Top100s', 'link': 'top100s', 'icon': otherTop10 },
    { 'route': 'Listas', 'link': 'minilistas', 'icon': listsIcon },
    { 'route': 'Artigos', 'link': 'artigos', 'icon': articlesIcon },
    { 'route': 'Noticias', 'link': 'noticias', 'icon': newsIcon },

];