import { useContext } from 'react';
import { MyContext } from '../../MyContext';
import { ArticleContainer, CoverContainer, CoverImg, MainContainer, StyledIframe } from './styles';
import DisqusComponent from '../DisqusComponent';

const OscarWinners = () => {

    const { defaultOfficialUrl } = useContext(MyContext);

    const winnersList = [
        "Melhor filme: Oppenheimer",
        "Melhor diretor: Christopher Nolan – Oppenheimer",
        "Melhor atriz: Emma Stone – Pobres Criaturas",
        "Melhor ator: Cillian Murphy - Oppenheimer",
        "Melhor atriz coadjuvante: Da’Vine Joy Randolph - Os Rejeitados",
        "Melhor ator coadjuvante: Robert Downey Jr. - Oppenheimer",
        "Melhor roteiro original: Anatomia de Uma Queda— Justin Triet, Arthur Harari",
        "Melhor roteiro adaptado: American Fiction - Cord Jefferson",
        "Melhor edição: Oppenheimer",
        "Melhor filme estrangeiro: Zona de Interesse",
        "Melhor animação: O Menino e a Garça",
        "Melhor curta-metragem de animação: War Is Over! Inspired by the Music of John & Yoko - Dace Mullins, Brad Booker",
        "Melhor maquiagem e penteados: Pobres Criaturas",
        "Melhor design de produção: Pobres Criaturas",
        "Melhor design de figurino: Pobres Criaturas",
        "Melhores efeitos visuais: Godzilla Minus One",
        "Melhor documentário: 20 Dias em Mariupol",
        "Melhor documentário de curta-metragem: The Last Repair Shop",
        "Melhor fotografia: Oppenheimer",
        "Melhor curta-metragem: The Wonderful Story of Henry Sugar - Wes Anderson, Steven Rales",
        "Melhor som: Zona de Interesse",
        "Melhor trilha sonora original: Oppenheimer",
        "Melhor canção original: What Was I Made For? - Barbie"
    ];

    return (
        <MainContainer>
            <CoverContainer>
                <CoverImg src={defaultOfficialUrl + '/assets/indicados-oscar-2024/oscars.webp'}
                    alt="Estatuetas do Oscar enfileiradas em um pedestal" />
                <span className='text-xs'>Getty images</span>
            </CoverContainer>

            <ArticleContainer>
                <h1>Confira quem foram os ganhadores do Oscar 2024!</h1>
                <span className='text-sm'>(atualizado em 11/03/2024 por Leandro Soares)</span>
                <br />

                <h2 className="mt-4">E (novamente) para a surpresa de ninguém, já "sabíamos" quem provavelmente iria ganhar</h2>
                <br />
                <p className='leading-5'>
                    Quando escrevi sobre os indicados ao Oscar 2024 há cerca de dois meses, até brinquei que não houve
                    surpresa nenhuma nos nomes indicados, pois teve todo o hype em torno desses filmes, e agora, após a noite da premiação
                    tivemos novamente a confirmação de que todos já sabiam quais seriam os ganhadores.
                </p>
                <br />
                <p className='leading-5'>Eu particularmente não gosto muito de assistir a esses tipos de premiações, só
                    faço algo se realmente tiver necessidade de ser feito, e no caso de assistir a um evento onde todos já sabem
                    qual será o resultado, para mim é perda de tempo. Eu sei, é controverso eu falar isso sobre o maior
                    evento do planeta quando o assunto é cinema, mas, é a verdade 🤷‍♂️.
                </p>
                <br />
                <p className='leading-5'>
                    Agora, se você gosta de ver todo o glamour, e artistas em seus trajes de gala chique e caríssimos, em clima de festa,
                    e toda aquela ambientação do Oscar, aí sim você tem um motivo para assistir ao evento, do contrário, e novamente
                    essa é a minha opinião, você vai sempre achar um "porre" (chato) ter de assistir mais de 3 horas de algo
                    que você já praticamente sabe o resultado.
                </p>
                <br />
                <p className='leading-5'>Claro que como sempre, o evento tem seus pontos altos, e o desse ano acredito que tenha sido
                    John Cena ter apresentado o ganhador de melhor figurino, sem usar um figurino 😂🤣, confira:
                </p>
                <br />
                <StyledIframe
                    src="https://www.youtube.com/embed/-MEi5V-7k7c?si=kOkIyojGOFx2Yu72" title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen></StyledIframe>

                <br />
                <p className='leading-5'>
                    Com relação aos ganhadores, como era de se esperar, Oppenheimer foi o grande vencedor da noite
                    conseguindo levar 7 estatuetas, acredito que ninguém acreditou que seria algo diferente, não é mesmo?
                </p>
                <br />
                <h2 className='mb-4'>Confira os ganhadores das principais categorias:</h2>
                {winnersList.map((winner, index) => (
                    <p className="mb-2 leading-5" key={index}>{winner}</p>
                ))}
            </ArticleContainer>
            <DisqusComponent />
        </MainContainer>
    );
};

export default OscarWinners;
