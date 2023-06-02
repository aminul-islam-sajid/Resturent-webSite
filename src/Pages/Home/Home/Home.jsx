import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Testimonials from "../Testimonial/Testimonials";
import Category from "../category/Category";
import Featured from "../featured/Featured";
import PopularMenu from "../popularMenu/PopularMenu";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;