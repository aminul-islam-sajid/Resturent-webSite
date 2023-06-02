import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import featureImg from '../../../assets/home/featured.jpg'
import './Featurd.css';

const Featured = () => {
    return (
        <div className="feature-item bg-fixed  bg-slate-500 bg-opacity-60 pt-8 mt-20">
            <SectionTitle subHeading='Check it out' heading='Featured Item'></SectionTitle>
            <div className="md:flex justify-center items-center pb-20 pt-12 px-36  text-white">
                <div>
                    <img src={featureImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug, 20, 2029</p>
                    <p className="uppercase">Where Can get some?</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium deserunt porro magnam ut adipisci? Hic, natus ducimus, officia sapiente, consectetur beatae eos mollitia blanditiis aliquid ab nostrum a maiores repellendus.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;