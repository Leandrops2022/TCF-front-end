import { CardInterface } from "../../../Interfaces/CardInterface";
import { CardCover, CardLegendDiv, MainDiv } from "./styles";



const SectionCard = ({ imgUrl, imgAlt, legend }: CardInterface) => {

    return <MainDiv>
        <CardCover src={imgUrl}
            alt={imgAlt} />
        <CardLegendDiv >
            <p>{legend}</p>
        </CardLegendDiv>

    </MainDiv>
}

export default SectionCard;