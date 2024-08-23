import { HighlightMainDiv, HighlightTag, HighlightTagText, HilightCover, HilightItem, HilightLegendDiv, HilightLegendText, SkeletonItem } from "./styles";
import { Link } from "react-router-dom";
import { HighlightsComponentInterface } from "../../Interfaces/HighlightsComponentInterface";



const HighLightsComponent = ({ highlights, cardsQuantity, gridConfig = { columns: 4, rows: 2 } }: HighlightsComponentInterface) => {

    const { columns, rows } = gridConfig;
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
                    <Link to={`/${element.rota}/${encodeURIComponent(element.slug)}`} key={index} onClick={()=>{
                        window.scrollTo({ top: 0, behavior: 'instant' });
                    }}>
                        <HilightItem >
                            {element.tag && <HighlightTag>
                                <HighlightTagText>
                                    {element.tag}
                                </HighlightTagText>
                            </HighlightTag>}
                            <HilightCover src={'https://top100filmes.com.br/public/' + element.capa} alt={element.alt_capa} style={{ width: '100%', borderRadius: '8px' }} />
                            <HilightLegendDiv>
                                <HilightLegendText>
                                    {element.titulo}
                                </HilightLegendText>
                            </HilightLegendDiv>
                        </HilightItem>
                    </Link>
                )))
            }
        </HighlightMainDiv>
    );
}

export default HighLightsComponent;
