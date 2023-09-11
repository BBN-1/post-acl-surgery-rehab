import { Link } from "react-router-dom";
import styles from "./RehabStages.module.css";

const RehabStages = ({ id, route, image }) => {
    return (
        <Link to={`/stages/${route}`}>
            <img
                src={image}
                className={styles[`${image}`]}
                alt={`stage-${id + 1}`}
            />
        </Link>
    );
};

export default RehabStages;
