import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

const Home = () => {
    return (
        <div>
            <div
                className='top-[-100px] left-[-600px] w-[560px] h-[630px] absolute bg-[#3BA334]/40 rounded-full blur-[300px] transform -rotate-[33.64eg]'

            />
            <div
                className='bottom-0 right-[-100px] w-[633px] h-[922px] absolute bg-[#3BA334]/30 rounded-full blur-[300px] transform -rotate-[45.51deg]'

            />
            <Navbar></Navbar>
            <Hero></Hero>
        </div>
    );
};

export default Home;