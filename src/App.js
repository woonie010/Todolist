import React, { useState } from 'react';
import Card from './components/Card';

let id = 0;

const App = () => {

	const [what, setWhat] = useState('');
	const [who, setWho] = useState('');
	
	const [todo, setTodo] = useState([]);

	const [mod, setMod] = useState('');


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
				who: who,
				clicked: false,
			}
		]);
		setWho('');
		setWhat('');
	}
	
	const handleClickCard = (id) => {
		const target = todo.findIndex((elem) => elem.id === id);
		if (target === -1) return;

		setTodo([
			...todo.slice(0, target),
			{
				...todo[target],
				clicked: !todo[target].clicked
			},
			...todo.slice(target + 1, todo.length)
		]);
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
						clicked={elem.clicked}
						handleClickCard={handleClickCard}
						handleClickDelete={handleClickDelete}
						key={i}
					/>)
				}
			</div>
		</div>
	);
}

export default App;