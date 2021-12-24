import React from 'react';
import ReactDOM from 'react-dom';
import * as S from './styled';
import Calculator from './main/Calculator'
import reportWebVitals from './reportWebVitals';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <S.Container>
      <h1>Calculator</h1>
      <Calculator />
    </S.Container>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
