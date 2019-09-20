import React from 'react';
// import './App.css';
import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer"
import "./Components/Header/index.css"
import "./Components/Content/index.css"
import "./Components/Footer/index.css"

function App() {
    return (
        <>
            <Header/>
            <Content/>
            <Footer/>
        </>
    );
}

export default App;
