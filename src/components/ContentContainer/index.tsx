import { useContext } from "react"
import { CoverDiv, CoverImg, MainContainer, TextContentDiv, Title } from "./styles"
import { MyContext } from "../../MyContext"
import Iframe from "../Iframe";


const ContentContainer: React.FC<{ data: Record<string, any> }> = ({ data }) => {
    const { defaultOfficialUrl } = useContext(MyContext);

    console.log(`${defaultOfficialUrl}/${data.imgSrc}`);
    return <MainContainer>
        <CoverDiv>
            <CoverImg src={`${defaultOfficialUrl}/public/${data.imgSrc}`} alt={data.imgAlt} />
        </CoverDiv>

        <TextContentDiv>
            <Title>{data.title}</Title>
            {data.created_at && <span className={"text-xs"}>Por redação em {data.created_at}</span>}
            <br /><br />

            <div dangerouslySetInnerHTML={{ __html: data.content }} />
        </TextContentDiv>
        {data?.trailer && <Iframe src={data.trailer} />}


    </MainContainer>
}

export default ContentContainer;