import homeIcon from "../../assets/icons/home.svg";
import top100Icon from "../../assets/icons/top100.svg";
import bestOf2023Icon from "../../assets/icons/trophy.svg";
import listsIcon from "../../assets/icons/lista.svg";
import articlesIcon from "../../assets/icons/newspaper.svg";
import newsIcon from "../../assets/icons/noticias.svg";
import quizIcon from "../../assets/icons/test.svg";
import aboutUsIcon from "../../assets/icons/quemsomos.svg";
import otherTop10 from "../../assets/icons/star-sharp.svg";


interface MenuProps {
    route: string;
    link: string;
    icon: string;
}


export const menu: MenuProps[] = [
    { 'route': 'Home', 'link': '/', 'icon': homeIcon },
    { 'route': 'Melhores de 2023', 'link': 'melhores-filmes-do-ano-passado', 'icon': bestOf2023Icon },
    { 'route': 'Top 100 melhores', 'link': 'top100/melhores', 'icon': top100Icon },
    { 'route': 'Outros Top 100', 'link': 'melhores-por-genero', 'icon': otherTop10 },
    { 'route': 'Listas', 'link': 'minilistas', 'icon': listsIcon },
    { 'route': 'Artigos', 'link': 'artigos', 'icon': articlesIcon },
    { 'route': 'Noticias', 'link': 'noticias', 'icon': newsIcon },
    { 'route': 'Quiz', 'link': 'quiz', 'icon': quizIcon },
    { 'route': 'Quem Somos', 'link': 'quem-somos', 'icon': aboutUsIcon },
];