import React from 'react';
import './index.css';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

function Birthdayapp() {
  const { width, height } = useWindowSize();


  return (
    <div className="App w-full h-screen  flex items-center justify-center bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 bg-[length:200%_200%] animate-gradient-x"
    // style={{backgroundImage: "url('/GIF1.gif')"}}
    >

     <confetti width={width} height={height}/>

     <h1 className='text-4xl font-extrabold text-white animate-bounce' >Happy birthday 🎉</h1>

     <audio>
      <source src='' type='audio/mpeg'/>
     </audio>
    </div>
  );
}

export default Birthdayapp;
