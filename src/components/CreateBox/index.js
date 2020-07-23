
import React from 'react';
import { Container } from './styles';
import { Button } from '../Button';

const CreateBox = (props) => {

  return (
    <Container>
      <div className='inputsDiv'>
        <input className='title'
          placeholder='Title'
          maxLength='42' />
        <textarea className='content'
          maxLength='440' />
      </div>
      <Button
            onClick={props.add}
            bg='#55cc55'> + </Button>
    </Container>
  );
}

export default CreateBox;