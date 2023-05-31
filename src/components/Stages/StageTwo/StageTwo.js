import styles from "./StageTwo.module.css";
import { Link } from "react-router-dom";

import stage_two_top from "../../../images/stage_two_top.png";
import stage_two_goals from "../../../images/stage_two_goals.png";
import stage_two_education from "../../../images/stage_two_education.png";


const StageTwo = () => {
    return (
        <>
            <div className={styles["stageTwo-wrapper"]}>
                <div className={styles["img-wrapper"]}>
                    <img src={stage_two_top} alt="girl-exercising" />
                </div>
                <div className={styles["stageTwo-title-wrapper"]}>
                    <Link to="/stage-two-rom" className={styles["stageTwo-exercises-link"]}><h1 className={styles["stageTwo-title"]}>II Етап - Обхват на движение</h1></Link>
                    <Link to="/stage-two-str" className={styles["stageTwo-exercises-link"]}><h1 className={styles["stageTwo-title"]}>II Етап - Укрепване</h1></Link>
                
                </div>

                <section className={styles["stageTwo-info-wrapper"]}>
                    <div className={styles["stageTwo-goals"]}>
                        <div className={styles["stageTwo-goals-upper"]}>
                            <img
                                className={styles["stageTwo-goals-img"]}
                                src={stage_two_goals}
                                alt="img-of-darts"
                            />
                            <h2
                                className={styles["stageTwo-goals-upper-title"]}
                            >
                                ЦЕЛИ
                            </h2>
                        </div>

                        <ul className={styles["stageTwo-list"]}>
                            <li>- Пълно разтягане на коляното 0 градуса</li>
                            <li>- 
                                Постигане на обхват на движение 0-120 градуса
                            </li>
                            <li>- Намаляне на подуването</li>
                            <li>- Нормализиране на походката</li>

                            <li>- Връщане към ежедневните дейности</li>
                        </ul>
                    </div>

                    <div className={styles["stageTwo-education"]}>
                        <div className={styles["stageTwo-education-upper"]}>
                            <img
                                className={styles["stageTwo-education-img"]}
                                src={stage_two_education}
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
                            <li>- Наблюдавайте и контролирайте подуването</li>
                            <li>-
                                Използвайте лед след тренировка (15-20 минути на
                                сесия) 2-3x ден
                            </li>
                            <li>- Работете върху нормализиране на модела на ходене</li>
                          
                        </ul>
                    </div>
                </section>
            </div>
        </>
    );
};

export default StageTwo;
