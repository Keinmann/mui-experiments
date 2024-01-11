import { Delete } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';
import React from 'react';

const MuiTooltip = () => {
	return (
		<Tooltip
			title='delete'
			placement='right'
			arrow
			enterDelay={300}
			leaveDelay={50}>
			<IconButton>
				<Delete />
			</IconButton>
		</Tooltip>
	);
};

export default MuiTooltip;
