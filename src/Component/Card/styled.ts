import styled from 'styled-components';

export const CardContainer = styled.div`
	height: 300px;
	width: 200px;

	display: flex;
	align-content: center;
	jsutify-content: center;
	margin: 10px auto;

	span {
		font-size: 30px !important;
		width: 25% !important;
		text-align: center !important;
		display: inline-block !important;
	}
`;

export const CardBlock = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	background: #fff;
	box-shadow: -7px 3px 12px 0px #3e3e3e;
	border-radius: 14px;
	padding: 40px;
	color: #ec1d22;
	&.black-cards {
		color: #000;
	}
	&.back {
		background-color: #fc7279;
		background-image: -webkit-linear-gradient(to top right, #062fff 10%, #2ffffa 65%, #ff19c3 125%);
		background-image: linear-gradient(to top right, #062fff 10%, #2ffffa 65%, #ff19c3 125%);
		&:after {
			content: '';
			position: absolute;
			width: 80%;
			height: 80%;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			margin: auto;
			border: 1px solid #fff;
		}
		&:before {
			content: '';
			position: absolute;
			width: 60%;
			height: 60%;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			margin: auto;
			border: 1px solid #fff;
		}
	}
	.corner {
		position: absolute;
		font-size: 30px;
		.value {
			font-size: 40px;
		}
		&.left {
			top: 10px;
			left: 10px;
		}
		&.right {
			bottom: 10px;
			right: 10px;
			transform: rotate(180deg);
		}
	}
	.center-marker {
		position: absolute;
		font-size: 150px;
		left: 0;
		right: 0;
		top: -110px;
		bottom: 0;
		margin: auto;
		height: 100px;
		width: 100px;
		text-align: center;
	}
`;
