import React from 'react'
import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect';
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs"
import me from "../assets/img1.jpg";
import Resume from "../assets/fdFinal.pdf";
const Home = () => {

    const animations = {
        h1: {
            initial: {
                x: "-100%",
                opacity: 0,
            },
            whileInView: {
                x: 0,
                opacity: 1,
            },
        }
    }
    return (
        <div id='home'>
            <section>
                <div>
                    <motion.h1{...animations.h1}>
                        Hi,I Am <br />Amol Savare
                    </motion.h1>
                    <Typewriter
                        options={{
                            strings: ["A Developer", "A Designer", "A Creator"],
                            autoStart: true,
                            loop: true,
                            cursor: "",
                            wrapperClassName: "typewriterpara",
                        }}
                    />
                    <div>
                        <a href='mailto:amolphilsavare@gmail.com'>Hire Me</a>
                        <a href={Resume} className='cv'>Resume</a>
                        <a href='#work'>Projects <BsArrowUpRight /></a>
                    </div>
                    <article data-special>
                    <h1>
                    </h1>
                        <p>
                            Contact
                        </p>
                        <span>amolphilsavare@gmail.com</span>
                    </article>
                </div>
            </section>
            <section>
                <img src={me} alt="Amol" />

            </section>
            <BsChevronDown />
        </div>
    )
}

export default Home
