import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import { useRef } from "react";
import girl_top_page from "../../images/girl_top_page.png";
import first_stage from "../../images/first_stage.png";
import second_stage from "../../images/second_stage.png";
import third_stage from "../../images/third_stage.png";
import fourth_stage from "../../images/fourth_stage.png";
import love from '../../audio/love.mp3'

const Home = () => {

    const audioRef = useRef(null);
    const playAudio = () => {
        const audioElement = audioRef.current;
        if (audioElement.paused) {
          audioElement.play().catch(error => {
            // Autoplay failed, handle the error here
            console.error('Autoplay failed:', error);
          });
        } else {
          audioElement.pause();
        }
      };


    return (
        <>
            <div className={styles["home-wrapper"]}>
                <div className={styles["img-wrapper"]}>
                    <img  onClick={playAudio} src={girl_top_page} alt="girl-exercising" />
                </div>
                <div className={styles["home-title-wrapper"]}>
                    <h1 className={styles["home-title"]}>РЕХАБИЛИТАЦИЯ ПКВ</h1>
                </div>

                <div className={styles["home-imgs-wrapper"]}>
                    <img
                        className={styles["first-img"]}
                        src={first_stage}
                        alt="first_stage"
                    /><Link to="/stage-two" >
                        <img
                        className={styles["second-img"]}
                        src={second_stage}
                        alt="second_stage"
                    /></Link>
                
                    <img
                        className={styles["third-img"]}
                        src={third_stage}
                        alt="third_stage"
                    />
                    <img
                        className={styles["fourth-img"]}
                        src={fourth_stage}
                        alt="fourth_stage"
                    />
                </div>
                <audio ref={audioRef} src={love} />
                
            </div>
        </>
    );
};

export default Home;
