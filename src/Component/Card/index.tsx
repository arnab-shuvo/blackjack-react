import React from 'react';
import { CardContainer } from './styled';

const Cards: React.FC<ICard> = ({ value, marker }) => {
	return (
		<CardContainer>
			<div>
				<p>
					{value} {marker}
				</p>
			</div>
		</CardContainer>
	);
};

export default Cards;
