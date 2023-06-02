import SectionTitle from '../../../components/sectionTitle/SectionTitle';
import MenuItems from '../../shared/MenuItems/MenuItems';
import useMenu from '../../../hooks/useMenu';

const PopularMenu = () => {

    const [menu] = useMenu()
    const popular = menu.filter(item => item.category === "popular")

  
    return (
        <section className='mb-12'>
            <SectionTitle
                heading="From our menu"
                subHeading="Popular Items"
            ></SectionTitle>
            <div className='grid md:grid-cols-2 gap-10'>
                {
                   popular.map(item => <MenuItems
                        key={item._id}
                        item={item}

                    ></MenuItems>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;