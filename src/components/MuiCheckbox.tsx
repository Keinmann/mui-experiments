import {
	Box,
	FormControlLabel,
	Checkbox,
	FormControl,
	FormLabel,
	FormGroup,
	FormHelperText,
} from "@mui/material";
import { useState } from "react";
import {
	Bookmark as BookmarkIcon,
	BookmarkBorder as BookmarkBorderIcon,
} from "@mui/icons-material";
import { eventNames } from "process";

export const MuiCheckbox = () => {
	const [acceptTnC, setAcceptTnC] = useState<boolean>(false);
	const [bookmark, setBookmark] = useState<boolean>(false);
	const [skills, setSkills] = useState<string[]>([]);
	console.log(skills);
	console.log(acceptTnC);
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setAcceptTnC(event.target.checked as boolean);
	};
	const handleChangeBookmark = (event: React.ChangeEvent<HTMLInputElement>) => {
		setBookmark(event.target.checked as boolean);
	};
	const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const index = skills.indexOf(event.target.value);
		if (index === -1) {
			setSkills([...skills, event.target.value]);
		} else {
			setSkills(skills.filter((skill) => skill !== event.target.value));
		}
	};
	return (
		<Box>
			<Box>
				<FormControlLabel
					label="I accept terms and conditions"
					control={
						<Checkbox
							checked={acceptTnC}
							onChange={handleChange}
							size="small"
							color="secondary"
						/>
					}
				/>
			</Box>
			<Box>
				<Checkbox
					icon={<BookmarkBorderIcon />}
					checkedIcon={<BookmarkIcon />}
					checked={bookmark}
					onChange={handleChangeBookmark}
				/>
			</Box>
			<Box>
				<FormControl error>
					<FormLabel>
						Skills
						<FormGroup row>
							<FormControlLabel
								label="HTML"
								value="html"
								control={
									<Checkbox
										checked={skills.includes("html")}
										onChange={handleSkillChange}
									/>
								}
							/>
							<FormControlLabel
								label="CSS"
								value="css"
								control={
									<Checkbox
										checked={skills.includes("css")}
										onChange={handleSkillChange}
									/>
								}
							/>
							<FormControlLabel
								label="JavaScript"
								value="javascript"
								control={
									<Checkbox
										checked={skills.includes("javascript")}
										onChange={handleSkillChange}
									/>
								}
							/>
						</FormGroup>
						<FormHelperText>Choose skills</FormHelperText>
					</FormLabel>
				</FormControl>
			</Box>
		</Box>
	);
};
