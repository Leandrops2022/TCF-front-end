import HighLightsComponent from "../HightLightsComponent";
import { ArticleSkeletonDiv, MainArticleDiv, StyledSideDiv, StyledSideTitle } from "./styles";
import useFetchUrl from "../../Hooks/useFetchUrl";
import ContentContainer from "../ContentContainer";
import { useLocation } from "react-router-dom";
import DisqusComponent from "../DisqusComponent";


const Article: React.FC = () => {


    const location = useLocation();
    const pathSegments = location.pathname.split('/');

    const segment = pathSegments[1];

    const { data } = useFetchUrl(segment);

    let content = data?.content;
    let highlights = data?.highlights ?? [];

    return (
        <MainArticleDiv>

            {content ?
                <ContentContainer data={data?.content || {}} />
                : (<ArticleSkeletonDiv>
                    <div style={{ width: '60%', height: '50%', margin: '1rem auto', backgroundColor: 'rgba(0,0,0,0.5)' }}></div>
                    {
                        Array.from({ length: 5 }).map((_element, index) => (
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
            <DisqusComponent />
        </MainArticleDiv>
    )
}

export default Article;