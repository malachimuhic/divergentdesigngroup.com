import styles from "./Capabilities.module.css";
import { getImageUrl } from "../../utils";
import CapabilitiesData from "../../data/whatwedo.json"; // Importing the data

export const Capabilities = () => {
    return (
        <section className={styles.capabilitiesContainer} id="capabilities">
        <h2 className={styles.title}>Capabilities</h2>
                    <hr className={styles.line} />
        <div className={styles.container}>
            <h2 className={styles.title}>What We Do</h2>
            <div className={styles.content}>
                <div className={styles.skills}>
                    {CapabilitiesData.map((skill, id) => {
                        return (
                            <div key={id} className={styles.skill}>
                                <div className={styles.skillImageContainer}>
                                    <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                                </div>
                                <p>{skill.title}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
            <h2 className={styles.whereWeDoItTitle}>Where We Do It</h2>
                <div className={styles.whereWeDoItContainer}>
                    <ul className={styles.whereWeDoItList}>
                        <li>Brand Activations</li>
                        <li>Tradeshow Exhibits</li>
                        <li>Stage Sets</li>
                        <li>Conferences</li>
                    </ul>
                </div>
        </div>
        </section>
    );
};

export default Capabilities;
