import { useLocation } from "react-router-dom"
import useFetchUrl from "../../Hooks/useFetchUrl";

const PolicyAndContitions = () => {

    const path = useLocation();

    const pathToFetch = path.pathname.replace('/', '')

    const data = useFetchUrl(pathToFetch);

    return <div>
        {data.data && <div dangerouslySetInnerHTML={{ __html: data.data }}></div>}
    </div>


}

export default PolicyAndContitions;