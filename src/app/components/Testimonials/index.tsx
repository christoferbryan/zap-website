'use client'
import CardTestimonial from "./CardTestimonial";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow, Autoplay } from "swiper/modules";
import TestimonyData from "@/utils/TestimonyPeople";

const Testimonials : React.FC = () => {
    return (
        <>
            <div className="flex flex-col py-5 md:py-10 px-14 md:px-10 w-full justify-center items-center gap-2 md:gap-4 bg-[#F7F7F7]">
                <h2 className="font-bold text-[20px] md:text-[24px] text-[#ff3e54]">\ From our Customers \</h2>
                <p className="font-bold text-[35px] md:text-[40px] text-[#0E1F51]">Testimonials</p>
                <div className="grid grid-cols-1 items-center justify-center gap-8 w-full">
                    <Swiper
                    effect={'coverflow'}
                    loop={true}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={3}
                    initialSlide={1}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                        },
              
                        768: {
                        slidesPerView: 2,
                        },

                        1024: {
                        slidesPerView: 3,
                        },
                    }}
                    spaceBetween={50}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                    }}
                    pagination={{ el: '.swiper-pagination', clickable: true }}
                    modules={[ EffectCoverflow, Pagination, Autoplay]}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}

                    className="w-full"
                    >       
                        {TestimonyData.map((data, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex items-center justify-center w-full h-full">
                                    <CardTestimonial {...data}/>
                                </div>
                            </SwiperSlide>
                        ))}
                        <div className="slider-controler">
                            <div className="swiper-pagination"></div>
                        </div> 
                    </Swiper>
                </div>
            </div>
        </>
    );
}

export default Testimonials;