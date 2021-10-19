import React, { useState } from 'react';
import SliderItem from './SliderItem';
import styled from 'styled-components';
import { ArrowBackIosSharp, ArrowForwardIosSharp } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';

function Slider() {
	const [slide, setSlide] = useState(0);

	const sliderData = [
		'https://images.pexels.com/photos/34592/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
		'https://images.pexels.com/photos/459791/pexels-photo-459791.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
		'https://images.pexels.com/photos/1809340/pexels-photo-1809340.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
		'https://images.pexels.com/photos/2228557/pexels-photo-2228557.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
	];

	setTimeout(function () {
		setSlide(slide == 3 ? 0 : slide + 1);
	}, 5000);

	function handleClick(direction) {
		direction === 'left'
			? setSlide(slide == 0 ? 3 : slide - 1) //--slide doesn't work
			: setSlide(slide == 3 ? 0 : slide + 1);
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
			<SlideIndicator>
				<Indicator>
					<IndicatorItem
						onClick={() => {
							indicatorHandler(0);
						}}
						no={0}
						slide={slide}
					></IndicatorItem>
					<IndicatorItem
						onClick={() => {
							indicatorHandler(1);
						}}
						no={1}
						slide={slide}
					></IndicatorItem>
					<IndicatorItem
						onClick={() => {
							indicatorHandler(2);
						}}
						no={2}
						slide={slide}
					></IndicatorItem>
					<IndicatorItem
						onClick={() => {
							indicatorHandler(3);
						}}
						no={3}
						slide={slide}
					></IndicatorItem>
				</Indicator>
			</SlideIndicator>
		</Wrapper>
	);
}

export default Slider;

const Wrapper = styled.div`
	width: 100vw;
	height: 70vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: relative;
`;

const SlideIndicator = styled.div`
	position: absolute;
	bottom: 20px;
`;

const Indicator = styled.div`
	width: 100px;
	height: 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	transition: all 1s ease;
`;

const IndicatorItem = styled.div`
	width: 10px;
	height: 10px;
	border-radius: 5px;
	border: 1px solid grey;
	cursor: pointer;
	background-color: ${(props) =>
		props.slide === props.no ? 'grey' : 'white'};
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
	align-items: center;
`;
