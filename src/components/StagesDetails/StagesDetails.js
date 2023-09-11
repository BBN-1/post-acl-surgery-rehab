import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./StagesDetails.module.css";
import { Link } from "react-router-dom";
import stagesDetails from "../../ExerciseData/stagesDetails/stagesDetails";

const StagesDetails = () => {
    const { stageNumber } = useParams();
    const [stageDetails, setStageDetails] = useState({});

    useEffect(() => {
        const currentStage = stagesDetails.find(
            (item) => item.route === stageNumber
        );
        setStageDetails(currentStage);
    }, [stageNumber]);

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
                        <Link
                            to={`/exercises/${stageDetails.route_rom}`}
                            className={styles["stageTwo-exercises-link"]}
                        >
                            <h1 className={styles["stageTwo-title"]}>
                                {stageDetails.title_rom}
                            </h1>
                        </Link>
                        <Link
                            to={`/exercises/${stageDetails.route_str}`}
                            className={styles["stageTwo-exercises-link"]}
                        >
                            <h1 className={styles["stageTwo-title"]}>
                                {stageDetails.title_str}
                            </h1>
                        </Link>
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
                                    ЦЕЛИ
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
                                    ОБУЧЕНИЕ НА ПАЦИЕНТА
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
