import React from 'react';
import styled from 'styled-components';

function Book(props) {
	return (
		<Wrapper>
			<ImgContainer>
				<img src={props.image} alt=''></img>
			</ImgContainer>
			<p>{props.desc}</p>
			<h2>
				{(props.price * (100 - props.discount)) / 100}{' '}
				<span>{props.price}</span>
			</h2>
			<h3>{props.discount}% off</h3>
		</Wrapper>
	);
}

export default Book;

const Wrapper = styled.div`
	width: 300px;
	margin: 30px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	* {
		text-align: start;
	}
	h2 {
		color: blue;
		span {
			text-decoration: line-through;
			color: grey;
		}
		h3 {
			color: green;
		}
	}
`;

const ImgContainer = styled.div`
	width: 300px;
	height: 400px;
	background-color: #c8c2bc;
	border-radius: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	@media (max-width: 786px) {
		width: 250px;
	}
	@media (max-width: 680px) {
		width: 200px;
	}
`;
