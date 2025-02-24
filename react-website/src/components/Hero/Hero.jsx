import { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    const [offsetY, setOffsetY] = useState(0);
    const [showScroll, setShowScroll] = useState(false);

    // Function to handle scroll
    const handleScroll = () => {
        setOffsetY(window.scrollY);
        setShowScroll(window.scrollY > 0); // Show scrollDown when user scrolls
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className={styles.container}>
            <div style={{ transform: `translateY(${offsetY * 0.3}px)` }} />
            <div className={styles.content}>
                <h1 className={styles.title}>
                    Redefining<span className={styles.highlight}> the path <br />to</span> Solutions
                </h1>
                <div className={styles.buttonContainer}>
                    <a href="#about" className={styles.aboutBtn}>About</a>
                    <a href="#capabilities" className={styles.servicesBtn}>Services</a>
                </div>
            </div>
            
            <div className={`${styles.scrollDown} ${showScroll ? styles.visible : ""}`}>
                <h2>Scroll Down</h2>
                <img src={getImageUrl("assets/hero/DownArrow.svg")} alt="Scroll Down" />
            </div>
            
            <div className={styles.bottomBlur} />
        </section>
    );
};

export default Hero;
