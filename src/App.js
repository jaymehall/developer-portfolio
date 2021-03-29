import React from "react";
import Header from "./components/Header/Header";
import MiddlePane from "./components/MiddlePane"
import "./components/Header/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <>
            <Header/>
            <MiddlePane/>
        </>
    )
}

export default App;
