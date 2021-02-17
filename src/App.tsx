import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from "./component/Hello";
import Wrapper from "./component/Wrapper";

function App() {
  const name = 'react';

  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24, // 기본 단위 px
    padding: '1rem' // 다른 단위 사용 시 문자열로 설정
  }

  return (
    <Wrapper>
      <Hello name="HanBeom"/>
      <Hello color="blue"/>
      <div style={style}>{name}</div>
      <div className="gray-box"/>
    </Wrapper>
  );
}

export default App;
