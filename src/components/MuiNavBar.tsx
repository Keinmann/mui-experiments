import React, { useState } from "react";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import { KeyboardArrowDown } from "@mui/icons-material";
import {
	AppBar,
	Button,
	IconButton,
	Menu,
	MenuItem,
	Stack,
	Toolbar,
	Typography,
} from "@mui/material";

export const MuiNavBar = () => {
	const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorElement);
	const hangleResourcesClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElement(event.currentTarget);
	};

	//hides menu
	const handleMenuClose = () => {
		setAnchorElement(null);
	};

	return (
		<AppBar position="static">
			<Toolbar>
				<IconButton
					size="large"
					edge="start"
					color="inherit"
					aria-label="logo">
					<CatchingPokemonIcon />
				</IconButton>
				<Typography
					variant="h6"
					component="div"
					sx={{ flexGrow: 1 }}>
					POKEMONAPP
				</Typography>

				<Stack
					direction="row"
					spacing={2}>
					<Button color="inherit">Features</Button>
					<Button color="inherit">Pricing</Button>
					<Button color="inherit">About</Button>
					<Button
						endIcon={<KeyboardArrowDown />}
						aria-controls={open ? "resources-menu" : undefined}
						onClick={hangleResourcesClick}
						color="inherit"
						id="resources-button"
						aria-haspopup="true"
						aria-expanded="true">
						Resources
					</Button>
					<Button color="inherit">Login</Button>
				</Stack>
				<Menu
					anchorOrigin={{
						vertical: "bottom",
						horizontal: "center",
					}}
					transformOrigin={{
						vertical: "top",
						horizontal: "center",
					}}
					open={open}
					anchorEl={anchorElement}
					id="resources-menu"
					MenuListProps={{ "aria-labelledby": "resources-button" }}
					onClose={handleMenuClose}>
					<MenuItem onClick={handleMenuClose}>Blog</MenuItem>
					<MenuItem onClick={handleMenuClose}>Podcast</MenuItem>
				</Menu>
			</Toolbar>
		</AppBar>
	);
};
