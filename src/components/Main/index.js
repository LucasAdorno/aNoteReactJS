import React, { useEffect, useState } from 'react';

import CreateBox from '../CreateBox';
import NoteBox from '../NoteBox';

const Main = (props) => {

  let dados = JSON.parse(localStorage.getItem('list_notes')) || []
  const [api, setApi] = useState(dados);
  const [input, setInput] = useState([]);

  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      let inputKey = e.which || e.keyCode;
      if (document.querySelector('body').offsetWidth >= 1024 && inputKey === 13 && !e.shiftKey) {
        e.preventDefault();
        add();
      }
    }
    );
  }, [])

  const add = () => {
    let title = document.querySelector('.title')
    let content = document.querySelector('.content')
    const date = new Date();
    const key = Math.random() * 2
    if (content.value !== '') {
      dados.unshift({
        title: title.value,
        content: content.value,
        key,
        date: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
      })
      setApi(dados);
      setInput([content.value = '', title.value = '']);
      saveToStorage();
      title.focus();
    }
    else { alert('Preencha o conteúdo antes de salvar!') }
  }

  const del = (key) => {
    dados = dados.filter((item) => item.key !== key);
    setApi(dados);
    saveToStorage()
  }

  const saveToStorage = () => {
    localStorage.setItem('list_notes', JSON.stringify(dados));
  }

  return (
    <>
      <CreateBox add={() => add()} />
      <NoteBox api={api} del={(e) => del(e)} />
    </>
  );
}

export default Main;