import React, { Component } from 'react';


class Listapacientes extends Component {
    state={
        Lista:null
    }
    componentDidMount(){
        let paciente = [];
        for (let i = 0; i <= 10; i++) {
            let mod;
            if (i % 2 === 0) {
                mod = 'US';
            }
            else {
                mod = 'CT';
            }
            paciente.push(
                <li key={i}>
                    <span className='icono'>
                        <span className={'modalidad ' + mod}></span>
                    </span>
                    <span className='Datos'>
                        <div className='principal'>
                            <span>5409789</span><span>Jose Luis Camacho Moreno</span><span>M</span>
                        </div>
                        <div className='secundario'>
                            <span>30/01/2019</span><span className='descripcion'>Descripcion del estudio realizado</span>
                        </div>
                    </span>
                </li>
            )
        }
        this.setState({Lista:paciente})
    }
    render() {
        return (
            <div id='Lista'>
                <div className='buscador'>
                    <span className="icono"><i className="material-icons">search</i></span><span className="input"><input type="text" name='Busqueda' placeholder='Buscar'/></span>
                </div>
                <ul>
                    {this.state.Lista}
                </ul>
            </div>

        );
    }
}

export default Listapacientes;