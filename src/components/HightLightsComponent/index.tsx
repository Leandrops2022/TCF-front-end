import { HighlightMainDiv, HighlightTag, HighlightTagText, HilightCover, HilightItem, HilightLegendDiv, HilightLegendText, SkeletonItem, StyledLink, SummaryDiv } from "./styles";
import { HighlightsComponentInterface } from "../../Interfaces/HighlightsComponentInterface";
import { useContext } from "react";
import { MyContext } from "../../MyContext";



const HighLightsComponent = ({ highlights, cardsQuantity, gridConfig = { columns: 4, rows: 2 } }: HighlightsComponentInterface) => {

    const { columns, rows } = gridConfig;

    const { defaultOfficialUrl } = useContext(MyContext);

    return (
        <HighlightMainDiv style={{
            '--columns': columns,
            '--rows': rows
        } as React.CSSProperties}>
            {highlights.length === 0 ?
                (Array(cardsQuantity).fill(cardsQuantity).map((_, index) => (
                    <SkeletonItem key={index} />
                )))
                : (highlights.map((element, index) => (
                    <StyledLink to={`/${element.rota}s/${encodeURIComponent(element.slug)}`} key={index} onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'instant' });
                    }}>
                        <HilightItem >
                            {element.tag && <HighlightTag>
                                <HighlightTagText>
                                    {element.tag}
                                </HighlightTagText>
                            </HighlightTag>}
                            <HilightCover src={element.capa ?
                                `${defaultOfficialUrl}/public/${element.capa}`
                                : `${defaultOfficialUrl}/public/${element.imagem}`} alt={element.alt_capa} />
                            <HilightLegendDiv>
                                <HilightLegendText>
                                    {element.titulo}
                                </HilightLegendText>
                            </HilightLegendDiv>
                        </HilightItem>
                        {element.texto && <SummaryDiv dangerouslySetInnerHTML={{ __html: `${element.texto}...` }}>
                        </SummaryDiv>}
                    </StyledLink>
                )))
            }
        </HighlightMainDiv>
    );
}

export default HighLightsComponent;
