import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from "./component/Hello";
import Wrapper from "./component/Wrapper";
import Counter from "./component/Counter";

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
      <Hello name="HanBeom"/>
      <Hello color="blue"/>
      <Wrapper>
        <div style={style}>{name}</div>
        <div className="gray-box"/>
      </Wrapper>
      <Counter isSpecial={true} />
      <Counter />
      <Counter isSpecial />
    </div>
  );
}

export default App;
