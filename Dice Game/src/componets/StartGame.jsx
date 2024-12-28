import styled from "styled-components"
const StartGame = ({toggle}) => {
  return (
  <Container>
    <div>
    <img src="/src/assets/dices 1.png"/>
    </div>
    <div className="content">
        <h1>Dice Game</h1>
        <Button
        onClick={toggle}>Play Now</Button>
    </div>
  </Container>
  )
}

export default StartGame


const Container =  styled.div`
    max-width: 1180px;
    height: 100vh;
    display: flex;
    margin: 0 auto;
    align-items: center;

    .content {
        h1{
            font-size: 96px;
            white-space: nowrap;
        }
    }
`;
const Button = styled.button`
   font: 16px;
   color: wheat;
   padding: 10px 18px;
   min-width: 220px;
   height: 44px;
   background-color: black;
   border-radius: 5px;
   border: none;
   border: 1px solid black;
   transition: 0.4s background ease-in;
   cursor: pointer;
   margin-left: 310px;
   margin-top: 20px;

   &:hover{
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
   }

`
