// Import necessary modules and components
import styles from "./Exercises.module.css";
import { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import exercisesListData from "../../ExerciseData/exercises/exercises";
import exercisesListDataInEnglish from "../../ExerciseData/exercises/exercisesInEnglish";
import { LanguageContext } from "../../context/LanguageContext";

const Exercises = () => {
    // State to store the exercise list data
    const [exerciseList, setExerciseList] = useState(null);
    // Extracting parameters from the URL
    const { exerciseStageAndType } = useParams();
    // Accessing the current language from the LanguageContext
    const { language } = useContext(LanguageContext);

    // First check what language is selected, then load the proper exercise list details
    useEffect(() => {
        if (language === "en") {
            const currentExercisesList = exercisesListDataInEnglish.find(
                (item) => item.route === exerciseStageAndType
            );

            if (currentExercisesList) {
                setExerciseList(currentExercisesList);
            }
        } else {
            const currentExercisesList = exercisesListData.find(
                (item) => item.route === exerciseStageAndType
            );

            if (currentExercisesList) {
                setExerciseList(currentExercisesList);
            }
        }
    }, [exerciseStageAndType, language]);

    return (
        <section className={styles["stage-exercises-container"]}>
            <div className={styles["exercises-link-back-wrapper"]}>
                <Link
                    to={`/stages/${exerciseList?.main_stage_route}`}
                    className={styles["main-category-link"]}
                >
                    {exerciseList?.stage_nav}{" "}
                    {language === "en" ? "stage" : "етап"}
                </Link>
            </div>
            <div className={styles["exercises-wrapper"]}>
                {exerciseList?.exercise_data?.map((exercise) => (
                    <Link
                        className={styles["exercise-card"]}
                        key={exercise.id}
                        to={`/exercises/${exerciseStageAndType}/${exercise.id}`}
                    >
                        <img
                            src={exercise.img1}
                            alt=""
                            className={styles["exercise-card-img"]}
                        />
                        <h1 className={styles["exercise-card-title"]}>
                            {exercise.title}
                        </h1>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default Exercises;
