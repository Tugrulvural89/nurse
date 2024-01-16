import React from 'react';
import './App.css';
import TwoColumnLayout from "./layouts/MainColum";
import MyCard from "./components/Card";
import MyContainer from "./layouts/CustomCompenents";
import ContactWidget from "./layouts/ContactWidget";
import WhyUsSection from "./layouts/CustomIconWidget";
import MainForm from "./layouts/MainForm";
import Footer from "./layouts/Footer";
import Navbar from "./components/Nav";
import FaqLayout from "./layouts/faq";

function App() {
    return (
        <>
            <Navbar/>
            <TwoColumnLayout/>
            <MyCard/>
            <WhyUsSection/>
            <MyContainer/>
            <ContactWidget/>
            <FaqLayout />
            <MainForm/>
            <Footer/>
        </>
    );
}
export default App;
