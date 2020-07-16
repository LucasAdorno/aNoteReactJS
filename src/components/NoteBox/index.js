import styled from 'styled-components';

export const NoteBox = styled.div`

@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;1,400;1,700&display=swap');


  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  gap: 20px;
  width: 90%;
  margin: 30px auto 0;
  font-family: 'Lato', sans-serif;
 
  .noteDiv{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 220px;
    width: 390px;
    border-radius: 10px;
    background: #333;
    color: #fafafa;
  }

  .noteDiv .noteTitle{
    width: 100%;
    min-height: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    border-radius: 10px 10px 0 0;
    background: #fff3;
  }

  .noteDiv .noteContent{
    width: 96%;
    height: 120px;
    padding: 6px;
    white-space: pre-wrap;
    word-wrap: break-word;
    overflow: auto;
  }

  .noteDiv .noteFooter{
    width:98%;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding: 0 0 6px 0;
    font-size: 15px;
  }

  .noteDiv .noteFooter button{
    width: 28px;
    height: 28px;
    font-size: 15px;
  }

  @media(max-width: 1200px){
    grid-template-columns: 1fr 1fr;
  }
  @media(max-width: 920px){
    display: flex;
    flex-direction: column;
    width: 95%;

    .noteDiv{
      width: 100%;
    }
  }
`;