import styled from 'styled-components';

export const Container = styled.header`

@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;1,400;1,700&display=swap');


    display: flex;
    align-items:center;
    height: 80px;
    width: 100%;
    background: #000;
    box-shadow: 0 1px 3px #7700ff;
;  

    a{
      text-decoration: none;
    }

    a h1{
      color: #fafafa;
      padding-left: 30px;
      font-family: 'Montserrat', sans-serif;
      font-style: italic;
      font-weight: 700;
    }

    @media(max-width: 767px){
      justify-content: center;

      a h1{
        padding-left:auto;
      }

    }

`;
