import styled from "styled-components";

export const Container = styled.div`
  background: #FFFAFA;
  width: 90%;
  height: 90vh;
  box-shadow: 1px 1px 50px 1px gray;
  display: flex;
  >div{
    &:nth-child(1){
      width: 30%;
      box-shadow: 0px 0px 100px 1px rgb(0,0,0,0.1);
    }
    &:nth-child(2){
      width: 70%;
    }
  }
`