import { useParams } from "react-router-dom";
import { ImageDiv, MainSearchResultsDiv, ResultContentDiv, StyledImage, StyledLi, StyledLink, StyledPagination, StyledStack, StyledUL, TagDiv } from "./styles";
import { SearchResultInterface } from "../../Interfaces/SearchResultInterface";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../MyContext";
import axios from "axios";
import LoadingIndicator from "../LoadingIndicator";

const Searchresults = () => {
    const [paginationData, setPaginationData] = useState({
        current_page: 1,
        last_page: 1,
        total: 0,
    });

    const [data, setData] = useState<SearchResultInterface[]>();
    const [previousSlug, setPreviousSlug] = useState<string | undefined>('');
    const [loading, setLoading] = useState<boolean>(true);
    const { defaultUrl } = useContext(MyContext);

    const params = useParams();

    const fetchData = async (page: number) => {
        try {
            const response = await axios.get(`${defaultUrl}/busca/${params.slug}?page=${page}`);
            setData(response.data.data);
            setPaginationData(response.data.pagination);
            setLoading(false);

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        setLoading(true);

        fetchData(1);

    }, [params.slug]);


    const handlePageChange = (event, value) => {
        scrollTo(0, 0);
        setLoading(true);
        setPaginationData((prev) => ({ ...prev, current_page: value }));
        fetchData(value);

    };

    const ReturnComponent: React.FC = () => {
        if (loading) {
            return (<LoadingIndicator />);
        }

        return <MainSearchResultsDiv>
            <h1>Resultados da busca: </h1>
            <StyledUL>
                {data && data.length > 0 && data.map((result: SearchResultInterface, index: number) => {
                    return <StyledLink to={`/${result.rota}/${encodeURI(result.slug)}`} key={index}>
                        <StyledLi >
                            <ImageDiv>
                                <StyledImage src={result.imagem} alt="" />
                            </ImageDiv>
                            <ResultContentDiv>
                                <p>{result.nome}</p>
                                <p>({result.data})</p>
                                <TagDiv>{result.tag}</TagDiv>
                            </ResultContentDiv>
                        </StyledLi>
                    </StyledLink>
                })}
            </StyledUL>

            <StyledStack spacing={2} >
                <StyledPagination
                    count={paginationData.last_page}
                    page={paginationData.current_page}
                    onChange={handlePageChange}
                    shape="rounded"
                    color={'primary'}
                    sx={{
                        '& .MuiPaginationItem-root': {
                            color: 'silver',
                        },
                        '& .MuiPaginationItem-ellipsis': {
                            color: 'silver',
                        },
                    }}
                />
            </StyledStack>
        </MainSearchResultsDiv>
    }

    return <ReturnComponent />

    //     return <MainSearchResultsDiv>
    //     <h1>Resultados da busca: </h1>
    //     <StyledUL>
    //         {data && data.length > 0 && data.map((result: SearchResultInterface, index: number) => {
    //             return <StyledLink to={`/${result.rota}/${encodeURI(result.slug)}`} key={index}>
    //                 <StyledLi >
    //                     <ImageDiv>
    //                         <StyledImage src={result.imagem} alt="" />
    //                     </ImageDiv>
    //                     <ResultContentDiv>
    //                         <p>{result.nome}</p>
    //                         <p>({result.data})</p>
    //                         <TagDiv>{result.tag}</TagDiv>
    //                     </ResultContentDiv>
    //                 </StyledLi>
    //             </StyledLink>
    //         })}
    //     </StyledUL>

    //     <StyledStack spacing={2} >
    //         <StyledPagination
    //             count={paginationData.last_page}
    //             page={paginationData.current_page}
    //             onChange={handlePageChange}
    //             shape="rounded"
    //             color={'primary'}
    //             sx={{
    //                 '& .MuiPaginationItem-root': {
    //                     color: 'silver',
    //                 },
    //                 '& .MuiPaginationItem-ellipsis': {
    //                     color: 'silver',
    //                 },
    //             }}
    //         />
    //     </StyledStack>
    // </MainSearchResultsDiv>
}

export default Searchresults;