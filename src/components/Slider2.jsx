import React, { useState } from 'react';
import SliderItem from './SliderItem';
import styled from 'styled-components';
import { ArrowBackIosSharp, ArrowForwardIosSharp } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';

function Slider() {
	const [slide, setSlide] = useState(0);

	const sliderData = [
		'https://images.pexels.com/photos/34592/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940https://images.unsplash.com/photo-1633477189729-9290b3261d0a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=722&q=80',
		'https://images.pexels.com/photos/459791/pexels-photo-459791.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&whttps://images.unsplash.com/photo-1623826580913-6a24e4fe7600?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80=940',
		'httphttps://images.unsplash.com/photo-1561616612-e2398d7ec6a8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80s://images.pexels.com/photos/1809340/pexels-photo-1809340.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
		'https://images.pexehttps://images.unsplash.com/photo-1614188045506-2f275a78c18e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80ls.com/photos/2228557/pexels-photo-2228557.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
		'https://images.unsplash.com/photo-1633580969859-ee2aa7fd2648?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80',
	];

	function handleClick(direction) {
		direction === 'left'
			? setSlide(slide == 0 ? 4 : slide - 1) //--slide doesn't work
			: setSlide(slide == 4 ? 0 : slide + 1);
	}

	const indicatorHandler = (props) => {
		setSlide(props);
	};
	return (
		<Wrapper>
			<Container slide={slide}>
				<Items>
					{sliderData.map((item) => {
						return <SliderItem image={item} />;
					})}
				</Items>
			</Container>
			<LeftArrow
				slide={slide}
				onClick={() => {
					handleClick('left');
				}}
			>
				<IconButton>
					<ArrowBackIosSharp />
				</IconButton>
			</LeftArrow>
			<RightArrow
				slide={slide}
				onClick={() => {
					handleClick('right');
				}}
			>
				<IconButton>
					<ArrowForwardIosSharp />
				</IconButton>
			</RightArrow>
		</Wrapper>
	);
}

export default Slider;

const Wrapper = styled.div`
	width: 100vw;
	height: 60vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: relative;
`;

const LeftArrow = styled.div`
	cursor: pointer;
	color: white;
	position: absolute;
	border-radius: 50%;
	left: 10px;
	padding: 10px 20px;
`;
const RightArrow = styled.div`
	color: white;
	border-radius: 50%;
	position: absolute;
	padding: 10px 20px;
	right: 10px;
	cursor: pointer;
`;

const Container = styled.div`
	height: 70%;
	left: ${(props) => `-${props.slide * 100}vw`};
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 1s ease;
`;

const Items = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-end;
`;
