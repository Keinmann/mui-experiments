import {
	Box,
	Card,
	CardContent,
	Typography,
	CardActions,
	Button,
	CardMedia,
} from "@mui/material";

export const MuiCard = () => {
	return (
		<Box width={300}>
			<Card>
				<CardMedia
					component="img"
					height="140px"
					alt="unsplash image"
					image="https://source.unsplash.com/random"
				/>
				<CardContent>
					<Typography
						textAlign="left"
						gutterBottom
						variant="h5"
						component="div">
						React
					</Typography>
					<Typography
						textAlign="left"
						variant="body2"
						color="text.secondary">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
						numquam, odio eveniet placeat alias iste in asperiores recusandae
						ipsam fugiat officiis, officia animi minima facere temporibus sunt
						distinctio? Accusamus, cumque!
					</Typography>
				</CardContent>
				<CardActions>
					<Button size="small">Share</Button>
					<Button size="small">Learn more</Button>
				</CardActions>
			</Card>
		</Box>
	);
};
