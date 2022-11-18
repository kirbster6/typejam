import React, {useEffect, useState} from 'react';
import ReactConfetti from 'react-confetti';


const Confetti = () => {
  const [windowDimension, setDimension] = useState({width: window.innerWidth, height: window.innerHeight});

  const detectSize = () => {
    setDimension({width: window.innerWidth, height: window.innerHeight});
  }

  useEffect(() =>{
    window.addEventListener('resize', detectSize);
    return () => {
      window.removeEventListener('resize', detectSize);
    }
  }, [windowDimension]);

  return (
    <>
      <ReactConfetti 
        width={windowDimension.width}
        height={windowDimension.height}

      />
    </>
  )
}

export default Confetti;