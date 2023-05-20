import styled from "styled-components";
import schoolImg from "../../media/img/school.jpg"

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
  font-family: 'Jeonju_gakR';
`;

export const InputSet = styled.div`
  width: 250px;
  height: 50px;
  display:flex;
  border-radius: 100px;
  overflow:hidden;
  border: 2px solid #333;
  input{
    width: 70%;
    height: 100%;
    font-size: 1.5rem;
    outline:none;
    padding: 15px;
  } 
  button{
    width: 30%;
    height: 100%;
    background:  #333;
    color: white;
    font-weight:bold;
    font-size: 1.5rem;  
  }
`;

export const Title = styled.h1`
`;

export const Description = styled.p`
 line-height: 40px;
 color: gray; 
`;

export const MainContent = styled.div`
animation: fadeInUp2 3s;`;