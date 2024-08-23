import { CircularProgress } from "@mui/material"
import { LoadingIndicatorDiv } from "./styles";


const LoadingIndicator = () => {
    return <LoadingIndicatorDiv>
    <CircularProgress />
</LoadingIndicatorDiv>
}

export default LoadingIndicator;