import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
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
