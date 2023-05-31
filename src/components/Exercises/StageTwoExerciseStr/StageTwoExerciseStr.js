import styles from "./StageTwoExerciseStr.module.css";
import strExercise from "../../../ExerciseData/stageTwoStr/stageTwoStr";
import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import { Link } from "react-router-dom";

const StageTwoExercisesStr = () => {
    const [currentExercise, setCurrentExercise] = useState(0);
    const [exerciseChanging, setExerciseChanging] = useState(false);
    const exercise = strExercise[currentExercise];

    const handleSwipeLeft = () => {
        if (currentExercise < strExercise.length - 1) {
            setCurrentExercise(currentExercise + 1);
        }
    };

    const handleSwipeRight = () => {
        if (currentExercise > 0) {
            setCurrentExercise(currentExercise - 1);
        }
    };

    const swipeHandlers = useSwipeable({
        onSwipedLeft: handleSwipeLeft,
        onSwipedRight: handleSwipeRight,
    });

    const showLeftArrow = currentExercise > 0;
    const showRightArrow = currentExercise < strExercise.length - 1;

    useEffect(() => {
        setExerciseChanging(true);
        const timeout = setTimeout(() => {
            setExerciseChanging(false);
        }, 330); // Adjust the delay to match the duration of the animation

        return () => clearTimeout(timeout);
    }, [currentExercise]);

    return (
        <section className={styles["stage-two-rom-wrapper"]}>
            <div
                {...swipeHandlers}
                className={`${styles["stage-two-rom-card"]} ${
                    exerciseChanging ? styles["fade-in"] : ""
                }`}
            >
                <div className={styles['arrow-container']}>
                    <div className="arrow">
                        {showRightArrow ? (
                            <button
                                className={`arrow-button ${
                                    showRightArrow ? "show" : ""
                                }`}
                                onClick={handleSwipeLeft}
                            >
                                <span>
                                    {" "}
                                    <Link
                                        className={
                                            styles[
                                                "stage-two-rom-types-linkback"
                                            ]
                                        }
                                        to="/stage-two"
                                    >
                                       <span className={styles['next-str-upper']}> &lt; II Етап Упражнения</span>
                                    </Link>
                                  <span className={styles['next-page-str']}>Следващо &gt; &gt; &gt;</span>  
                                </span>
                            </button>
                        ) : (
                            <>
                                <div className="arrow-placeholder" />
                                <Link
                                    className={
                                        styles["stage-two-rom-types-linkback"]
                                    }
                                    to="/stage-two"
                                >
                                    &lt; II Етап Упражнения
                                </Link>
                            </>
                        )}
                    </div>
                </div>
                <div className={styles["stage-two-rom-card-titles-holder"]}>
                    <h1 className={styles["stage-two-rom-card-title"]}>
                        {exercise.title}
                    </h1>
                    <h2 className={styles["stage-two-rom-card-subtitle"]}>
                        {exercise.subtitle}
                    </h2>
                </div>
                <div className={styles["stage-two-rom-card-img-holder"]}>
                    <div className={styles["row"]}>
                        <img
                            className={styles["stage-two-rom-card-img-one"]}
                            src={exercise.img1}
                            alt="exercise_img"
                        />
                        {exercise.img2 && (
                            <img
                                className={styles["stage-two-rom-card-img-two"]}
                                src={exercise.img2}
                                alt="exercise_img_2"
                            />
                        )}
                    </div>
                    {exercise.img3 && (
                        <div className={styles["row"]}>
                            <img
                                className={
                                    styles["stage-two-rom-card-img-three"]
                                }
                                src={exercise.img3}
                                alt="exercise_img_3"
                            />
                            {exercise.img4 && (
                                <img
                                    className={
                                        styles["stage-two-rom-card-img-four"]
                                    }
                                    src={exercise.img4}
                                    alt="exercise_img_4"
                                />
                            )}
                        </div>
                    )}
                </div>

                <div
                    className={styles["stage-two-rom-card-preparartion-holder"]}
                >
                    <p
                        className={
                            styles["stage-two-rom-card-execution-subtitle"]
                        }
                    >
                        Подготовка
                    </p>
                    <ul>
                        {exercise.preparation.map((step, index) => (
                            <li
                                className={styles["stage-two-rom-card-li"]}
                                key={index}
                            >
                                - {step}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={styles["stage-two-rom-card-execution-holder"]}>
                    <p
                        className={
                            styles["stage-two-rom-card-execution-subtitle"]
                        }
                    >
                        Изпълнение
                    </p>
                    <ul>
                        {exercise.execution.map((step, index) => (
                            <li
                                className={styles["stage-two-rom-card-li"]}
                                key={index}
                            >
                                - {step}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="arrow-container">
                <div className="arrow">
                    {showLeftArrow ? (
                        <button
                            className={`arrow-button ${
                                showLeftArrow ? "show" : ""
                            }`}
                            onClick={handleSwipeRight}
                        >
                            <span className={
                                            styles[
                                                "stage-two-rom-types-linkback"
                                            ]
                                        }> &lt; &lt; &lt; Предишно</span>
                        </button>
                    ) : (
                        <div className="arrow-placeholder" />
                    )}
                </div>
            </div>
        </section>
    );
};

export default StageTwoExercisesStr;
