import React, { useState } from 'react';
import Card from './components/Card';
import Done from './components/Done'

let id = 0;

const App = () => {

	const [what, setWhat] = useState('');
	const [who, setWho] = useState('');
	
	const [todo, setTodo] = useState([]);
	const [doing, setDoing] = useState([]);


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

	const handleModify = (id,modWhat,modWho) => {
		const target = todo.findIndex((elem) => elem.id ===id);
		if (target === -1) return;

		setTodo([
			...todo.slice(0, target),
			{
				...todo[target],
				what: modWhat ,
				who: modWho,
				clicked: false
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

	const handleDoing = (id) => {
		const target = todo.findIndex((elem) => elem.id === id);

		setDoing([
			...doing.push(todo[target])
		]);


		setTodo(todo.filter((elem) => elem.id !== id));
	}

	return (
		<div className="toDoList">
			<div className="toDoList-header">
			<input value={what} onChange={handleWhat} placeholder="what"/>
			<input value={who} onChange={handleWho} placeholder="who" onKeyPress={handleKeyPress}/>
			<button onClick={handleClick}>make</button>
			</div>
			<div className="toDoList-body">
			<div className="toDo">
				{
					todo.map((elem, i) => 
					<Card
						what={elem.what}
						who={elem.who}
						id={elem.id}
						clicked={elem.clicked}
						handleClickCard={handleClickCard}
						handleClickDelete={handleClickDelete}
						handleModify={handleModify}
						handleDoing={handleDoing}
						key={i}
					/>)
				}
			</div>
			
			<div className="doing">
				{
					doing.map((elem, i) =>
					<Done
						what={elem.what}
						who={elem.who}
						/>)
				}
		
			</div>
			
			<div className="done"></div>
		</div>
		</div>
	);
}

export default App;