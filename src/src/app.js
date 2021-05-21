import React, {Component} from 'react'

import Propriedades from './components/basico/Propriedades'
import OlaMundo from '.components/basico/OlaMundo'

class App extends Component {
	render() {
	return(

		<div>

		<h1>Propriedades</h1>
		<Propriedades nome="Homer" sobrenome="Jay Simpson" idade={38}/>

		<h1> Olá Mundo!</h1>
		<OlaMundo/>

		</div>
	)

	}
}
	export default App;