import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import  {  useEffect, useState } from "react";
import { Navigation } from "swiper";
import "swiper/css";

import "swiper/css/navigation";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
const Testimonials = () => {

    const [review, setReview] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])

    return (
        <section>
            <SectionTitle
                subHeading={'What Our Clients Say'}
                heading={'TESTIMONIALS'}
            ></SectionTitle>
            <>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                    {
                        review.map(rev => <SwiperSlide
                            key={rev._id}
                        >
                            <div className="flex flex-col items-center mx-24 my-16">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={rev.rating}
                                    readOnly
                                />
                                <p className="py-8">{rev.details}</p>
                                <h3 className="text-2xl text-orange-400">{rev.name}</h3>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </>
        </section>
    );
};

export default Testimonials;