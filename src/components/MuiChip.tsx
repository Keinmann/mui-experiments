import { Face } from '@mui/icons-material';
import { Avatar, Chip, Stack } from '@mui/material';
import { useState } from 'react';

const MuiChip = () => {
	const [chips, setChips] = useState<string[]>(['Chip 1', 'Chip 2', 'Chip 3']);
	const handleDelete = (chipToDelete: string) => {
		setChips((chips) => chips.filter((chip) => chip !== chipToDelete));
	};
	return (
		<Stack
			direction={'row'}
			spacing={1}>
			<Chip
				icon={<Face></Face>}
				label='chip'
				color='primary'
				size='small'
			/>
			<Chip
				label='chip'
				color='primary'
				size='small'
				variant='outlined'
				avatar={<Avatar></Avatar>}
			/>
			<Chip
				label='click'
				color='success'
				onClick={() => {
					alert('clicked');
				}}
			/>
			<Chip
				label='Delete'
				color='error'
				onClick={() => {
					alert('clicked');
				}}
				onDelete={() => {
					alert('deleted');
				}}
			/>
			{chips?.map((chip) => (
				<Chip
					label={chip}
					key={chip}
					onDelete={() => {
						handleDelete(chip);
					}}
				/>
			))}
		</Stack>
	);
};

export default MuiChip;
