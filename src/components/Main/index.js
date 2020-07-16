import React from 'react';

import { CreateBox } from '../CreateBox';
import { Button } from '../Button';
import { NoteBox } from '../NoteBox';


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.dados = JSON.parse(localStorage.getItem('list_notes')) || []
    this.state = {
      api: this.dados
    }
  }
  componentDidMount() {

  }

  add() {
    let title = document.querySelector('.title')
    let content = document.querySelector('.content')
    const date = new Date();
    const key = Math.random() * 2
    if (content.value !== '') {
      this.dados.unshift({
        title: title.value,
        content: content.value,
        key,
        date: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
      })
      this.setState({
        api: this.dados,
        title: [content.value = '', title.value = '']
      })
      this.saveToStorage()
    }
    else { alert('Preencha o conteúdo antes de salvar!') }
  }

  del(key) {
    this.dados = this.dados.filter((item) => item.key !== key);
    this.setState({
      api: this.dados
    })
    this.saveToStorage()
  }

  saveToStorage() {

    localStorage.setItem('list_notes', JSON.stringify(this.dados));

  }

  render() {
    return (
      <>
        <CreateBox>
          <div className='inputsDiv'>
            <input className='title'
              placeholder='Title'
              maxLength='42' />
            <textarea className='content'
              maxLength='440' />
          </div>
          <Button
            onClick={() => this.add()}
            bg='#55cc55'
          >+</Button>
        </CreateBox>
        <NoteBox>
          {this.state.api.map(note =>
            <div key={note.key} className='noteDiv'>
              <h3 className='noteTitle'>{note.title}</h3>
              <div
                className='noteContent'>{note.content}</div>
              <div className='noteFooter'>
                <h4 className='noteDate'>{note.date}</h4>
                <Button
                  onClick={() => this.del(note.key)}
                  bg='#ee3322'
                >x</Button>
              </div>
            </div>
          )}
        </NoteBox>
      </>
    );
  }
}

export default Main;