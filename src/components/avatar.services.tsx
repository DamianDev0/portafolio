import React from 'react';
import Image from "next/image";
import { MotionTransition } from "./trasition";

const AvatarServices = () => {
    return (
        <MotionTransition position="right" className="bottom-0 left-0 hidden md:inline-block md:absolute">
            <Image 
                src="/services.png" 
                width={300} 
                height={300} 
                alt="services"  
                className="w-[350px] h-full"
            />
        </MotionTransition>
    );
}

export default AvatarServices;
