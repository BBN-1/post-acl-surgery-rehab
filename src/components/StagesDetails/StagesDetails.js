// Import necessary modules and components
import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import styles from "./StagesDetails.module.css";
import { Link } from "react-router-dom";
import stagesDetails from "../../ExerciseData/stagesDetails/stagesDetails";
import stagesDetailsInEnglish from "../../ExerciseData/stagesDetails/stagesDetailsInEnglish";
import { LanguageContext } from "../../context/LanguageContext";

const StagesDetails = () => {
    // Extracting stageNumber parameter from the URL
    const { stageNumber } = useParams();
    // State to manage the current stage details
    const [stageDetails, setStageDetails] = useState({});
    // Accessing the current language from the LanguageContext
    const { language } = useContext(LanguageContext);

    // First check what language is selected, then load the proper stage details
    useEffect(() => {
        if (language === "en") {
            const currentStage = stagesDetailsInEnglish.find(
                (item) => item.route === stageNumber
            );
            setStageDetails(currentStage);
        } else {
            const currentStage = stagesDetails.find(
                (item) => item.route === stageNumber
            );
            setStageDetails(currentStage);
        }
    }, [stageNumber, language]);

    return (
        <>
            <>
                <div className={styles["stageTwo-wrapper"]}>
                    <div className={styles["img-wrapper"]}>
                        <img
                            src={stageDetails.stage_hero_img}
                            alt="girl-exercising"
                        />
                    </div>
                    <div className={styles["stageTwo-title-wrapper"]}>
                        {stageDetails.route_special ? (
                            <Link
                                to={`/exercises/${stageDetails.route_special}`}
                                className={styles["stageTwo-exercises-link"]}
                            >
                                <h1 className={styles["stageTwo-title"]}>
                                    {stageDetails.title_stage_special}
                                </h1>
                            </Link>
                        ) : null}

                        {stageDetails.route_rom ? (
                            <Link
                                to={`/exercises/${stageDetails.route_rom}`}
                                className={styles["stageTwo-exercises-link"]}
                            >
                                <h1 className={styles["stageTwo-title"]}>
                                    {stageDetails.title_rom}
                                </h1>
                            </Link>
                        ) : null}

                        <Link
                            to={`/exercises/${stageDetails.route_str}`}
                            className={styles["stageTwo-exercises-link"]}
                        >
                            <h1 className={styles["stageTwo-title"]}>
                                {stageDetails.title_str}
                            </h1>
                        </Link>

                        {stageDetails.route_balance ? (
                            <Link
                                to={`/exercises/${stageDetails.route_balance}`}
                                className={styles["stageTwo-exercises-link"]}
                            >
                                <h1 className={styles["stageTwo-title"]}>
                                    {stageDetails.title_balance}
                                </h1>
                            </Link>
                        ) : null}
                    </div>

                    <section className={styles["stageTwo-info-wrapper"]}>
                        <div className={styles["stageTwo-goals"]}>
                            <div className={styles["stageTwo-goals-upper"]}>
                                <img
                                    className={styles["stageTwo-goals-img"]}
                                    src={stageDetails.goals_img}
                                    alt="img-of-darts"
                                />
                                <h2
                                    className={
                                        styles["stageTwo-goals-upper-title"]
                                    }
                                >
                                    {language === "en" ? "GOALS" : "ЦЕЛИ"}
                                </h2>
                            </div>

                            <ul className={styles["stageTwo-list"]}>
                                {stageDetails?.goals_list?.map(
                                    (goal, index) => (
                                        <li key={index}>{goal}</li>
                                    )
                                )}
                            </ul>
                        </div>

                        <div className={styles["stageTwo-education"]}>
                            <div className={styles["stageTwo-education-upper"]}>
                                <img
                                    className={styles["stageTwo-education-img"]}
                                    src={stageDetails.education_img}
                                    alt="img-of-bulb"
                                />
                                <h2
                                    className={
                                        styles["stageTwo-education-upper-title"]
                                    }
                                >
                                    {language === "en"
                                        ? "EDUCATION"
                                        : "ОБУЧЕНИЕ НА ПАЦИЕНТА"}
                                </h2>
                            </div>
                            <ul className={styles["stageTwo-list-education"]}>
                                {stageDetails?.education_list?.map(
                                    (goal, index) => (
                                        <li key={index}>{goal}</li>
                                    )
                                )}
                            </ul>
                        </div>
                    </section>
                </div>
            </>
        </>
    );
};

export default StagesDetails;
