import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Preloader from "./components/preloader/preloader.component";

import Navigation from "./routes/navigation/navigation.component";

import Home from "./routes/home/home.component";
import SignIn from "./routes/sign-in/sign-in.component";

const Shop = () => {
    return <h1>I am the Shop component</h1>;
};

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
                    <Route path="/" element={<Navigation />}>
                        <Route index element={<Home />} />
                        <Route path="shop" element={<Shop />} />
                        <Route path="sign-in" element={<SignIn />} />
                    </Route>
                </Routes>
            )}
        </>
    );
};

export default App;
