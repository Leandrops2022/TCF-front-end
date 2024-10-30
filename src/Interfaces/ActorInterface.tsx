interface ActorInterface {
    nome: string;
    poster: string;
    personagem?: string;
    ordem_importancia?: number;
    slug: string;
    nascimento: string;
    local_nascimento: string;
    morte: string;
    biografia: string;
    filmes_que_atuou?: AlsoWorkedOnInterface[]
}

export default ActorInterface;