import styled from "styled-components";

export const Screen = styled.div`
  background-color: white;
  border: 10px solid black;
  width: 70vw;
  height: 70vh;
  border-radius: 20px;
  cursor: pointer;
`;

export const Bg = styled.body`
  background-image: url("./image/bg.png");
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Computer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  flex-direction: column;
`;

export const Text = styled.div`
  color: white;
  font-size: large;
  @media screen and (max-width: 900px) {
    font-size: 13px;
  }
`;

export const Timer = styled.div`
  color: white;
  margin-top: 60px;
  font-size: 3rem;
`;

export const Modal = styled.div`
  position: fixed;
  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
    to {
      opacity: 1;
      transform: translateZ(0);
    }
  }
  animation: fadeInUp 1s;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const img = styled.img`
  width: 15vw;
  height: auto;
  @media screen and (max-width: 900px) {
    width: 30vw;
    height: auto;
  }
`;

export const Title = styled.div`
  font-size: 2rem;
  margin-bottom: 10px;
  color: white;
  font-weight: bold;
  @media screen and (max-width: 900px) {
    font-size: 1.5rem;
  }
`;

export const Box = styled.div``;

export const Name = styled.div`
  display: flex;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
`;

export const Faker = styled.img`
  width: 40vw;
  height: auto;
  @media screen and (max-width: 900px) {
    width: 40vw;
    height: auto;
  }
`;
