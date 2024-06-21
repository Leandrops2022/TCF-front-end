import { useLocation } from "react-router-dom";
import HighLightsComponent from "../HightLightsComponent";
import { ArticleContentDiv, ArticleCoverImage, ArticleSkeletonDiv, Container, Content, MainArticleDiv, StyledSideDiv, StyledSideTitle } from "./styles";
import { useEffect, useState } from "react";
import axios from "axios";
import ArticleContentInterface from "../../Interfaces/ArticleContentInterface";

const useQuery = () => {
    let slug = new URLSearchParams(useLocation().search).get('slug');
    let rota = useLocation().pathname;
    return {
        'slug': slug,
        'rota': rota
    }
}

const Article: React.FC = () => {
    const [articleContent, setArticleContent] = useState<ArticleContentInterface>();

    const data = useQuery();

    const basePageUrl = "https://top100filmes.com.br/";

    useEffect(() => {
        let url = `http://localhost:8000/api${data.rota}/show/${data.slug}`;
        console.log(url);

        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                if (response.status === 200) {
                    setArticleContent(response.data);
                } else {
                    console.error('Failed to fetch article:', response.statusText);
                }

            } catch (error) {
                console.error('Error fetching article:', error);
            }


        }

        fetchData();
    }, [data.slug]);

    const content = articleContent?.texto ?? '';

    return (
        <MainArticleDiv>

            {/* <StyleSideDiv>
                <StyledSideTitle>
                    Veja também
                </StyledSideTitle>
                <HighLightsComponent
                    urlToFetch={'http://localhost:8000/api/page/sugestoesDeArtigos'}
                    cardsQuantity={4}
                    gridConfig={{
                        columns: 1,
                        rows: 4
                    }}
                />
            </StyleSideDiv> */}

            {articleContent?.texto ?
                (<ArticleContentDiv>
                    <ArticleCoverImage src={basePageUrl + articleContent?.imagem_capa} alt={articleContent?.alt_capa} />
                    {articleContent?.fonte_capa && <span style={{ fontSize: '0.8rem' }}>Fonte: {articleContent?.fonte_capa}</span>}
                    <h1>{articleContent?.titulo}</h1>
                    <span style={{ fontSize: '1.1rem' }}>{articleContent?.subtitulo}</span>
                    <span>Por: {articleContent?.assinatura}</span>

                    <Container>
                        <Content dangerouslySetInnerHTML={{ __html: content }} />
                    </Container>

                </ArticleContentDiv>)
                : (<ArticleSkeletonDiv>
                    <div style={{ width: '60%', height: '50%', margin: '1rem auto', backgroundColor: 'rgba(0,0,0,0.5)' }}></div>
                    <span style={{ margin: '1rem', borderBottom: '10px solid silver', width: '60%', alignSelf: 'center' }}></span>
                    <span style={{ margin: '1rem', borderBottom: '10px solid silver', width: '60%', alignSelf: 'center' }}></span>
                    <span style={{ margin: '1rem', borderBottom: '10px solid silver', width: '60%', alignSelf: 'center' }}></span>
                    <span style={{ margin: '1rem', borderBottom: '10px solid silver', width: '60%', alignSelf: 'center' }}></span>
                    <span style={{ margin: '1rem', borderBottom: '10px solid silver', width: '60%', alignSelf: 'center' }}></span>

                </ArticleSkeletonDiv>)


            }
            <StyledSideDiv>
                <StyledSideTitle>
                    Veja também
                </StyledSideTitle>

                <HighLightsComponent
                    urlToFetch={'http://localhost:8000/api/page/sugestoesDeTop100'}
                    cardsQuantity={4}
                    gridConfig={{
                        columns: 4,
                        rows: 1
                    }}
                />
            </StyledSideDiv>

        </MainArticleDiv>
    )
}

export default Article;