import React, { useState } from 'react';
import TotalScore from './TotalScore';
import NumberSelector from './NumberSelector';
import styled from 'styled-components';
import RollDice from './RollDice';

const Gameplay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const[error,setError] =useState("");

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rollDice = () => {

    if(!selectedNumber){
      setError("You have not selected any number");
      return ;
    }

    setError("")
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice(randomNumber);
    if(!selectedNumber) return;
    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber({undefined});
  };
  
  const resetScore=()=>{
    setScore(0);
  }
  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector 
        error={error}
        setError={setError}
        selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} />
      </div>
      <RollDice currentDice={currentDice} rollDice={rollDice} />
      <div className="btns">
        <Button onClick={resetScore}>Reset Score</Button>
      </div>
    </MainContainer>
  );
};

export default Gameplay;

const MainContainer = styled.main`
  padding-top: 70px;
  .top_section {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }

`;

const Button = styled.button`
   font: 16px;
   color: black;
   padding: 10px 18px;
   min-width: 220px;
   height: 44px;
   background-color: white;
   border-radius: 5px;
   border: none;
   border: 1px solid black;
   transition: 0.4s background ease-in;
   cursor: pointer;
   margin-top: 20px;
  margin-left: 550px;

   &:hover{
    background-color: black;
    border: 1px solid black;
    color: white;
    transition: 0.3s background ease-in;
   }

`
