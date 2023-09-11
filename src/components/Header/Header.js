import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSun,
    faHome,
    faMugHot,
    faWineGlass,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const getGreeting = () => {
    

    const currentHour = new Date().getHours();
    let greeting = "";
    let icon = null;
    let timeClass = "";

    if (currentHour >= 5 && currentHour < 12) {
        greeting = "Добро утро ";
        icon = <FontAwesomeIcon icon={faMugHot} />;
        timeClass = styles.morning;
    } else if (currentHour >= 12 && currentHour < 18) {
        greeting = "Добър Ден! ";
        icon = <FontAwesomeIcon icon={faSun} />;
        timeClass = styles.afternoon;
    } else {
        greeting = "Добър Вечер";
        icon = <FontAwesomeIcon icon={faWineGlass} />;
        timeClass = styles.night;
    }

    return { greeting, icon, timeClass };
};

//to impliment user name with LocalStorage
const user = ""



const Header = () => {
    const { greeting, icon, timeClass } = getGreeting();

    return (
        <header className={styles.header}>
            <div className={styles.homeIcon}>
                <Link className={styles['home-icon']} to="/">
                    <FontAwesomeIcon icon={faHome} />
                </Link>
            </div>
            <h1 className={`${styles.title} ${timeClass}`}>
               <span className={styles['greeting']}>{greeting}</span>  {icon} <span className={styles['header-name']} >{user}</span>
            </h1>
        </header>
    );
};

export default Header;
