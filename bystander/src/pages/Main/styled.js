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
  background: url(${schoolImg}) center/cover blur(10px);
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
  animation: fadeInUp2 2s;
`;

export const Description = styled.p`
 animation: fadeInUp1 3s;
 color: gray; 
`;