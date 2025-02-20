import styles from "./Footer.module.css";
import { getImageUrl } from "../../utils";


export const Footer = () => {
    return(
        <div className={styles.container}>
        <hr className={styles.line} />
        <div className={styles.leftSection}>
           <div className={styles.socials}>
               <img 
                   src={getImageUrl("footer/instagram.png")}
                   alt="Instagram"
                   style={{ cursor: "pointer" }} 
                   onClick={() => window.open("https://www.instagram.com/divergentdesigngroup/#", "_blank")}
               />
               <img 
                   src={getImageUrl("footer/linkedin.png")}
                   alt="LinkedIn"
                   style={{ cursor: "pointer" }} 
                   onClick={() => window.open("https://www.linkedin.com/company/divergent-design-group/", "_blank")}
               />
           </div>
           <div className={styles.contact}>
               <div className={styles.phone}>
                   <img src={getImageUrl("footer/phone.png")} alt="Phone"/>

                   <span>541-801-8527</span>
               </div>
               <div className={styles.email}>
                   <img src={getImageUrl("footer/emailicon.svg")} alt="Email"/>
                   <span>Info@divergentdesigngroup.com</span>
               </div>
           </div>
       </div>
       <div className={styles.copyRight}>
           <p>&copy; {new Date().getFullYear()} Divergent Design Group | All Rights Reserved</p>
       </div>
   </div>
    );
};
