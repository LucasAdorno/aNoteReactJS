import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;1,400;1,700&display=swap');

  *{
    margin: 0;
    padding:0;
  }
  body{
    background: #131313;
  }

  ::-webkit-scrollbar-track {
    background-color: #0004;
    border-radius: 4px;
  }
  ::-webkit-scrollbar {
    width: 6px;
    background: #0004;
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb {
    background: #777;
    border-radius: 4px;
  }
`;
