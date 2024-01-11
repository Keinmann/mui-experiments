import { Favorite, Home, Person } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useState } from "react";

export const MuiBottomNaviation = () => {
	const [value, setValue] = useState<number | null>(0);
	return (
		<BottomNavigation
			sx={{ width: "100%", position: "absolute", bottom: 0 }}
			value={value}
			onChange={(event, newValue) => {
				setValue(newValue);
			}}
			showLabels>
			<BottomNavigationAction
				label="Home"
				icon={<Home />}
			/>
			<BottomNavigationAction
				label="Favorites"
				icon={<Favorite />}
			/>{" "}
			<BottomNavigationAction
				label="Profile"
				icon={<Person />}
			/>
		</BottomNavigation>
	);
};
