import { Mail } from '@mui/icons-material';
import { Badge, Stack } from '@mui/material';
import React from 'react';

const MuiBadge = () => {
	return (
		<Stack
			spacing={2}
			direction='row'>
			<Badge
				badgeContent={5}
				color='primary'>
				<Mail />
			</Badge>
			<Badge
				badgeContent={100}
				color='secondary'
				showZero>
				<Mail />
			</Badge>
			<Badge
				badgeContent={100}
				max={100}
				color='secondary'
				showZero>
				<Mail />
			</Badge>

			<Badge
				invisible={false}
				variant='dot'
				badgeContent={5}
				color='primary'>
				<Mail />
			</Badge>
		</Stack>
	);
};

export default MuiBadge;
