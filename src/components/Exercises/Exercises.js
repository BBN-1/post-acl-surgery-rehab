import styles from "./Exercises.module.css";
import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import exercisesListData from "../../ExerciseData/exercises/exercises";

const Exercises = () => {
    const [exerciseList, setExerciseList] = useState(null);

    const { exerciseStageAndType } = useParams();

    useEffect(() => {
        const currentExercisesList = exercisesListData.find(
            (item) => item.route === exerciseStageAndType
        );

        if (currentExercisesList) {
            setExerciseList(currentExercisesList);
        }
    }, [exerciseStageAndType]);

    console.log(exerciseList);

    return (
        <section className={styles["stage-exercises-container"]}>
            <div className={styles["exercises-link-back-wrapper"]}>
            <Link
                    to={`/stages/${exerciseList?.main_stage_route}`}
                    className={styles["main-category-link"]}
                >
                    {exerciseList?.stage_nav} етап
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
