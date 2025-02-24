import { useState } from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import servicesData from "../../data/services.json"; // Importing the data

export const About = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);
    const handleHover = (index) => setExpandedIndex(index);
    const handleMouseLeave = () => setExpandedIndex(null);

    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <hr className={styles.line} />
            <p className={styles.aboutInfo}>
                At <span className={styles.ddg}>Divergent Design Group</span>, we challenge the conventional, 
                merging artistry with cutting-edge technology to transform visions into reality. 
                Our passion for innovation drives us to redefine the boundaries of what design can achieve.
            </p>

            {/* Services Section */}
            <div className={styles.servicesContainer}>
                {servicesData.map((item, index) => (
                    <div 
                        key={index} 
                        className={`${styles.service} ${expandedIndex === index ? styles.expanded : ""}`}
                        onMouseEnter={() => handleHover(index)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <h3 className={styles.serviceTitle}>{item.title}</h3>
                        <img 
                            src={getImageUrl("assets/about/PlusSign.png")}
                            alt="Plus Sign" 
                            className={`${styles.plusIcon} ${expandedIndex === index ? styles.rotated : ""}`} 
                        />
                        <p className={`${styles.serviceContent} ${expandedIndex === index ? styles.visible : ""}`}>
                            {item.content}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default About;