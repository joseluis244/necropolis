import React, { Component } from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import './App.css';

import Main from './componentes/Main/Main';

const Index = ()=>{
  return(
    <div>asdasd</div>
  )
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Index}/>
          <Route path='/main' exact component={Main}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
