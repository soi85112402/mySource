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
    this.$target.innerHTML = this.state.nodes.items.map(node => `
    <li class="list">
      <img src="${node.snippet.thumbnails.default.url}">
      <span class="title">${node.snippet.title}</span>
    </li>`).join('');

    this.$target.querySelectorAll('.list').forEach($node => {
      $node.addEventListener('click', e => {
        const {nodeId} = e.target.dataset;
        const selectNode = this.state.nodes.find(node => node.id === nodeId)

        if(selectNode){
          this.onClick(selectNode);
        }

      })
    })
  }

  

}