import { Header } from "../../components/header/Header"
import { SectionCategory } from "../../components/sectionCategory/SectionCategory"
import { ItemListContainer } from "../../components/itemListContainer/ItemListContainer"

export const Home = () => {
    return (
        <div>
            <Header />
            <SectionCategory />
            <ItemListContainer/>
        </div>
    )
}