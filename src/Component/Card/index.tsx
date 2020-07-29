import React from 'react';
import { CardContainer, CardBlock } from './styled';

const Cards: React.FC<ICard> = ({ value, marker, back }) => {
	const blackMarker = ['♣', '♠'];
	const cardMarker: React.ReactElement[] = [];
	if (typeof value !== 'string') {
		for (let i = 0; i < value; i++) {
			cardMarker.push(<span key={i}>{marker}</span>);
		}
	} else {
		cardMarker.push(<span key={value}>{marker}</span>);
	}

	return (
		<CardContainer>
			<CardBlock className={`${blackMarker.includes(marker) ? 'black-cards ' : ''}${back ? 'back' : ''}`}>
				<div className='corner left '>
					<p className='value'>{value}</p>
					<p>{marker}</p>
				</div>
				<div className='corner right '>
					<p className='value'>{value}</p>
					<p>{marker}</p>
				</div>
				<p className='center-marker'>{marker}</p>
			</CardBlock>
		</CardContainer>
	);
};

export default Cards;
