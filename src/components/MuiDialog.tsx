import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Snackbar,
} from '@mui/material';
import { SyntheticEvent, useState } from 'react';

export const MuiDialog = () => {
	const [open, setOpen] = useState<boolean>(false);
	const [openSnackBar, setOpenSnackBar] = useState<boolean>(false);
	return (
		<>
			<Button
				onClick={() => {
					setOpen(true);
				}}>
				Open dialog
			</Button>
			<Dialog
				open={open}
				onClose={() => {
					setOpen(false);
				}}
				aria-labelledby='dialog-title'
				aria-describedby='dialog-descriprion'>
				<DialogTitle id='dialog-title'>Submit the test?</DialogTitle>
				<DialogContent>
					<DialogContentText id='dialog-description'>
						Are you sure you want to submit the test?
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button
						onClick={() => {
							setOpen(false);
						}}>
						Cancel
					</Button>
					<Button
						autoFocus
						onClick={() => {
							setOpenSnackBar(true);
							setOpen(false);
						}}>
						Submit
					</Button>
				</DialogActions>
			</Dialog>
			<Snackbar
				open={openSnackBar}
				message={'Form submitted'}
				autoHideDuration={2000}
				onClose={(event?: SyntheticEvent | Event, reason?: string) => {
					if (reason === 'clickaway') {
						return;
					}
					setOpenSnackBar(false);
				}}
			/>
		</>
	);
};
