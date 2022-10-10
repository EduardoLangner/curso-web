import React from 'react'
import ReactDOM from 'react-dom'
import PrimeiroComponente from './componentes/primeiroComponente'
import BomDia from './componentes/bomDia'
import { BoaTarde, BoaNoite } from './componentes/multiplosComponentes'


ReactDOM.render( 


    <div>
        <PrimeiroComponente />
        <BomDia nome="João" />
        <BoaTarde nome="Maria" />
        <BoaNoite nome="José" />
    </div>,

document.getElementById('root')

)       