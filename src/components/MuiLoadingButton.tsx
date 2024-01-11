import { Save } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { Stack } from '@mui/material';

export const MuiLoadingButton = () => {
	return (
		<Stack
			spacing={2}
			direction={'row'}>
			<LoadingButton variant='outlined'>Submit</LoadingButton>
			<LoadingButton
				loading
				variant='outlined'>
				Submit
			</LoadingButton>
			<LoadingButton
				loading
				variant='outlined'
				loadingIndicator='Loading...'>
				Fetch Data
			</LoadingButton>
			<LoadingButton
				variant='outlined'
				startIcon={<Save fontSize='inherit' />}
				loadingPosition='start'>
				Save
			</LoadingButton>
			<LoadingButton
				loading
				variant='outlined'
				startIcon={<Save fontSize='inherit' />}
				loadingPosition='start'>
				Save
			</LoadingButton>
		</Stack>
	);
};
