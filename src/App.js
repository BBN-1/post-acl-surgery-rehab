/* App component that sets up the main structure of the application.
 * It includes the Header, Footer, and Routes for different pages.
 * The LanguageProvider is used to manage the application's language context.
 */

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "../src/components/Home/Home";
import Header from "./components/Header/Header";
import StagesDetails from "./components/StagesDetails/StagesDetails";
import Exercises from "./components/Exercises/Exercises";
import Footer from "./components/Footer/Footer";
import ExerciseItem from "./components/ExerciseItem/ExerciseItem";
import { LanguageProvider } from "./context/LanguageContext";

// Main App component
function App() {
    return (
        // Provide the language context to the entire application
        <LanguageProvider>
            <div className="App">
                {/* Header component */}
                <Header />
                {/* Define routes for different pages */}
                <Routes>
                    {/* Home page route */}
                    <Route path="/" element={<Home />} />
                    {/* Stages details page route */}
                    <Route
                        path="/stages/:stageNumber"
                        element={<StagesDetails />}
                    />
                    {/* Exercises page route */}
                    <Route
                        path="/exercises/:exerciseStageAndType"
                        element={<Exercises />}
                    />
                    {/* Exercise item page route */}
                    <Route
                        path="/exercises/:exerciseStageAndType/:exerciseId"
                        element={<ExerciseItem />}
                    />
                </Routes>
                {/* Footer component */}
                <Footer />
            </div>
        </LanguageProvider>
    );
}

export default App;
