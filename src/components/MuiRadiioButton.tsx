import {
	Box,
	FormControl,
	FormLabel,
	FormControlLabel,
	FormHelperText,
	RadioGroup,
	Radio,
	useScrollTrigger,
} from "@mui/material";
import { useState } from "react";

export const MuiRadioButton = () => {
	const [value, setValue] = useState<string>("");
	console.log(value);
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value as string);
	};
	return (
		<Box>
			<FormControl error>
				<FormLabel id="job-experience-group-label">
					Years of experience
				</FormLabel>
				<RadioGroup
					value={value}
					onChange={handleChange}
					row
					name="job-experience-group"
					aria-labelledby="job-experience-group-label">
					<FormControlLabel
						control={
							<Radio
								size="medium"
								color="secondary"
							/>
						}
						label="0-2"
						value="0-2"
					/>
					<FormControlLabel
						control={<Radio />}
						label="3-5"
						value="3-5"
					/>
					<FormControlLabel
						control={<Radio />}
						label="6-10"
						value="6-10"
					/>
				</RadioGroup>
				<FormHelperText>Invalid selection</FormHelperText>
			</FormControl>
		</Box>
	);
};
