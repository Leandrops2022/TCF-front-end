import { SkeletonFilmeItemPoster, SkeletonFilmeItemTextos, SkeletonInnerContent, SkeletonMovieItem, SkeletonRankingENota, SkeletonTituloAnoDuracao } from "./skeletonStyles"

const SkeletonMovieCard = () => {

    return <>
        <SkeletonMovieItem>
            <SkeletonInnerContent>
                <div>
                    <SkeletonFilmeItemPoster />
                </div>
                <SkeletonFilmeItemTextos>
                    <SkeletonRankingENota />
                    <SkeletonTituloAnoDuracao />
                </SkeletonFilmeItemTextos>
            </SkeletonInnerContent>
        </SkeletonMovieItem>
    </>
}

export default SkeletonMovieCard;