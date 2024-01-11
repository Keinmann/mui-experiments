import {
	Alert,
	AlertProps,
	Button,
	Snackbar,
	useScrollTrigger,
} from '@mui/material';
import { useState, forwardRef } from 'react';

export const MuiSnackBar = () => {
	const [open, setOpen] = useState(false);
	const SnackBarAlert = forwardRef<HTMLDivElement, AlertProps>(
		function SnackBarAlert(props, ref) {
			return (
				<Alert
					elevation={6}
					ref={ref}
					{...props}
				/>
			);
		}
	);
	const handleClose = (
		event?: React.SyntheticEvent | Event,
		reason?: string
	) => {
		if (reason === 'clickaway') {
			return;
		}
		setOpen(false);
	};
	return (
		<>
			<Button
				onClick={() => {
					setOpen(true);
				}}>
				Submit
			</Button>
			{/* <Snackbar
				message='Form submitted successfully'
				autoHideDuration={1000}
				open={open}
				onClose={handleClose}
			/> */}
			<Snackbar
				open={open}
				autoHideDuration={2000}
				onClose={handleClose}>
				<SnackBarAlert
					onClose={handleClose}
					severity='success'>
					Form submitted successfully
				</SnackBarAlert>
			</Snackbar>
		</>
	);
};
