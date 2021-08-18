'use strict';

const $app = document.querySelector('.app');

const initialState = {
  nodes: []
};

const nodes = new Nodes({
  $app,
  initialState
});

