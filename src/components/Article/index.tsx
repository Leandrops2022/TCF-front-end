import HighLightsComponent from "../HightLightsComponent";
import { ArticleContentDiv, ArticleCoverImage, ArticleSkeletonDiv, Container, Content, MainArticleDiv, StyledSideDiv, StyledSideTitle } from "./styles";
import { useContext } from "react";
import { MyContext } from "../../MyContext";
import useFetchUrl from "../../Hooks/useFetchUrl";
import Iframe from "../Iframe";
import ContentContainer from "../ContentContainer";


const Article: React.FC = () => {

    const { defaultOfficialUrl } = useContext(MyContext);

    const { data } = useFetchUrl('artigos');

    let content = data?.content;
    let highlights = data?.highlights ?? [];

    return (
        <MainArticleDiv>

            {content ?
                <ContentContainer data={data?.content || {}} />
                : (<ArticleSkeletonDiv>
                    <div style={{ width: '60%', height: '50%', margin: '1rem auto', backgroundColor: 'rgba(0,0,0,0.5)' }}></div>
                    {
                        Array.from({ length: 5 }).map((element, index) => (
                            <span key={index} style={{ margin: '1rem', borderBottom: '10px solid silver', width: '60%', alignSelf: 'center' }}></span>
                        ))
                    }

                </ArticleSkeletonDiv>)


            }
            <StyledSideDiv>
                <StyledSideTitle>
                    Veja também
                </StyledSideTitle>

                {highlights.length > 0 && <HighLightsComponent
                    highlights={highlights}
                    cardsQuantity={4}
                    gridConfig={{
                        columns: 4,
                        rows: 1
                    }}
                />
                }

            </StyledSideDiv>

        </MainArticleDiv>
    )
}

export default Article;