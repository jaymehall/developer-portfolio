import React from "react";
import Header from "./components/Header/Header";
import MiddlePane from "./components/MiddlePane"
import "./components/Header/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Technologies from "./components/Technologies/Technologies";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <>
            <Header/>
            <MiddlePane/>
            <Technologies/>
            <Projects/>
            <Footer/>
        </>
    )
}

export default App;
