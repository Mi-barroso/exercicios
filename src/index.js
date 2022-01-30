import React from 'react'
import ReactDOM from 'react-dom'
import Saudacao from "./componentes/Saudacao";
import {BoaTarde, BoaNoite} from "./componentes/Multiplos";

ReactDOM.render(
    <div>
    <Saudacao nome={'Ana'} tipo={'Bom dia'}/>
    </div>
, document.getElementById('root2'))
