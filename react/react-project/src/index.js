import React from 'react'
import ReactDOM from 'react-dom'
import PrimeiroComponente from './componentes/primeiroComponente'
import BomDia from './componentes/bomDia'
import { BoaTarde, BoaNoite } from './componentes/multiplosComponentes'
import Saudacao from './componentes/saudacao'


ReactDOM.render( 


    <div>
        <PrimeiroComponente />
        <BomDia nome="João" />
        <BoaTarde nome="Maria" />
        <BoaNoite nome="José" />
        <Saudacao tipo="Bom dia" nome="João" />
    </div>,

document.getElementById('root')

)       