import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { AddEvent, FilterEvent } from '../index.js';
function Home() {
    const typedRef = useRef(null);

    useEffect(() => {
        typedRef.current = new Typed('#element', {
            strings: ['Plan, Schedule, Succeed', 'Your Event, Perfectly Timed'],
            typeSpeed: 100, // Adjusted for readability
            showCursor: true,
            cursorChar: '|',
            loop: true,
        });

        return () => {
            typedRef.current.destroy();
        };
    }, []);

    return (
        <>
            <div className="h-screen bg-cover py-48 bg-center bg-[url('./assets/background1.jpg')] transition-opacity duration-700">
                <span id="element" className='text-5xl pl-24 text-white font-bold drop-shadow-lg'></span>
            </div>
            <AddEvent />
            <FilterEvent />
        </>
    );
}

export default Home;
