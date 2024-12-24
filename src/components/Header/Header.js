// Import necessary modules and components
import { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSun,
    faHome,
    faMugHot,
    faWineGlass,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../context/LanguageContext";
import ReactCountryFlag from "react-country-flag";

const user = ""; // Placeholder for user information

const Header = () => {
    // State to manage the greeting message
    const [greeting, setGreeting] = useState("");
    // State to manage the icon based on the time of the day
    const [icon, setIcon] = useState(null);
    // State to manage the CSS class for the time of day
    const [timeClass, setTimeClass] = useState(styles.morning);

    // Accessing the current language and function to change it from the LanguageContext
    const { language, setLanguage } = useContext(LanguageContext);
    

    // Function to switch the language
    const handleLanguageSwitch = () => {
        const flagContainer = document.querySelector(
            `.${styles["flag-container"]}`
        );
        flagContainer.style.opacity = "0";

        setTimeout(() => {
            setLanguage((prevLanguage) =>
                prevLanguage === "en" ? "bg" : "en"
            );
            flagContainer.style.opacity = "1";
        }, 300); // match this with the transition duration
    };

    // Object that holds the greetings and icons according to the time of the day and language
    const greetings = {
        morning: {
            en: "Good morning",
            bg: "Добро утро",
            icon: <FontAwesomeIcon icon={faMugHot} />,
            style: styles.morning,
        },
        afternoon: {
            en: "Good afternoon",
            bg: "Добър Ден!",
            icon: <FontAwesomeIcon icon={faSun} />,
            style: styles.afternoon,
        },
        night: {
            en: "Good evening",
            bg: "Добър Вечер",
            icon: <FontAwesomeIcon icon={faWineGlass} />,
            style: styles.night,
        },
    };

    // Function to update the greeting and icons based on the current time
    const updateGreeting = () => {
        const currentHour = new Date().getHours();
        let timeOfDay;

        if (currentHour >= 5 && currentHour < 12) {
            timeOfDay = "morning";
        } else if (currentHour >= 12 && currentHour < 18) {
            timeOfDay = "afternoon";
        } else {
            timeOfDay = "night";
        }

        setGreeting(greetings[timeOfDay][language]);
        setIcon(greetings[timeOfDay].icon);
        setTimeClass(greetings[timeOfDay].style);
    };
     // Update the greeting when the component mounts and when the language changes
    useEffect(() => {
        updateGreeting(); // Initial call
        const intervalId = setInterval(updateGreeting, 10 * 60 * 1000); // 10 minutes

        return () => {
            clearInterval(intervalId); // Cleanup
        };
    }, [language]);

    return (
        <header className={styles.header}>
            <div className={styles.homeIcon}>
                <Link className={styles["home-icon"]} to="/">
                    <FontAwesomeIcon icon={faHome} />
                </Link>
            </div>
            <div className={styles["header-greeting-and-language"]}>
                <h1 className={`${styles.title} ${timeClass}`}>
                    <span className={styles["greeting"]}>{greeting}</span>{" "}
                    {icon} <span className={styles["header-name"]}>{user}</span>
                </h1>
                <button
                    onClick={handleLanguageSwitch}
                    className={styles["flag-btn"]}
                >
                    <div className={styles["flag-container"]}>
                        <ReactCountryFlag
                            countryCode={language === "en" ? "GB" : "BG"}
                            svg
                            style={{
                                width: "1.5em",
                                height: "1.5em",
                            }}
                        />
                    </div>
                </button>
            </div>
        </header>
    );
};

export default Header;
