import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "../src/components/Home/Home";
import Header from "./components/Header/Header";
import StagesDetails from "./components/StagesDetails/StagesDetails";
import Exercises from "./components/Exercises/Exercises";
import Footer from "./components/Footer/Footer";
import ExerciseItem from "./components/ExerciseItem/ExerciseItem";

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />

                <Route
                    path="/stages/:stageNumber"
                    element={<StagesDetails />}
                />
                <Route
                    path="/exercises/:exerciseStageAndType"
                    element={<Exercises />}
                />
                    <Route
                    path="/exercises/:exerciseStageAndType/:exerciseId"
                    element={<ExerciseItem />}
                />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
