import styled from "styled-components";
import schoolImg from "../../media/img/school.jpg";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  white-space: nowrap;
  text-align: center;
  font-size: 1.5rem;
  box-shadow: inset 1px 1px 50px 10px black;
  font-family: "Jeonju_gakR";
  overflow: hidden;
`;

export const Intro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  animation: fadeInUp2 3s;
`;

export const InputSet = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 300px;
  height: 50px;
  display: flex;
  border-radius: 2px;
  border-bottom: 0.5px solid #333;
  input {
    position: absolute;
    left: 5px;
    width: 100%;
    height: 100%;
    font-size: 20px;
    outline: none;
    padding: 15px;
    border: 0;
    background-color: transparent;
  }
  a {
    width: 100px;
    height: 100%;
    position: absolute;
    right: -70px;
    img {
      width: 50px;
      height: 50px;
    }
  }
  animation: fadeInUp2 5s;
`;

export const Title = styled.h1``;

export const Description = styled.p`
  line-height: 40px;
  color: gray;
`;

export const MainContent = styled.div`
  position: relative;
  animation: floatingMotion 0.5s linear 0s infinite alternate;
  top: 0;
`;
