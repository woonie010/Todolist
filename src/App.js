import React, { useState } from 'react';
import styled from 'styled-components';
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
				who: who,
				clicked: false,
				status: 0
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

	const handleModify = (id, modWhat, modWho) => {
		const target = todo.findIndex((elem) => elem.id === id);
		if (target === -1) return;

		setTodo([
			...todo.slice(0, target),
			{
				...todo[target],
				what: modWhat,
				who: modWho,
				clicked: false,
			},
			...todo.slice(target + 1, todo.length)
		]);
	}
	
	const handleClickStatus = (id) => {
		const target = todo.findIndex((elem) => elem.id === id);
		if (target === -1) return;

		setTodo([
			...todo.slice(0, target),
			{
				...todo[target],
				status: (todo[target].status + 1) % 2
			},
			...todo.slice(target + 1, todo.length)
		])
	}

	const handleClickDelete = (id) => {
		setTodo(todo.filter((elem) => elem.id !== id));
	}

	const handleKeyPress = (e) => {
		if (e.key === 'Enter') {
			handleClick();
		}
	}
	console.log(todo);
	const Progress = todo.filter((elem) => elem.status === 0);
	const Done = todo.filter((elem) => elem.status === 1);

	return (
		<Container>
			<InputContainer>
				<Input value={what} onChange={handleWhat} placeholder={'무엇을'} />
				<Input value={who} onChange={handleWho} onKeyPress={handleKeyPress} placeholder={'누구랑'} />
				<Button onClick={handleClick}>생성</Button>
			</InputContainer>
			<TodoContainer>
				{
					Progress.length > 0 &&
					<ProgressContainer>
						<Caption status={0}>진행중</Caption>
						{
							Progress.map((elem, i) =>
								<Card {...elem} key={i}
									handleClickCard={handleClickCard}
									handleModify={handleModify}
									handleClickDelete={handleClickDelete}
									handleClickStatus={handleClickStatus}
								/>
							)
						}
					</ProgressContainer>
				}

				{
					Done.length > 0 &&
					<DoneContainer>
						<Caption status={1}>완료</Caption>
						{
							Done.map((elem, i) =>
								<Card {...elem} key={i}
									handleClickCard={handleClickCard}
									handleModify={handleModify}
									handleClickDelete={handleClickDelete}
									handleClickStatus={handleClickStatus}
									/>
							)
						}
					</DoneContainer>
				}

			</TodoContainer>
		</Container>
	);
}

const Container = styled.div`
	width: 600px;
	padding: 25px;
	box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1), 0 2px 12px rgba(0, 0, 0, 0.1);
	margin: 0 auto;
	background-color: white;
	margin-top: 50px;
	display: flex;
	flex-direction: column;
`

const InputContainer = styled.div`
	padding: 30px;
	display: flex;
	flex-direction: column;
	border-bottom: 1px solid rgb(220, 220, 220);
`

const Input = styled.input`
	border: none;
	border-bottom: 2px solid black;
	font-size: 20px;
	width: 80%;
	margin: 0 auto;

	& + & {
		margin-top: 30px;
	}

	&:focus {
		outline: none;
	}
`

const Button = styled.button`
	border: none;
	background-color: rgb(235, 100, 107);
	box-shadow: 0 5px 12px rgba(0, 0, 0, 0.1), 0 5px 12px rgba(0, 0, 0, 0.1);
	width: 80%;
	height: 35px;
	margin: 0 auto;
	color: white;
	margin-top: 15px;
	font-size: 16px;
`

const TodoContainer = styled.div`
	margin-top: 20px;
`

const ProgressContainer = styled.div`

`
const DoneContainer = styled.div`
	margin-top: 15px;
`

const getStatus = (status) => {
	if (status === 0) {
		return 'rgb(235, 100, 107)';
	}
	else if (status === 1) {
		return 'green';
	}
	return 'black';
}

const Caption = styled.div`
	width: 200px;
	height: 30px;
	background-color: ${(props) => getStatus(props.status)};
	margin-left: 70px;
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
	border-radius: 10px 10px 0 0;
`



export default App;