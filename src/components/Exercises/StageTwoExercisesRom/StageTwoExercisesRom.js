import styles from "./StageTwoExercisesRom.module.css";
import romExercise from "../../../ExerciseData/stageTwoRom/ExerciseData";
import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import { Link } from "react-router-dom";

const StageTwoExercisesRom = () => {
    const [currentExercise, setCurrentExercise] = useState(0);
    const [exerciseChanging, setExerciseChanging] = useState(false);
    const exercise = romExercise[currentExercise];

    const handleSwipeLeft = () => {
        if (currentExercise < romExercise.length - 1) {
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
    const showRightArrow = currentExercise < romExercise.length - 1;

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
                    <div className={styles['arrow']}>
                        {showRightArrow ? (
                            <button
                                className={`arrow-button ${
                                    showRightArrow ? "show" : ""
                                }`}
                                onClick={handleSwipeLeft}
                            ><span>  <Link className={styles["stage-two-rom-types-linkback"]} to="/stage-two">&lt; II Етап Упражнения</Link> <span className={styles['next-rom-upper']}>Следващо &gt; &gt; &gt;</span></span>
                                
                            </button>
                        ) : (
                            <>
                            <div className="arrow-placeholder" />
                            <Link className={styles["stage-two-rom-types-linkback"]} to="/stage-two">&lt; II Етап Упражнения</Link>
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
                    <img
                        className={styles["stage-two-rom-card-img-one"]}
                        src={exercise.img1}
                        alt="exercise_img"
                    />
                    {exercise.img2 ? <img
                        className={styles["stage-two-rom-card-img-two"]}
                        src={exercise.img2}
                        alt="exercise_img_2"
                    /> : null}
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
                               <span className={styles["stage-two-rom-types-linkback"]}>  &lt; &lt; &lt; Предишно</span>
                            </button>
                        ) : (
                            <div className="arrow-placeholder" />
                        )}
                    </div>
                </div>
     
        </section>
    );
};

export default StageTwoExercisesRom;
