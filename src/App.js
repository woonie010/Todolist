import React, { useState } from 'react';
import Card from './components/Card';



const App = () => {

	const [what, setWhat] = useState('');
	const [who, setWho] = useState('');
	
	const [todo, setTodo] = useState([]);


	const handleWhat = (e) => { 
		setWhat(e.target.value);
	}

	const handleWho = (e) => {
		setWho(e.target.value);
	}

	const handleClick = () => {
		setTodo([
			...todo,
			{
				what,
				who
			}
		]);
		setWho('');
		setWhat('');
		console.log(todo);
	}
	

	const handleKeyPress = (e) => {
		if (e.key === 'Enter') {
			handleClick();
		}
	}

	const test = () => {
	
	}

	return (
		<div>
			<input value={what} onChange={handleWhat} placeholder="what"/>
			<input value={who} onChange={handleWho} placeholder="who" onKeyPress={handleKeyPress}/>
			<button value={todo}onClick={handleClick}>make</button>
			<button onClick={test}>test</button>

			<div>
				{
					todo.map((elem, i) => <Card {...elem} key={i} />)
				}
			</div>
		</div>
	);
}

export default App;