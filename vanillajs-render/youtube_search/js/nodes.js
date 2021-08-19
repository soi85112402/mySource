'use strict';

export default class Nodes {

  constructor({ $app, initialState, onClick }) {
    this.state = initialState;
    this.$target = document.createElement('ul');
    $app.appendChild(this.$target);

    this.onClick = onClick;

    this.render();
  }

  setState(nextState) {
    this.state = nextState;

    this.render();
  }
  
  render() {
    console.log('this.state.nodes',this.state.nodes)
    this.$target.innerHTML = this.state.nodes.items.map(node => `
    <li>
      <img src="${node.snippet.thumbnails.default.url}">
      <span class="title">${node.snippet.title}</span>
    </li>`).join('');
  }
}