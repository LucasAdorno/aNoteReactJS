import styled from 'styled-components';

export const CreateBox = styled.div`

  display: flex;
  justify-content: space-between;
  width: 600px;
  height: 220px;
  margin: 30px auto 0;
  border-radius: 6px;
  background: #7733ff77;
  box-shadow: 8px 8px 1px #222;

  div{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width:80%;
    padding: 10px;
  }

  div .title{
    width: 260px;
    height: 28px;
    padding-left: 8px;
    border: none;
    border-radius:5px;
    font-weight: bold;
    background: #f0f0f0;
    outline: none;
  }

  div .content{
    width: 100%;
    height: 140px;
    padding: 8px;
    border: none;
    border-radius:7px;
    background: #f0f0f0;
    resize: none;
    outline: none;
  }

  button{
    margin: 6px 6px 0 0;
  }

  @media(max-width: 767px){
    width: 94%;
  }

  
`;
