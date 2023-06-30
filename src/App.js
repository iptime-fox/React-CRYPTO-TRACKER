import styled, { keyframes } from 'styled-components';

const Father = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.backgroundColor};
`;

// const Box = styled.div`
//   background-color: ${(props) => props.bgColor};
//   width: 100px;
//   height: 100px;
// `;

// const Text = styled.h1`
//   color: white;
// `;

// const Circle = styled(Box)`
//   border-radius: 50%;
// `;

// const Btn = styled.button`
//   color: white;
//   background-color: tomato;
//   border: 0;
//   border-radius: 15px;
// `;

// const Input = styled.input.attrs({ required: true })`
//   background-color: tomato;
// `;

// const rotateAnimation = keyframes`
//   0%{
//     transform:rotate(0deg);
//     border-radius:0px;
//   }
//   50% {
//     border-radius:100px;
//   }
//   100%{
//     transform:rotate(360deg);
//     border-radius:0px;
//   }
// `;
const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

// const Emoji = styled.span`
//   font-size: 36px;
// `;

// const Box = styled.div`
//   height: 200px;
//   width: 200px;
//   background-color: pink;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   animation: ${rotateAnimation} 1s linear infinite;
//   ${Emoji} {
//     &:hover {
//       font-size: 98px;
//     }
//     &:active {
//       opacity: 0;
//     }
//   }
// `;

function App() {
  return (
    <Father>
      <Title>Hello</Title>
    </Father>
  );
}

export default App;
