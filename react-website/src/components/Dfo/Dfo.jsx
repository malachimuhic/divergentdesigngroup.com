import styles from "./Dfo.module.css";
import { getImageUrl } from "../../utils";

export const Dfo = () => {
    return(
        <div className={styles.logoContainer}>
            <h1 className={styles.logoTitle}>DIVERGE FROM ORDINARY</h1>
            <img 
                className={styles.logopng} 
                src={getImageUrl("dfo/CorrectedDDGLogoOnly.png")} 
                alt="Divergent Design Group"
            />
        </div>
    );
};
