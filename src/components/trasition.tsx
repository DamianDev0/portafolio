"use client"
import { motion } from "framer-motion"
import React, { Children } from "react"
import { fadeIn } from "../../utils/motion-transition"

interface MotionTransitionProps { // hacer interface donde le vamos a pasar los props
    children: React.ReactNode
    position: 'right' | 'bottom'
    className?: string
}

export const MotionTransition = (props: MotionTransitionProps) => {
    const { children , position, className} = props
    return (
     <motion.div
     variants={fadeIn(position)}
     initial= "hidden"
     animate= "visible"
     exit= "hidden"
     className={className}
     >
        {children}
      </motion.div>
    )
}