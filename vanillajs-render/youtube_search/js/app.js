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
    isRoot: true,
    nodes: [],
    depth: [],
    selectedFilePath : null
  }

  const nodes = new Nodes({
    $app,
    initialState,
    onClick : async (node)=>{
      try{
        const nextNodes = await request(node.id);
        this.setState({
          ...this.state,
          depth : [...this.state.depth, node],
          nodes : nextNodes
        })
      }catch(e){
        console.error(e.message);
      }
    }
  })

  this.setState = nextState => {
    this.state = nextState;

    nodes.setState({
      nodes: this.state.nodes
    })
  }

  const init = async () =>{
    const ul = document.createElement('ul');
    try{
      const rootNodes = await getYoutubeList();
      
      this.setState({
        ...this.state,
        nodes: rootNodes
      });

    } catch(e) {
      // console.error(e);
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
