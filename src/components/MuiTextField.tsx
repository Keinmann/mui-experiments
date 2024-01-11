import { Stack, TextField, InputAdornment, IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useState } from "react";
import { SettingsApplications } from "@mui/icons-material";

export const MuiTextField = () => {
	const [passwordVisibility, setPasswordVisibility] = useState<boolean>(false);
	const [passwordValue, setPasswordValue] = useState<string | null>(null);
	return (
		<Stack spacing={4}>
			<Stack
				direction="row"
				spacing={2}>
				<TextField
					label="Name"
					variant="outlined"></TextField>
				<TextField
					label="Name"
					variant="filled"></TextField>
				<TextField
					label="Name"
					variant="standard"></TextField>
			</Stack>
			<Stack
				direction="row"
				spacing={2}>
				<TextField
					label="small secondary"
					size="small"
					color="secondary"></TextField>
			</Stack>
			<Stack
				direction="row"
				spacing={2}>
				<TextField
					required
					label="Password"
					size="small"
					color="secondary"></TextField>
				<TextField
					required
					// error={!passwordValue}
					label="Form Input"
					type="password"
					// value={passwordValue}
					// onChange={(e) => setPasswordValue(e.target.value)}
					// helperText={!passwordValue ? "Required" : "Your password"}
				/>
				<TextField
					label="Read Only"
					InputProps={{ readOnly: true }}></TextField>
			</Stack>
			<Stack
				direction="row"
				spacing={2}>
				<TextField
					label="Amount"
					InputProps={{
						startAdornment: <InputAdornment position="start">$</InputAdornment>,
					}}></TextField>
				<TextField
					label="Weight"
					InputProps={{
						endAdornment: <InputAdornment position="end">kg</InputAdornment>,
					}}></TextField>
				<TextField
					type={passwordVisibility === false ? "password" : "text"}
					error={!passwordValue}
					label="Password"
					value={passwordValue}
					onChange={(e) => setPasswordValue(e.target.value)}
					helperText={!passwordValue ? "Required" : "Your password"}
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<IconButton
									value="visibility"
									aria-label="visibility"
									size="small"
									sx={{ border: "none" }}
									onMouseDown={() => {
										setPasswordVisibility(true);
									}}
									onMouseUp={() => {
										setPasswordVisibility(false);
									}}>
									<VisibilityIcon />
								</IconButton>
							</InputAdornment>
						),
					}}></TextField>
			</Stack>
		</Stack>
	);
};
