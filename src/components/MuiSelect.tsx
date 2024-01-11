import { Box, TextField, Stack, MenuItem } from "@mui/material";
import { useState } from "react";

export const MuiSelect = () => {
	const [country, setCountry] = useState<string>("");
	const [countries, setCountries] = useState<string[]>([]);
	console.log({ country });
	const handleSingleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setCountry(event.target.value as string);
	};
	const handleMultipleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setCountries(
			typeof event.target.value === "string"
				? event.target.value.split(",")
				: event.target.value
		);
	};

	return (
		<Box width={250}>
			<Stack
				spacing={2}
				direction="column">
				<TextField
					value={country}
					onChange={handleSingleChange}
					label="select country"
					select
					fullWidth>
					<MenuItem value="IN">India</MenuItem>
					<MenuItem value="RU">Russia</MenuItem>
					<MenuItem value="CH">China</MenuItem>
				</TextField>
				<TextField
					value={countries}
					size="small"
					color="secondary"
					helperText="please select countries"
					onChange={handleMultipleChange}
					label="select country"
					error={!countries ? true : false}
					select
					fullWidth
					SelectProps={{
						multiple: true,
					}}>
					<MenuItem value="IN">India</MenuItem>
					<MenuItem value="RU">Russia</MenuItem>
					<MenuItem value="CH">China</MenuItem>
				</TextField>
			</Stack>
		</Box>
	);
};
