import React from 'react';
import Button from '../../../../Component/Buttons';
import { useDispatch } from 'react-redux';
import { reset } from '../../../../Store/Actions/UtilityActions';

const Reset: React.FC = () => {
	const dispatch = useDispatch();
	const resetGame = () => {
		dispatch(reset(true));
	};
	return (
		<div className={'text-center'}>
			<Button variant={'primary'} fontSize={25} onClick={resetGame}>
				Reset
			</Button>
		</div>
	);
};

export default Reset;
