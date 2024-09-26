import { useEffect } from "react";
import useFetchUrl from "../../Hooks/useFetchUrl";
import { AllTop100Div } from "./styles/styles";



const Top100List: React.FC = () => {
    const { data, loading, error } = useFetchUrl('melhores-por-genero');

    // useEffect(()=>{
    //     console.log(data);
    // },[])

    return <AllTop100Div>
        <h1>Melhores filmes por gênero</h1>
        <ul>
            {data?.map((element: any, index: number) => {
                if (index == 0) return;
                return <li key={index}>
                    <img src={`https://www.top100filmes.com.br/${element.capa}`} alt="" />
                </li>
            })}
        </ul>

    </AllTop100Div>
}

export default Top100List;

