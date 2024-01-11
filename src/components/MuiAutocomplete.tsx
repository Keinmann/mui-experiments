import { Stack, Autocomplete, TextField } from "@mui/material";
import { useState } from "react";

export const MuiAutocomplete = () => {
	const skills: string[] = ["HTML", "CSS", "Javascript", "Typescript", "React"];
	const [value, setValue] = useState<string | null>(null);
	const skillsOptions = skills.map((skill, index) => ({
		id: index + 1,
		label: skill,
	}));

	type Skill = {
		id: number;
		label: string;
	};
	const [skill, setSkill] = useState<Skill | null>(null);
	console.log(skill);
	return (
		<Stack
			spacing={2}
			width={250}>
			<Autocomplete
				value={value}
				options={skills}
				onChange={(event: any, newValue: string | null) => {
					setValue(newValue);
				}}
				freeSolo
				renderInput={(params) => (
					<TextField
						{...params}
						label="Skills"
					/>
				)}
			/>
			<Autocomplete
				value={skill}
				options={skillsOptions}
				onChange={(event: any, newValue: Skill | null) => {
					setSkill(newValue);
				}}
				renderInput={(params) => (
					<TextField
						{...params}
						label="Skills"
					/>
				)}
			/>
		</Stack>
	);
};
