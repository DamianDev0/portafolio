import Image from "next/image";
import MotionTransition from "./trasition";
import React from "react";
const AvatarPortfolio = () => {
    return (
        <MotionTransition position="bottom" className="bottom-0 left-0 hidden md:inline-block md:absolute">
            <Image src="/avatar-works.png" alt="avatar work" width={300} height={300} className="w-full h-full"></Image>
        </MotionTransition>
      
    )
}

export default AvatarPortfolio;