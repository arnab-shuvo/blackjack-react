import React from 'react';
import { StyledButton } from './styled';

const Button: React.FC<IButtonProps> = ({ variant, fontSize, children, onClick }) => {
	return (
		<StyledButton variant={variant} fontSize={fontSize} onClick={onClick}>
			{children}
		</StyledButton>
	);
};

export default Button;
