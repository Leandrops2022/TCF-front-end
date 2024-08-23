import { useContext } from "react"
import { CoverDiv, CoverImg, MainContainer, TextContentDiv, Title } from "./styles"
import { MyContext } from "../../MyContext"
import Iframe from "../Iframe";


const ContentContainer:React.FC<{ data:  Record<string, any> }> = ({data}) => {
    const { defaultOfficialUrl } = useContext(MyContext);
    
    return <MainContainer>
           <CoverDiv>
                <CoverImg src={`${defaultOfficialUrl}/${data.imgSrc}`} alt={data.imgAlt} />
            </CoverDiv>

            <Title>{data.title}</Title>

             <TextContentDiv dangerouslySetInnerHTML={{ __html: data.content }} />
             {data?.trailer && <Iframe src={data?.trailer}/>}
                
    </MainContainer>
}

export default ContentContainer;