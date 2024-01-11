import { Check } from '@mui/icons-material';
import { Alert, AlertTitle, Button, Stack } from '@mui/material';
import React from 'react';

export const MuiAlert = () => {
	return (
		<Stack spacing={2}>
			<Alert
				variant='outlined'
				severity='error'>
				error Alert
			</Alert>
			<Alert
				variant='outlined'
				severity='warning'>
				warning Alert
			</Alert>
			<Alert
				variant='outlined'
				severity='info'>
				info Alert
			</Alert>
			<Alert
				variant='outlined'
				severity='success'>
				success Alert
			</Alert>
			<Alert
				onClose={() => {
					alert('Close alert');
				}}
				variant='filled'
				severity='error'>
				<AlertTitle>ERROR</AlertTitle>
				error Alert
			</Alert>
			<Alert
				variant='filled'
				severity='warning'>
				warning Alert
			</Alert>
			<Alert
				variant='filled'
				severity='info'>
				info Alert
			</Alert>
			<Alert
				action={
					<Button
						color='inherit'
						size='small'>
						UNDO
					</Button>
				}
				variant='filled'
				severity='success'
				icon={<Check fontSize='inherit' />}>
				success Alert
			</Alert>
		</Stack>
	);
};
