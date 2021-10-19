import React from 'react';
import styled from 'styled-components';

function SliderItem(props) {
	return (
		<Wrapper>
			<img width='1000px' height='600px' src={props.image} alt=''></img>
		</Wrapper>
	);
}

export default SliderItem;

const Wrapper = styled.div`
	width: 100vw;
	height: 600px;
	overflow-y: hidden;
`;
