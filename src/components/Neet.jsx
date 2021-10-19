import React from 'react';
import Book from './Book';
import styled from 'styled-components';

function Neet() {
	const neet = [
		{
			image: 'https://picsum.photos/200/250',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
			price: Math.round(Math.random() * 1000),
			discount: Math.round(Math.random() * 100),
		},
		{
			image: 'https://picsum.photos/200/250',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
			price: Math.round(Math.random() * 1000),
			discount: Math.round(Math.random() * 100),
		},
		{
			image: 'https://picsum.photos/200/250',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
			price: Math.round(Math.random() * 1000),
			discount: Math.round(Math.random() * 100),
		},
		{
			image: 'https://picsum.photos/200/250',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
			price: Math.round(Math.random() * 1000),
			discount: Math.round(Math.random() * 100),
		},
	];
	return (
		<Container>
			<h1>Recomended Neet Books</h1>
			<Wrapper>
				{neet.map((item) => {
					return (
						<Book
							image={item.image}
							desc={item.desc}
							price={item.price}
							discount={item.discount}
						/>
					);
				})}
			</Wrapper>
		</Container>
	);
}

export default Neet;

const Container = styled.div`
	h1 {
		text-align: start;
		margin: 40px 10px 10px 40px;
	}
`;

const Wrapper = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-wrap: wrap;
`;
