import { IconButton } from '@material-ui/core';
import { CloseOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';

function MenuStatus(props) {
	return (
		<Wrapper>
			<Top>
				<IconButton>
					<CloseOutlined
						onClick={() => {
							props.slideMenu(false);
						}}
					/>
				</IconButton>
			</Top>
			<hr />
			<h2>Profile</h2>
			<h2>Address</h2>
			<h2>Orders</h2>
			<hr />
			<h2>Coupons</h2>
			<h2>Favourites</h2>
			<hr />
			<h2>Share Apple</h2>
			<h2>Help</h2>
			<h2>Report an issue</h2>
			<h2>Rate App</h2>
		</Wrapper>
	);
}

export default MenuStatus;

const Wrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	height: 100vw;
	background-color: white;
	width: 40vw;
	z-index: 5;
	h2 {
		font-size: 20px;
		font-weight: 300;
		margin: 5px 20px;
		border-bottom: 2px solid grey;
		cursor: pointer;
	}
`;

const Top = styled.div`
	height: 300px;
	width: 100%;
	background-image: url('https://scontent.fdel16-1.fna.fbcdn.net/v/t1.6435-9/204173456_319714476454878_6648634919810204312_n.png?_nc_cat=101&ccb=1-5&_nc_sid=6e5ad9&_nc_ohc=xcRTES_BW90AX_r9qL7&_nc_ht=scontent.fdel16-1.fna&oh=f51200e787d22c55364a1975b59fec95&oe=6193C60C');
	background-size: cover;
	background-position: center;
	text-align: end;
`;
