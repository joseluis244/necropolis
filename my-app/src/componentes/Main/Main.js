import React, { Component } from 'react';

import Listapacientes from './Listapacientes/ListaPacientes'



class Main extends Component {
    render() {
      return (
        <div id='main'>
          <header>
            Lista de Pacientes
          </header>
          <div className='Drawer'>
            drawer
          </div>
          <main>
            <Listapacientes/>
          </main>
        </div>
      );
    }
  }
  
  export default Main;