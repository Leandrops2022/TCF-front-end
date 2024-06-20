import { useLocation } from "react-router-dom";
import HighLightsComponent from "../HightLightsComponent";
import { MainArticleDiv, StyleSideDiv, StyledSideTitle } from "./styles";
import { useEffect, useState } from "react";
import axios from "axios";
import ArticleContentInterface from "../../Interfaces/ArticleContentInterface";

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
}

const Article: React.FC = () => {
    const [articleContent, setArticleContent] = useState<ArticleContentInterface>();

    const query = useQuery();
    const slug = query.get('url');

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/article/show/${slug}`);
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
    }, [slug]);

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

            <p>{articleContent?.titulo}</p>

            <StyleSideDiv>
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
            </StyleSideDiv>


        </MainArticleDiv>
    )
}

export default Article;