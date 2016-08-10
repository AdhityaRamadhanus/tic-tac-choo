const choo = require('choo')
const html = require('choo/html')

module.exports = (state, prev, send) => {
  return html`
  <div class="container-fluid">
    <div class="main-panel">
      <div id="top-left" class="col-xs-4" row="0" col="0" onclick=${onClick}>
        <hr class="top-horizontal">
        <hr class="left-vertical">
        <h2>${state.board[0][0]}</h2>
      </div>
      <div id="top-middle" class="col-xs-4" row="0" col="1" onclick=${onClick}>
        <hr class="middle-vertical">
        <h2>${state.board[0][1]}</h2>
      </div>
      <div id="top-right" class="col-xs-4" row="0" col="2" onclick=${onClick}>
        <hr class="right-vertical" style="display: none;">
        <h2>${state.board[0][2]}</h2>
      </div>
      <div id="center-left" class="col-xs-4" row="1" col="0" onclick=${onClick}>
        <hr class="middle-horizontal">
        <h2>${state.board[1][0]}</h2>
      </div>
      <div id="center-middle" class="col-xs-4" row="1" col="1" onclick=${onClick}>
        <hr class="left-diagonal">
        <hr class="right-diagonal">
        <h2>${state.board[1][1]}</h2>
      </div>
      <div id="center-right" class="col-xs-4" row="1" col="2" onclick=${onClick}>
        <h2>${state.board[1][2]}</h2>
      </div>
      <div id="bottom-left" class="col-xs-4" row="2" col="0" onclick=${onClick}>
        <hr class="bottom-horizontal">
        <h2>${state.board[2][0]}</h2>
      </div>
      <div id="bottom-middle" class="col-xs-4" row="2" col="1" onclick=${onClick}>
        <h2>${state.board[2][1]}</h2>
      </div>
      <div id="bottom-right" class="col-xs-4" row="2" col="2" onclick=${onClick}>
        <h2>${state.board[2][2]}</h2>
      </div>
    </div>
  </div>`

  function onClick (e) {
    var rowTarget = event.currentTarget.getAttribute('row');
    var colTarget = event.currentTarget.getAttribute('col');
    send('computeMove',{type: 'x', row: rowTarget, col: colTarget})
  } 
}