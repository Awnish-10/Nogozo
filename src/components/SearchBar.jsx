import { IconButton } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';

function Menubar() {
	return (
		<Wrapper>
			<Container>
				<Logo>
					<IconButton>
						<Search />
					</IconButton>
				</Logo>
				<TextBox type='text' placeholder='Search Product'></TextBox>
			</Container>
		</Wrapper>
	);
}

export default Menubar;

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 5px 50px;
`;

const Container = styled.div`
	width: 100%;
	height: 70px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 20px;
	border: 2px solid black;
	padding: 5px 20px;
`;

const Logo = styled.div`
	width: 60px;
`;

const TextBox = styled.input`
	width: 100%;
	border: none;
	margin: 0 10px;
	font-size: 20px;
	outline: none;
`;
