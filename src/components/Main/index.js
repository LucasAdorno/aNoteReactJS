import React from 'react';

import CreateBox from '../CreateBox';
import NoteBox from '../NoteBox';


class Main extends React.Component {

  constructor(props) {
    super(props);
    this.dados = JSON.parse(localStorage.getItem('list_notes')) || []
    this.state = {
      api: this.dados
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', (e) => {
      let inputKey = e.which || e.keyCode;
      if (document.querySelector('body').offsetWidth >= 1024 && inputKey === 13 && !e.shiftKey) {
          e.preventDefault();
          this.add();
        }
      }
    );
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
        input: [content.value = '', title.value = '']
      })
      this.saveToStorage();
      title.focus();
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
        <CreateBox add={()=> this.add() } />
        <NoteBox api={this.state.api}  del={(e)=>this.del(e)} />
      </>
    );
  }
}

export default Main;