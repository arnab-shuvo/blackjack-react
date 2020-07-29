import styled from 'styled-components';
import backgroundColor from '../../utils/buttonColor';

type IButton = {
	variant?: 'primary' | 'secondary' | 'legendary' | undefined;
	fontSize?: number;
};

export const StyledButton = styled.button<IButton>`
	background: ${(props) => backgroundColor(props.variant).primary};
	padding: 15px 30px;
	font-size: ${(props) => (props.fontSize ? props.fontSize : 16)}px;
	color: ${(props) => backgroundColor(props.variant).secondary};
	border: 1px solid ${(props) => backgroundColor(props.variant).tartiary};
	transition: all 0.5s ease;
	cursor: pointer;
	&:hover {
		background: transparent;
	}
	&.disabled {
		cursor: not-allowed !important;
		background: #cdcdcd;
		color: #333;
		border-color: #cdcdcd;
	}
`;
