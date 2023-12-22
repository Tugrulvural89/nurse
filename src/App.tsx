import React from 'react';
import './App.css';
import Header from "./layouts/Header";
import TwoColumnLayout from "./layouts/MainColum";
import MyCard from "./components/Card";
import MyContainer from "./layouts/CustomCompenents";
import ContactWidget from "./layouts/ContactWidget";
import WhyUsSection from "./layouts/CustomIconWidget";
import MainForm from "./layouts/MainForm";
import Footer from "./layouts/Footer";

function App() {
    return (
        <>
            <Header/>
            <TwoColumnLayout/>
            <MyCard/>
            <MyContainer/>
            <ContactWidget/>
            <WhyUsSection/>
            <MainForm/>
            <Footer/>
        </>
    );
}
export default App;
