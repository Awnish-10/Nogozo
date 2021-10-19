import React from 'react';
import styled from 'styled-components';

function CourseDisplay(props) {
	return (
		<Display>
			<Wrapper>
				<Container>
					<h3>{props.title}</h3>
				</Container>
			</Wrapper>
			<p>{props.desc}</p>
		</Display>
	);
}

export default CourseDisplay;

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
	color: #113cfc;
	cursor: pointer;
`;

const Container = styled.div`
	font-size: 20px;
`;
