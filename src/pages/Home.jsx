import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import UseCase from '../components/UseCase';
import Feedback from '../components/Feedback';

const Home = () => {
    return (
        <div>
            <div
                className='top-[50px] left-[-780px] w-[560px] h-[630px] absolute bg-[#3BA334]/90 rounded-full blur-[300px] transform -rotate-[33.64eg] hidden xl:block'
            />
            <div
                className='top-56 right-[100px] w-[637px] h-[922px] absolute bg-[#3BA334]/20 rounded-full blur-[300px] transform rotate-[-55.51deg] hidden xl:block'
            />
            <Navbar></Navbar>
            <Hero></Hero>
            <Features></Features>
            <UseCase></UseCase>
            <Feedback></Feedback>
        </div>
    );
};

export default Home;