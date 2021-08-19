'use strict';

import Nodes from './nodes.js';
import { getYoutubeList } from './youtube_service.js';

const initialState = {
  nodes:{
    items:[]
  } 
};

export default function App($app) {
  this.state = {
    nodes: [],
    depth: []
  }

  const nodes = new Nodes({
    $app,
    initialState
  })

  this.setState = nextState => {
    this.state = nextState;

    nodes.setState({
      nodes: this.state.nodes
    })
  }

  const init = async () =>{
    try{
      const rootNodes = await getYoutubeList();

      this.setState({
        ...this.state,
        nodes: rootNodes
      })
    } catch(e) {
      throw new Error(e.message);
    }
  }

  init();

}


// const nextState = {
//   nodes: [
//     {
//       // ...
//     }
//   ]
// }

// nodes.setState(nextState);
