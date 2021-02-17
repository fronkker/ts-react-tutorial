import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from "./component/Hello";

function App() {
  const name = 'react';

  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24, // 기본 단위 px
    padding: '1rem' // 다른 단위 사용 시 문자열로 설정
  }

  return (
    <div className="App">
      <Hello/>
      <Hello/>
      <div style={style}>{name}</div>
      <div className="gray-box"/>
    </div>
  );
}

export default App;
