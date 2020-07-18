import styled from 'styled-components';

export const CreateBox = styled.div`

  display: flex;
  width: 600px;
  height: 220px;
  margin: 30px auto 0;
  border-radius: 6px;
  background: #7733ff77;
  box-shadow: 8px 8px 1px #222;

  div{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    width:90%;
    padding: 10px;
  }

  div .title{
    width: 100%;
    height: 40px;
    padding-left: 8px;
    border: none;
    border-radius:5px 0 0 5px;
    font-family: 'Lato', sans-serif;
    font-size: 16px;
    font-weight: bold;
    background: #e5e5e5;
    outline: none;
  }

  div .content{
    width: calc(100% + 30px);
    height: 140px;
    padding: 8px;
    border: none;
    border-radius:7px;
    background: #e5e5e5;
    font-family: 'Lato', sans-serif;
    font-size: 14px;
    resize: none;
    outline: none;
  }

  button{
    margin: 10px 6px 0 -2px;
    border-radius: 0 5px 5px 0;
  }

  @media(max-width: 767px){
    width: 94%;
  }


`;
