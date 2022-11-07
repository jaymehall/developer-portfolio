import React from "react";
import Header from "./components/Header/Header";
import MiddlePane from "./components/MiddlePane"
import "./components/Header/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Technologies from "./components/Technologies/Technologies";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import "./App.css";
import Experience from "./components/MiddlePane/Experience/Experience";


function App() {
    return (
        <>
            <Header/>
            <MiddlePane/>
            <Experience />
            <Technologies/>
            <Projects/>
            <Footer/>
        </>
    )
}

export default App;
