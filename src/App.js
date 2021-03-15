import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState('남자 코트 추천');
  let [글제목2, 글제목변경2] = useState('남자 코트 추천2');
  let [글제목3, 글제목변경3] = useState(['남자 코트 추천1', '강남 치킨 맛집']);
  let posts = '강남 초밥 맛집';
  function 함수(){
    return 100
  }

  return (
    <div className="App">
      <div className = "black-nav"> 
          <div style={ { color : 'blue', fontSize : '30px'} }>개발 Blog</div>   
      </div> 
      <div className = "list">
          <h3> { 글제목3[1] }</h3>
          <p>2월 18일 발행</p>
          <hr/>
      </div>
      <h4> { posts }</h4>
      <h4> { 함수() }</h4>
      <img src = { logo }/>  
    </div>
  );
}

export default App;
