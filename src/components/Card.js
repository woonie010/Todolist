import React, { useState } from 'react';
import styled from 'styled-components';
import replay from '../images/replay.png';

const Card = ({
	what,
	who,
	clicked,
	status,
	id,
	handleClickDelete,
	handleClickCard,
	handleModify,
	handleClickStatus
}) => {
	const [modWhat, setModWhat] = useState(what);
	const [modWho, setModWho] = useState(who);

	const handleChangeWhat = (e) => {
		setModWhat(e.target.value);
	}
	const handleChangeWho = (e) => {
		setModWho(e.target.value);
	}

	const handleClickInput = (e) => {
		e.stopPropagation();
	}
	console.log(id, status);


	return (
		<Container onClick={() => handleClickCard(id)}>
			{
				!clicked ?
					(
						<InfoContainer onClick={handleClickInput}>
							<What>
								{what}
								<OptionContainer>
									<Image src={replay} onClick={() => handleClickStatus(id)} />
									<XButton onClick={() => handleClickDelete(id)}>X</XButton>
								</OptionContainer>
							</What>
							<Who>
								{who}
							</Who>
						</InfoContainer>
					) :
					(
						<ModifyContainer onClick={handleClickInput}>
							<Modify value={modWhat} onChange={handleChangeWhat} />
							<Modify value={modWho} onChange={handleChangeWho} />
							<ModifyButton onClick={() => handleModify(id, modWhat, modWho)}>수정</ModifyButton>
						</ModifyContainer>
					)
			}

		</Container>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 70%;
	box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1), 0 2px 12px rgba(0, 0, 0, 0.1);
	margin: 0 auto;
	padding: 20px;

	& + & {
		margin-top: 20px;
	}
`
const InfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	width: 50%;
`
const What = styled.div`
	font-size: 24px;
	font-weight: 600;
	display: flex;
	justify-content: space-between;
`
const Who = styled.div`
	font-size: 18px;
	color: rgb(110, 110, 110);
`
const ModifyContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	width: 50%;
`
const Modify = styled.input``
const ModifyButton = styled.button``
const OptionContainer = styled.div`
	display: flex;
	align-items: center;
`

const XButton = styled.button`
	border: none;
	color: red;
	background-color: white;
	margin-top: 2px;

	&:hover {
		box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1), 0 2px 12px rgba(0, 0, 0, 0.1);
	}
`
const Image = styled.img`
	width: 14px;
	height: 14px;
	margin-right: 8px;

	&:hover {
		box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1), 0 2px 12px rgba(0, 0, 0, 0.1);
	}
`


export default Card;