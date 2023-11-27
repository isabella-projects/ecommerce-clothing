import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Preloader from "./components/preloader/preloader.component";

import Home from "./routes/home/home.component";

const App = () => {
    const [preloader, setPreloader] = useState(true);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setPreloader(false);
        }, 1000);

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <>
            {preloader ? (
                <Preloader />
            ) : (
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            )}
        </>
    );
};

export default App;
