import React  from 'react';
import Proptypes from 'prop-types'
import { Counter } from './Counter'
import {According} from './Accordion'
import { Input } from './Input'
import "./App.css"

function App() {
	return (<div className="App">
	<header className="App-header">
	  <Input/>
	  <HelloWorld  name ='Sccot' gretting= "yo" />
		<HelloWorld  name = "Synthia" />
		<Counter/>
		<According />
		

	</header>
  </div>);
}

function HelloWorld({name , gretting = "Hello"}) {
return <h1> {gretting} {name} </h1>
  }

	HelloWorld.proptypes = {
		name: Proptypes.string,
		gretting : Proptypes.string,
	}
export default App;
