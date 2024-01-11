import { Rating } from "@mui/material";
import { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
export const MuiRating = () => {
	const [value, setValue] = useState<number | null>(3);
	console.log(value);
	const handleChange = (
		event: React.ChangeEvent<{}>,
		newValue: number | null
	) => {
		setValue(newValue);
	};
	return (
		<>
			<Rating
				precision={0.1}
				size="medium"
				value={value}
				onChange={handleChange}
				icon={
					<FavoriteIcon
						fontSize="inherit"
						color="error"
					/>
				}
				emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
				readOnly
				highlightSelectedOnly
			/>
		</>
	);
};
