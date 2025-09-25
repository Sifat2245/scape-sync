import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';

const Home = () => {
    return (
        <div>
            <div
                className='top-[50px] left-[-780px] w-[560px] h-[630px] absolute bg-[#3BA334]/90 rounded-full blur-[300px] transform -rotate-[33.64eg]'
            />
            <div
                className='top-56 right-[100px] w-[637px] h-[922px] absolute bg-[#3BA334]/20 rounded-full blur-[300px] transform rotate-[-55.51deg]'
            />
            <Navbar></Navbar>
            <Hero></Hero>
            <Features></Features>
        </div>
    );
};

export default Home;