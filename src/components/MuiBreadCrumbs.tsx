import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import { NavigateNext } from "@mui/icons-material";
import React from "react";

const MuiBreadCrumbs = () => {
	return (
		<Box m={2}>
			<Breadcrumbs
				maxItems={2}
				itemsBeforeCollapse={2}
				aria-label="breadcrumb"
				separator={<NavigateNext />}>
				<Link
					underline="hover"
					href="#">
					Home
				</Link>{" "}
				<Link
					underline="hover"
					href="#">
					Catalog
				</Link>{" "}
				<Link
					underline="hover"
					href="#">
					Accesories
				</Link>
				<Typography color="text.primary">Shoes</Typography>
			</Breadcrumbs>
		</Box>
	);
};

export default MuiBreadCrumbs;
