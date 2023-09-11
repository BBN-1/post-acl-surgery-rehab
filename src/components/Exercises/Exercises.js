import styles from "./Exercises.module.css";
import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import exercisesListData from "../../ExerciseData/exercises/exercises";

const Exercises = () => {
    const [currentExercise, setCurrentExercise] = useState(0);
    const [exerciseChanging, setExerciseChanging] = useState(false);
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

    const handleSwipeLeft = () => {
        if (currentExercise < exerciseList?.exercise_data?.length - 1) {
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
    const showRightArrow =
        currentExercise < exerciseList?.exercise_data?.length - 1;

    useEffect(() => {
        setExerciseChanging(true);
        const timeout = setTimeout(() => {
            setExerciseChanging(false);
        }, 330);

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
                <div className={styles["arrow-container"]}>
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
                                        to={`/stages/${exerciseList?.main_stage_route}`}
                                    >
                                        <span
                                            className={styles["next-str-upper"]}
                                        >
                                            {" "}
                                            &lt; II Етап Упражнения
                                        </span>
                                    </Link>
                                    <span className={styles["next-page-str"]}>
                                        Следващо &gt; &gt; &gt;
                                    </span>
                                </span>
                            </button>
                        ) : (
                            <>
                                <div className="arrow-placeholder" />
                                <Link
                                    className={
                                        styles["stage-two-rom-types-linkback"]
                                    }
                                    to={`/stages/${exerciseList?.main_stage_route}`}
                                >
                                    &lt; II Етап Упражнения
                                </Link>
                            </>
                        )}
                    </div>
                </div>
                <div className={styles["stage-two-rom-card-titles-holder"]}>
                    <h1 className={styles["stage-two-rom-card-title"]}>
                        {exerciseList?.exercise_data?.[currentExercise]?.title}
                    </h1>
                    <h2 className={styles["stage-two-rom-card-subtitle"]}>
                        {
                            exerciseList?.exercise_data?.[currentExercise]
                                ?.subtitle
                        }
                    </h2>
                </div>
                <div className={styles["stage-two-rom-card-img-holder"]}>
                    <div className={styles["row"]}>
                        <img
                            className={styles["stage-two-rom-card-img-one"]}
                            src={
                                exerciseList?.exercise_data?.[currentExercise]
                                    ?.img1
                            }
                            alt="exercise_img"
                        />
                        {exerciseList?.exercise_data?.[currentExercise]
                            ?.img2 && (
                            <img
                                className={styles["stage-two-rom-card-img-two"]}
                                src={
                                    exerciseList?.exercise_data?.[
                                        currentExercise
                                    ]?.img2
                                }
                                alt="exercise_img_2"
                            />
                        )}
                    </div>
                    {exerciseList?.exercise_data?.[currentExercise]?.img3 && (
                        <div className={styles["row"]}>
                            <img
                                className={
                                    styles["stage-two-rom-card-img-three"]
                                }
                                src={
                                    exerciseList.exercise_data?.[
                                        currentExercise
                                    ]?.img3
                                }
                                alt="exercise_img_3"
                            />
                            {exerciseList?.exercise_data?.[currentExercise]
                                ?.img4 && (
                                <img
                                    className={
                                        styles["stage-two-rom-card-img-four"]
                                    }
                                    src={
                                        exerciseList?.exercise_data?.[
                                            currentExercise
                                        ]?.img4
                                    }
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
                        {exerciseList?.exercise_data?.[
                            currentExercise
                        ]?.preparation?.map((step, index) => (
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
                        {exerciseList?.exercise_data?.[
                            currentExercise
                        ]?.execution?.map((step, index) => (
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
                            <span
                                className={
                                    styles["stage-two-rom-types-linkback"]
                                }
                            >
                                {" "}
                                &lt; &lt; &lt; Предишно
                            </span>
                        </button>
                    ) : (
                        <div className="arrow-placeholder" />
                    )}
                </div>
            </div>
        </section>
    );
};

export default Exercises;
