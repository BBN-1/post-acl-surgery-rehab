// Import necessary modules and components
import styles from "./Home.module.css";
import girl_top_page from "../../images/girl_top_page.png";
import stagesDataHomepage from "../../ExerciseData/stagesHomepage/stagesHomepage";
import stagesDataHomepageEng from "../../ExerciseData/stagesHomepage/stagesHomepageEng";
import RehabStages from "./RehabStages/RehabStages";
import { useEffect, useState, useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

const Home = () => {
    // State to manage the current stages data
    const [stage, setStages] = useState([]);
    // Accessing the current language from the LanguageContext
    const { language } = useContext(LanguageContext);

    // First check what language is selected, then load the proper homepage stages look
    useEffect(() => {
        if (language === "en") {
            setStages(stagesDataHomepageEng);
        } else setStages(stagesDataHomepage);
    }, [language]);

    return (
        <>
            <div className={styles["home-wrapper"]}>
                <div className={styles["img-wrapper"]}>
                    <img src={girl_top_page} alt="girl-exercising" />
                </div>
                <div className={styles["home-title-wrapper"]}>
                    <h1 className={styles["home-title"]}>
                        {" "}
                        {language === "en"
                            ? "ACL REHABILITATION"
                            : "РЕХАБИЛИТАЦИЯ ПКВ"}
                    </h1>
                </div>

                <div className={styles["home-imgs-wrapper"]}>
                    {stage.map((stageItem) => (
                        // Render RehabStages component with the current stages data
                        <RehabStages {...stageItem} key={stageItem.id} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Home;
