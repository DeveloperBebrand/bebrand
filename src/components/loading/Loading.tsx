'use client'
import Image from 'next/image';
import { useEffect } from 'react';
import img from '../../assets/be-brand.png';
 

export default function Loading() {
    useEffect(() => {
        var elem = document.getElementById("progressBar");
        var width = 0;
        var id = setInterval(frame, 30);

        function frame() {
            if (width >= 100) {
                clearInterval(id);
            } else {
                width++;
                if (elem) { // Add null check
                    elem.style.width = width + '%';
                    elem.innerHTML = width * 1 + '%';
                }
            }
        }
    }, []);

    return (
        <>
            <div className="w-full h-screen bg-secondary bg-cover bg-center flex justify-center items-center">
                <div className="progress-container">
                    <div className="progress-bar" id="progressBar">0%</div>
                </div>
            </div>
        </>
    );
}