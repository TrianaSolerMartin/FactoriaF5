import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CountdownContainer = styled.div`
  font-size: 2rem;
  text-align: center;
  margin-top: 100px;
`;

const Button = styled.button`
  font-size: 1rem;
  padding: 10px 20px;
  margin: 0 10px;
  cursor: pointer;
`;

const Countdown = () => {
  const [count, setCount] = useState(10);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCount(prevCount => prevCount - 1);
    }, 1000);

    setIntervalId(id);

    return () => {
      clearInterval(id);
    };
  }, []);

  const handlePause = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };

  const handleResume = () => {
    if (!intervalId) {
      const id = setInterval(() => {
        setCount(prevCount => prevCount - 1);
      }, 1000);
      setIntervalId(id);
    }
  };

  const handleReset = () => {
    clearInterval(intervalId);
    setIntervalId(null);
    setCount(10);
  };

  return (
    <CountdownContainer>
      <p>Nuestra presentación comienza en: {count}</p>
      <div>
        <Button onClick={handlePause}>Pausa</Button>
        <Button onClick={handleResume}>Reanudar</Button>
        <Button onClick={handleReset}>Reiniciar</Button>
      </div>
    </CountdownContainer>
  );
};

export default Countdown;