import { useState } from "react"
import styled from "styled-components"

const RollDice = ({rollDice,currentDice}) => {

  return (
    <DiceContainer>
        <div className="dice" onClick={rollDice}>
            <img src={`/src/assets/Dices/dice_${currentDice}.png `}/>
        </div>
        <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RollDice

const DiceContainer = styled.div`
    display: flex;
    flex-direction: column  ;
    align-items: center;
    margin-top: 48px;

    .dice{
        cursor: pointer;
    }
    img{
        height: 200px;
    }

    p{
        font-size: 24px;
    }
`
