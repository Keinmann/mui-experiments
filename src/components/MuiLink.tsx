import { Stack, Link, Typography } from "@mui/material";
import React from "react";

const MuiLink = () => {
	return (
		<Stack
			spacing={2}
			direction="row"
			m={4}>
			<Link href="#">Link</Link>
			<Link
				href="#"
				color={"secondary"}>
				Secondary
			</Link>
			<Link
				href="#"
				underline="none">
				Not Underlined
			</Link>
			<Link
				href="#"
				underline="hover">
				Hover Underlined
			</Link>
			<Typography variant="h6">
				<Link
					href="#"
					underline="none">
					Typography
				</Link>
			</Typography>
		</Stack>
	);
};

export default MuiLink;
