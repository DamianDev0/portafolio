"use client"
import Image from "next/image"

export const CirculeImage = () => {
    return(
        <div className="bottom-0 right-0 hidden md:inline-block md:absolute">
            <Image src="/circles.png" width={200} height={200} alt="circe image" className="w-full h-full" />

        </div>
    )
}