import { LoadingItemContainer } from "../loadingItemContainer/LoadingItemContainer"

const LoadingComponent = () => {
    return (
        <div>
            <h3>Cargando Aventuras...</h3>
            <LoadingItemContainer skeletonCount={6} />
        </div>
    )
}

export default LoadingComponent