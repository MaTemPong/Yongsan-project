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
`;

export const InputSet = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 300px;
  height: 50px;
  display: flex;
  border-radius: 9px;
  overflow: hidden;
  border: 0.1px solid #333;
  input {
    position: absolute;
    left: 30px;
    width: 70%;
    height: 100%;
    font-size: 20px;
    outline: none;
    padding: 15px;
    border: 0;
  }
  button {
    position: absolute;
    right: 0;
    width: 75px;
    height: 100%;
    background: #333;
    color: white;
    font-weight: 700;
    font-size: 18px;
  }
`;

export const Title = styled.h1``;

export const Description = styled.p`
  line-height: 40px;
  color: gray;
`;

export const MainContent = styled.div`
  animation: fadeInUp2 3s;
`;
