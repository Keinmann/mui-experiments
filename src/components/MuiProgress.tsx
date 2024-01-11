import { CircularProgress, LinearProgress, Stack } from '@mui/material';

export const MuiProgress = () => {
	return (
		<Stack spacing={2}>
			<CircularProgress color='primary' />
			<CircularProgress color='secondary' />
			<CircularProgress
				variant='determinate'
				value={20}
			/>
			<LinearProgress color='primary' />
			<LinearProgress color='secondary' />
			<LinearProgress
				variant='determinate'
				value={20}
			/>
		</Stack>
	);
};
