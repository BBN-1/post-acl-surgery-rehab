// Import necessaary modules and components
import styles from "./ExerciseItem.module.css";
import exercisesListData from "../../ExerciseData/exercises/exercises";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import exercisesListDataInEnglish from "../../ExerciseData/exercises/exercisesInEnglish";
import { LanguageContext } from "../../context/LanguageContext";

const ExerciseItem = () => {
    // Extracting parameters from the URL
    const { exerciseStageAndType, exerciseId } = useParams();
    // State to manage the current exercise data
    const [exerciseData, setExerciseData] = useState(null);
    // State to manage the current exercise list
    const [currentExercisesList, setCurrentExercisesList] = useState(null);
    // Accessing the current language from the LanguageContext
    const { language } = useContext(LanguageContext);

    useEffect(() => {
        // First check what language is selected, then load the proper exercise list details
        if (language === "en") {
            const foundList = exercisesListDataInEnglish.find(
                (item) => item.route === exerciseStageAndType
            );
            // If the list is found, set the current exercise list and the exercise data
            if (foundList) {
                setCurrentExercisesList(foundList);
                setExerciseData(foundList.exercise_data[exerciseId - 1]);
            }
        // If the language is not English, load the exercise list details in Bulgarian    
        } else {
            const foundList = exercisesListData.find(
                (item) => item.route === exerciseStageAndType
            );

            if (foundList) {
                setCurrentExercisesList(foundList);
                setExerciseData(foundList.exercise_data[exerciseId - 1]);
            }
        }
    }, [exerciseStageAndType, exerciseId, language]); //  Dependencies for useEffect

    return (
        <div className={styles["stage-two-rom-card"]}>
            <div className={styles["exercise-navigation"]}>
                <ul className={styles["exercise-navigation-list"]}>
                    {currentExercisesList?.exercise_data?.map(
                        (exercise, index) => (
                            <Link
                                key={exercise.id}
                                to={`/exercises/${exerciseStageAndType}/${
                                    index + 1
                                }`}
                                className={
                                    parseInt(exerciseId) == index + 1
                                        ? styles["exercise-navigation-active"]
                                        : styles["exercise-navigation-inactive"]
                                }
                            >
                                {index + 1}
                            </Link>
                        )
                    )}
                </ul>
                <Link
                    to={`/exercises/${exerciseStageAndType}`}
                    className={styles["main-category-link"]}
                >
                    {language === "en" ? "Back" : "Назад"}
                </Link>
            </div>
            <div className={styles["stage-two-rom-card-titles-holder"]}>
                <h1 className={styles["stage-two-rom-card-title"]}>
                    {exerciseData?.title}
                </h1>

                {exerciseData?.subtitle ? (
                    <h2 className={styles["stage-two-rom-card-subtitle"]}>
                        {exerciseData?.subtitle}
                    </h2>
                ) : null}
            </div>

            <div className={styles["stage-two-rom-card-img-holder"]}>
                <div className={styles["row"]}>
                    <span className={styles["image-number"]}>1.</span>
                    <img
                        className={styles["stage-two-rom-card-img-one"]}
                        src={exerciseData?.img1}
                        alt="exercise_img"
                    />
                    {exerciseData?.img2 && (
                        <>
                            <span className={styles["image-number"]}>2.</span>
                            <img
                                className={styles["stage-two-rom-card-img-two"]}
                                src={exerciseData?.img2}
                                alt="exercise_img_2"
                            />
                        </>
                    )}
                </div>
                {exerciseData?.img3 && (
                    <div className={styles["row"]}>
                        <span className={styles["image-number"]}>3.</span>
                        <img
                            className={styles["stage-two-rom-card-img-three"]}
                            src={exerciseData?.img3}
                            alt="exercise_img_3"
                        />
                        {exerciseData?.img4 && (
                            <>
                                <span className={styles["image-number"]}>
                                    4.
                                </span>
                                <img
                                    className={
                                        styles["stage-two-rom-card-img-four"]
                                    }
                                    src={exerciseData?.img4}
                                    alt="exercise_img_4"
                                />
                            </>
                        )}
                    </div>
                )}
                {exerciseData?.img5 && (
                    <div className={styles["row"]}>
                        <span className={styles["image-number"]}>5.</span>
                        <img
                            className={styles["stage-two-rom-card-img-five"]}
                            src={exerciseData?.img5}
                            alt="exercise_img_5"
                        />
                    </div>
                )}
            </div>

            {exerciseData?.preparation?.length > 0 ? (
                <div
                    className={styles["stage-two-rom-card-preparartion-holder"]}
                >
                    <p
                        className={
                            styles["stage-two-rom-card-execution-subtitle"]
                        }
                    >
                        {language === "en" ? "Preparation" : "Подготовка"}
                    </p>
                    <ul>
                        {exerciseData?.preparation?.map((step, index) => (
                            <li
                                className={styles["stage-two-rom-card-li"]}
                                key={index}
                            >
                                - {step}
                            </li>
                        ))}
                    </ul>
                </div>
            ) : null}

            {exerciseData?.options && exerciseData?.options?.length > 0 ? (
                <div
                    className={styles["stage-two-rom-card-preparartion-holder"]}
                >
                    <p
                        className={
                            styles["stage-two-rom-card-execution-subtitle"]
                        }
                    >
                        {language === "en" ? "Options" : "Опции"}
                    </p>
                    <ul>
                        {exerciseData?.options?.map((step, index) => (
                            <li
                                className={styles["stage-two-rom-card-li"]}
                                key={index}
                            >
                                - {step}
                            </li>
                        ))}
                    </ul>
                </div>
            ) : null}

            {exerciseData?.execution?.length > 0 ? (
                <div className={styles["stage-two-rom-card-execution-holder"]}>
                    <p
                        className={
                            styles["stage-two-rom-card-execution-subtitle"]
                        }
                    >
                        {language === "en" ? "Execution" : "Изпълнение"}
                    </p>
                    <ul>
                        {exerciseData?.execution?.map((step, index) => (
                            <li
                                className={styles["stage-two-rom-card-li"]}
                                key={index}
                            >
                                - {step}
                            </li>
                        ))}
                    </ul>
                </div>
            ) : null}

            {exerciseData?.notes?.length > 0 ? (
                <div className={styles["stage-two-rom-card-execution-holder"]}>
                    <p
                        className={
                            styles["stage-two-rom-card-execution-subtitle"]
                        }
                    >
                        {language === "en" ? "Notes" : "Забележки"}
                    </p>
                    <ul>
                        {exerciseData?.notes?.map((note, index) => (
                            <li
                                className={styles["stage-two-rom-card-li"]}
                                key={index}
                            >
                                - {note}
                            </li>
                        ))}
                    </ul>
                </div>
            ) : null}
        </div>
    );
};

export default ExerciseItem;
