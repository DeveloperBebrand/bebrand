'use client'
import Image from 'next/image';

import img from '../../assets/be-brand.png'
import { useEffect } from 'react';
export default function Loading() {

     useEffect(() => {

        var elem = document.getElementById("progressBar");
        var width = 0;
        var id = setInterval(frame, 30);

        function frame() {
          if (width >= 100) {
            clearInterval(id);
          } else {
            if (width >= 100) {

                clearInterval(id);

              } else {
                width++;
                if (elem) { // Add null check

                  elem.style.width = width + '%';

                  elem.innerHTML = width * 1  + '%';
                }

              }
          }
        }
     })
    return (

        <>
        
        <div className="w-full h-screen bg-secondary bg-cover bg-center flex justify-center items-center">

        <div className="progress-container" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '50%' }}>
          <div className="progress-bar text-white lg:text-4xl text-xl flex justify-end items-center" id="progressBar" style={{ width: '0%', textAlign: 'right', paddingRight: '10px' }}>0%</div>

        </div>
         
           </div>
        
        </>
    );
}