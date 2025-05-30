import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import MiddlePane from "./components/MiddlePane"
import "./components/Header/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Technologies from "./components/Technologies/Technologies";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import "./App.css";
import Experience from "./components/MiddlePane/Experience/Experience";
import theprivacydevlogo from "./components/Header/theprivacydevlogo.png"


function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1000);
        return () => clearTimeout(timer);
      }, []);
    
      if (isLoading) {
        return <div className="preloader"><span><img src={theprivacydevlogo} alt="the privacy dev logo" /></span><span>Loading...</span></div>;
      }

    return (
        <>
            <Header />
            <MiddlePane />
            <Experience />
            <Technologies />
            <Projects />
            <Footer />
        </>
    )
}

export default App;
