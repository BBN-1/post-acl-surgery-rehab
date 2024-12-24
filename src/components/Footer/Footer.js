import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles["footer"]}>
            <div className={styles["footer-text-wrapper"]}>
                <p className={styles["copyright-text"]}>
                    &copy; 2023 ACL Recovery
                </p>
                <p className={styles["copyright-text"]}>All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
