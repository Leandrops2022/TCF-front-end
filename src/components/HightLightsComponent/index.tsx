import { HighlightMainDiv, HighlightTag, HighlightTagText, HilightItem, HilightLegendDiv, HilightLegendText, SkeletonItem } from "./styles";
import HilightInterface from "../../Interfaces/HighlightInterface";
import { Link } from "react-router-dom";

interface Prop {
    highlights: HilightInterface[];
    cardsQuantity: number;
    gridConfig: {
        columns: number;
        rows: number;
    };
}

const HighLightsComponent = ({ highlights, cardsQuantity, gridConfig = { columns: 4, rows: 2 } }: Prop) => {

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
                    <Link to={`/${element.rota}?slug=${encodeURIComponent(element.slug)}`} key={index}>
                        <HilightItem >
                            {element.tag && <HighlightTag>
                                <HighlightTagText>
                                    {element.tag}
                                </HighlightTagText>
                            </HighlightTag>}
                            <img src={'https://top100filmes.com.br/public/' + element.capa} alt={element.alt_capa} style={{ width: '100%', borderRadius: '8px' }} />
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
