import { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
    const [menuHovered, setMenuHovered] = useState(false);

    return (
        <nav className={styles.navbar}>
        {/* Logo with a link to Home */}
        <a href="/">
            <img 
                className={styles.logo} 
                src={getImageUrl("assets/nav/ddgLong.png")} 
                alt="Divergent Design Group"
            />
        </a>
            <div 
                className={styles.menu} 
                onMouseEnter={() => setMenuHovered(true)}
                onMouseLeave={() => setMenuHovered(false)}
            >
                <img 
                    className={styles.menuBtn} 
                    src={menuHovered 
                        ? getImageUrl("assets/nav/closeIcon.png") 
                        : getImageUrl("assets/nav/menuIcon.png")
                    } 
                    alt="menu-button"
                />
                <ul className={`${styles.menuItems} ${menuHovered && styles.menuHovered}`} 
                onClick={() => setMenuHovered(false)}>
                    <li><a href="#about">About</a></li>
                    <li><a href="#capabilities">Services</a></li>
                    <li><a href="mailto:Info@divergentdesigngroup.com">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};
