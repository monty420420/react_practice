import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';  //state함수저장

function App() {

  //var [a,b] = [10,100]; a와 b에 10과 100을 저장

   let [글제목, 글제목변경] = useState(['남자 코트 추천','강남 우동맛집','리액트독학']); //함수실행후 array저장 [a,b]
                                        //밑에 20번째줄 []안에 숫자넣어서 몇번째 array사용할건지 입력가능
   let [따봉, 따봉변경] = useState(0);                                    
   let posts = '강남 고기 맛집';

  return (
    <div className="App">
        <div className="black-nav">
            <div style={ {color : 'blue', fontSize : '30px'} }>개발 blog</div>      
        </div>        
        <div className="list">
       <h4>{글제목[0]} <span onClick={ ()=>{ 따봉변경(따봉 + 1)} }>👍</span> {따봉} </h4>  
       <p>3월 10일</p>
       <hr/>
       </div>
       <div className="list">
       <h4>{글제목[1]}</h4>  
       <p>3월 11일</p>
       <hr/>
       </div>
       <div className="list">
       <h4>{글제목[2]}</h4>  
       <p>3월 12일</p>
       <hr/>
       </div>
    </div>
  );
}

export default App;
