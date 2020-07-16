import styled from 'styled-components';

export const Button = styled.button`
  width:40px;
  height:40px;
  border: none;
  outline: none;
  border-radius: 5px;
  background: ${props => props.bg};
  color: #fafafa;
  font-size: 26px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover{
    background: #fafafa;
    color: ${props => props.bg};
  }

  &:active{
    border: 2px solid #e0e0e0;
  }
`;
