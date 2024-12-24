import { Link } from "react-router-dom";
import styles from "./RehabStages.module.css";

const RehabStages = ({ id, route, image }) => {
    return (
         // Link to the specific stage route
        <Link to={`/stages/${route}`}>
             {/* Display the stage image with appropriate styling */}
            <img
                src={image}
                className={styles[`${image}`]}
                alt={`stage-${id + 1}`}
            />
        </Link>
    );
};

export default RehabStages;
