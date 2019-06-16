import React from 'react';
import ReactDOM from 'react-dom';
import Game from './Game';
import './index.css';

// ========================================   
ReactDOM.render(
  <Game nbSquares={9} nbLines={3}/>,
  document.getElementById('root')
);