import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "../src/components/Home/Home";
import StageTwo from "./components/Stages/StageTwo/StageTwo";
import StageTwoExercisesStr from "../src/components/Exercises/StageTwoExerciseStr/StageTwoExerciseStr";
import StageTwoExercisesRom from "./components/Exercises/StageTwoExercisesRom/StageTwoExercisesRom";
import Header from "./components/Header/Header"

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/stage-two" element={<StageTwo />} />
                <Route path="/stage-two-str" element={<StageTwoExercisesStr/>}/>
                <Route
                    path="/stage-two-rom"
                    element={<StageTwoExercisesRom />}
                />
            </Routes>
        </div>
    );
}

export default App;
