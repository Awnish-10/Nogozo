import React from 'react';
import styled from 'styled-components';

function ClassDisplay(props) {
	return (
		<Display>
			<Wrapper>
				<Container>
					<h2>{props.title}</h2>
				</Container>
			</Wrapper>
			<p>{props.desc}</p>
		</Display>
	);
}

export default ClassDisplay;

const Display = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Wrapper = styled.div`
	height: 100px;
	width: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #69dadb;
	border-radius: 20px;
	cursor: pointer;
`;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 50px;
	width: 50px;
	border-radius: 50%;
	font-size: 20px;
	border: 2px dashed #113cfc;
`;
