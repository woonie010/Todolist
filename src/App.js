import React, { useState } from 'react';
import Card from './components/Card';

let id = 0;

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
				id: id++,
				what: what,
				who: who
			}
		]);
		setWho('');
		setWhat('');
	}
	
	const handleClickDelete = (id) => {
		setTodo(todo.filter((elem) => elem.id !== id));
	}

	const handleKeyPress = (e) => {
		if (e.key === 'Enter') {
			handleClick();
		}
	}

	return (
		<div>
			<input value={what} onChange={handleWhat} placeholder="what"/>
			<input value={who} onChange={handleWho} placeholder="who" onKeyPress={handleKeyPress}/>
			<button onClick={handleClick}>make</button>
			<div>
				{
					todo.map((elem, i) => 
					<Card
						what={elem.what}
						who={elem.who}
						id={elem.id}
						handleClickDelete={handleClickDelete}
						key={i}
					/>)
				}
			</div>
		</div>
	);
}

export default App;