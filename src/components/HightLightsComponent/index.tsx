import { useEffect, useState } from "react";
import { HighlightMainDiv, HighlightTag, HighlightTagText, HilightItem, HilightLegendDiv, HilightLegendText, SkeletonItem } from "./styles";
import HilightInterface from "../../Interfaces/HighlightInterface";
import axios from "axios";
import { Link } from "react-router-dom";

interface Prop {
    urlToFetch: string;
    cardsQuantity: number;
    gridConfig: {
        columns: number;
        rows: number;
    };
}

const HighLightsComponent = ({ urlToFetch, cardsQuantity, gridConfig = { columns: 4, rows: 2 } }: Prop) => {

    const [highlights, setHighlights] = useState<HilightInterface[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(urlToFetch);
                if (response.status === 200) {
                    setHighlights(response.data);
                } else {
                    console.error('Failed to fetch highlights:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching highlights:', error);
            }
        };

        fetchData();
    }, [urlToFetch]);

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
                    <Link to={`/${element.rota}?url=${encodeURIComponent(element.slug)}`} key={index}>
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