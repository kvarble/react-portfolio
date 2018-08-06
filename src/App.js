import React, { Component } from 'react';
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import Grid from "./components/Grid";


import './App.css';

class App extends Component {
  state = {
    letters:["k","a","t","h","y","v","a","r","b","l","e"]
  }
  render() {
    return (
      <Wrapper>
        <Title className="row">Kathy Varble</Title>
      <div>
        <Grid>
          {this.state.letters}
          </Grid>
 
      </div>
      </Wrapper>
    );
  }
}

export default App;
