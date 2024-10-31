import { SearchResultInterface } from "../../../Interfaces/SearchResultInterface";
import LoadingIndicator from "../../LoadingIndicator";
import { ImageDiv, MainSearchResultsDiv, ResultContentDiv, StyledImage, StyledLi, StyledLink, StyledPagination, StyledStack, StyledUL, TagDiv } from "../styles";

const ResultsList: React.FC<{ data: SearchResultInterface[] | undefined; loading: boolean; paginationData: any; onPageChange: (event: React.ChangeEvent<unknown>, value: number) => void }> = ({ data, loading, paginationData, onPageChange }) => {
    if (loading) {
        return <LoadingIndicator />;
    }

    return (
        <MainSearchResultsDiv>
            <h1>Resultados da busca: </h1>
            <StyledUL>
                {data && data.length > 0 && data.map((result, index) => (
                    <StyledLink to={`/${result.rota}/${encodeURI(result.slug)}`} key={index}>
                        <StyledLi>
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
                ))}
            </StyledUL>

            <StyledStack spacing={2}>
                <StyledPagination
                    count={paginationData.last_page}
                    page={paginationData.current_page}
                    onChange={onPageChange}
                    shape="rounded"
                    color="primary"
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
    );
};



export default ResultsList;
