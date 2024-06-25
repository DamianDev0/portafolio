import React from 'react';
import { CirculeImage } from "@/components/circle-image";
import { TransitionPage } from "@/components/transition-page";
import AvatarServices from "@/components/avatar.services";
import SliceServices from "@/components/slider"

const ServicePage = () => {
    return (
        <>
            <TransitionPage />
            <CirculeImage />
            <AvatarServices />
            <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2 md:px-20">
                <div className="max-w-[450px] mt-20 md:mt-0">
                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">
                        My{" "}
                        <span className="font-bold text-secondary">
                            Services.
                        </span>
                    </h1>
                    <p className="mb-3 text-xl text-gray-300">
                        I offer my services as a frontend developer, creating beautiful and functional interfaces. I focus more on the modern and retro style.
                    </p>
                    <button className="px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/50">Contact me</button>
                </div>
                <div>
                <SliceServices/>
                
                </div>
            </div>
        </>
    );
}

export default ServicePage;
