import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSun,
    faHome,
    faMugHot,
    faWineGlass,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const user = "";

const Header = () => {
    const [greeting, setGreeting] = useState("");
    const [icon, setIcon] = useState(null);
    const [timeClass, setTimeClass] = useState(styles.morning);

    // Function to update the greeting and icons based on the current time

    const updateGreeting = () => {
        const currentHour = new Date().getHours();

        if (currentHour >= 5 && currentHour < 12) {
            setGreeting("Добро утро ");
            setIcon(<FontAwesomeIcon icon={faMugHot} />);
            setTimeClass(styles.morning);
        } else if (currentHour >= 12 && currentHour < 18) {
            setGreeting("Добър Ден! ");
            setIcon(<FontAwesomeIcon icon={faSun} />);
            setTimeClass(styles.afternoon);
        } else {
            setGreeting("Добър Вечер");
            setIcon(<FontAwesomeIcon icon={faWineGlass} />);
            setTimeClass(styles.night);
        }
    };

    useEffect(() => {
        updateGreeting(); // Initial call
        const intervalId = setInterval(updateGreeting, 10 * 60 * 1000); // 10 minutes

        return () => {
            clearInterval(intervalId); // Cleanup
        };
    }, []);

    return (
        <header className={styles.header}>
            <div className={styles.homeIcon}>
                <Link className={styles["home-icon"]} to="/">
                    <FontAwesomeIcon icon={faHome} />
                </Link>
            </div>
            <h1 className={`${styles.title} ${timeClass}`}>
                <span className={styles["greeting"]}>{greeting}</span> {icon}{" "}
                <span className={styles["header-name"]}>{user}</span>
            </h1>
        </header>
    );
};

export default Header;
