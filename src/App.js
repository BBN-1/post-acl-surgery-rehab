import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "../src/components/Home/Home";
import Header from "./components/Header/Header";
import StagesDetails from "./components/StagesDetails/StagesDetails";
import Exercises from "./components/Exercises/Exercises";

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
            </Routes>
        </div>
    );
}

export default App;
