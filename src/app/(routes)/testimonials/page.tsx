"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { dataTestimonials } from "../../../../data";
import Image from "next/image";
import { TransitionPage } from "@/components/transition-page";
import { CirculeImage } from "@/components/circle-image";

const TestimonialsPage = () => {
    return (
        <>
            <TransitionPage />
            <div className="flex flex-col justify-center h-screen">
                <CirculeImage />
                <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">
                    Some comments 
                    <span className="block font-bold text-secondary">from our customers</span>
                </h1>
                <div className="flex items-center justify-center">
                    <Swiper
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 10
                            }
                        }}
                        freeMode={true}
                        pagination={{
                            clickable: true
                        }}
                        modules={[Pagination]}
                        className="h-[380px] md:h-[300px] w-[270px] md:w-[580px]"
                    >
                        {dataTestimonials.map(({ id, name, description, imageUrl }) => (
                            <SwiperSlide key={id}>
                                <div className="flex items-center justify-center">
                                    <Image
                                        src={imageUrl}
                                        alt={name}
                                        width={100}
                                        height={100}
                                        className="mx-auto rounded-full md:mt-3"
                                    />
                                   
                                </div>
                                <h4 className="text-center mt-1">{name}</h4>
                                <p className="text-center mt-1">{description}</p>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    );
}

export default TestimonialsPage;
