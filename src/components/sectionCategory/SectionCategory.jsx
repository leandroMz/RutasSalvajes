import { Link } from "react-router-dom"
import { CardCategory } from "../cardCategory/CardCategory"
import './SectionCategory.css';

export const SectionCategory = () => {
    const categories = [
        { imageName: 'tierra', categoryName: 'OffRoad' },
        { imageName: 'agua', categoryName: 'Aguas salvajes' },
        { imageName: 'ruta', categoryName: 'Rutas escénicas' },
        { imageName: 'nieve', categoryName: 'Pistas blancas' },
    ];
    return (
        <div className="orderSection">
            <h3>Explora todos los rincones <br /> del mundo con nosotros</h3>
            <div className="orderCategory">
                {categories.map((category, index) => (
                    <Link key={index} to={`/${category.imageName}`}>
                        <CardCategory imageName={category.imageName} categoryName={category.categoryName} />
                    </Link>
                ))}
            </div>
        </div>
    )
}