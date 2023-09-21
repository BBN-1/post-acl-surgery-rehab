import styles from "./Home.module.css";

import girl_top_page from "../../images/girl_top_page.png";
import stagesDataHomepage from "../../ExerciseData/stagesHomepage/stagesHomepage";
import RehabStages from "./RehabStages/RehabStages";
import { useEffect, useState } from "react";

const Home = () => {
    const [stage, setStages] = useState([]);
    
    useEffect(() => {
        setStages(stagesDataHomepage);
    }, []);

    return (
        <>
            <div className={styles["home-wrapper"]}>
                <div className={styles["img-wrapper"]}>
                    <img src={girl_top_page} alt="girl-exercising" />
                </div>
                <div className={styles["home-title-wrapper"]}>
                    <h1 className={styles["home-title"]}>РЕХАБИЛИТАЦИЯ ПКВ</h1>
                </div>

                <div className={styles["home-imgs-wrapper"]}>
                    {stage.map((stageItem) => (
                        <RehabStages {...stageItem} key={stageItem.id} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Home;
