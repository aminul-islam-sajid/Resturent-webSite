import { Helmet } from 'react-helmet-async';
import Cover from '../shared/Cover/Cover';
import menuImg from '../../assets/menu/banner3.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import useMenu from '../../hooks/useMenu';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import MenuCategory from './Menucategory/MenuCategory';
const Menu = () => {
    const [menu] = useMenu()

    const dessert = menu.filter(item => item.category === "dessert")
    const pizza = menu.filter(item => item.category === "pizza")
    const salad = menu.filter(item => item.category === "salad")
    const soup = menu.filter(item => item.category === "soup")
    const offered = menu.filter(item => item.category === "offered")


    return (
        <div>
            <Helmet>
                <title>Bistro boss | menu</title>
            </Helmet>
            <Cover img={menuImg} title={'Our Menu'}></Cover>
            {/* main cover */}
            <SectionTitle 
            subHeading="Don't mess" 
            heading="Today's offer"></SectionTitle>
            {/* offered menu items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert menu items */}
            <MenuCategory items={dessert} title="Dessert" img={dessertImg}></MenuCategory>
            {/* pizza items  */}
            <MenuCategory items={pizza} title="Pizza"img={pizzaImg}></MenuCategory>
            {/* salad items  */}
            <MenuCategory items={salad} title="Salad"img={saladImg}></MenuCategory>
            {/* soup items  */}
            <MenuCategory items={soup} title="Soup"img={soupImg}></MenuCategory>

        
        </div>
    );
};

export default Menu;