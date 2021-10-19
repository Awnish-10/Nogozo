import React from 'react';
import Book from './Book';
import styled from 'styled-components';

function FeaturedNovel() {
	const featuredNovel = [
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
			<h1>Featured Novels</h1>
			<Wrapper>
				{featuredNovel.map((item) => {
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

export default FeaturedNovel;

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
