import { IconButton } from '@material-ui/core';
import { Menu, ShoppingCartOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import styled from 'styled-components';

function Menubar(props) {
	return (
		<Wrapper>
			<Left>
				<Menu
					onClick={() => {
						props.slideMenu(true);
					}}
				/>
			</Left>
			<Logo>
				<img
					height='40px'
					width='100px'
					alt=''
					src='https://nogozo.com/static/mainapp/img/logo.png'
				></img>
			</Logo>
			<Right>
				<IconButton>
					<ShoppingCartOutlined />
				</IconButton>
			</Right>
		</Wrapper>
	);
}

export default Menubar;

const Wrapper = styled.div`
	width: 100vw;
	height: 60px;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 5px 50px;
`;
const Left = styled.div`
	flex: 1;
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;
const Logo = styled.div`
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const Right = styled.div`
	flex: 1;
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;
