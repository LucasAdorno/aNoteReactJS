
import React from 'react';
import { Container } from './styles';
import { Button } from '../Button';

const NoteBox = (props) => {

  return (
    <Container>
      {props.api.map(note =>
        <div key={note.key} className='noteDiv'>
          <h3 className='noteTitle'>{note.title}</h3>
          <div
            className='noteContent'>{note.content}</div>
          <div className='noteFooter'>
            <h4 className='noteDate'>{note.date}</h4>
            <Button
              onClick={() => props.del(note.key)}
              bg='#ee3322'> x </Button>
          </div>
        </div>
       )
      }
    </Container>
  );
}

export default NoteBox;