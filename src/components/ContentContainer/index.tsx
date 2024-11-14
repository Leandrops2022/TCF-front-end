import { useContext } from "react"
import { CoverDiv, CoverImg, MainContainer, MainContentDiv, TextContentDiv, Title } from "./styles"
import { MyContext } from "../../MyContext"
import Iframe from "../Iframe";


const ContentContainer: React.FC<{ data: Record<string, any> }> = ({ data }) => {
    const { defaultOfficialUrl } = useContext(MyContext);

    return <MainContainer>
        <CoverDiv>
            <CoverImg src={`${defaultOfficialUrl}/public/${data.imgSrc}`} alt={data.imgAlt} />
        </CoverDiv>

        <TextContentDiv>
            <Title>{data.title}</Title>
            <span className={"text-xs"}>Por redação </span>{data.created_at && <span className={"text-xs"}>em {data.created_at}</span>}
            <br /><br />

            <MainContentDiv dangerouslySetInnerHTML={{ __html: data.content }} />
        </TextContentDiv>
        {data?.trailer && <Iframe src={data.trailer} />}


    </MainContainer>
}

export default ContentContainer;