import { motion } from "framer-motion";

export const TransAnimation = {
    hidden: {
        scaleY: 2,
        y: 2000
    },
    show: {
        scaleY: 3,
        y: -2000
    },
    hide: {
        scaleY: 2,
        y: 12
    }
}


const Transition = (Ogcomponent) => {
    return () => (
        <>
             <Ogcomponent />
            {/* <motion.div
                className="transition"
                variants={TransAnimation}
                initial="hidden"
                animate="show"
                exit="hide"
                transition={{ duration: 1.8 }}
            /> */}
            <motion.div
                className="slide-in"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.div 
                className="slide"
                initial={{ scaleY: 2}}
                animate={{ scaleY: 0}}
                exit={{ scaleY: 0}}
                transition={{ duration: 3, ease: [0.22, 1, 0.36, 1]}}
            />
            <motion.div
                className="slide-out"
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            />
        </>
    )
}

export default Transition;


