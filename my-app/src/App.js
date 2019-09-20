import React from 'react';
// import './App.css';
import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";
import Button from "./Components/Button/Button";
import Footer from "./Components/Footer/Footer"
import "./Components/Header/index.css"
import "./Components/Content/index.css"
import "./Components/Footer/index.css"
import "./Components/Button/index.css"

function App() {
    return (
        <>
            <Header/>
            <Button buttonTitle="Add some value" valueName="clicks"/>
            <Content/>
            <Footer/>
        </>
    );
}

export default App;
