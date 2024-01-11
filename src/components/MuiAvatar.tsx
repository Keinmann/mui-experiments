import { Avatar, AvatarGroup, Stack } from "@mui/material";

const MuiAvatar = () => {
	return (
		<Stack spacing={4}>
			<Stack
				direction="row"
				spacing={1}>
				<Avatar sx={{ backgroundColor: "primary.light" }}>BW</Avatar>
				<Avatar sx={{ backgroundColor: "success.light" }}>CK</Avatar>
			</Stack>
			<Stack
				direction="row"
				spacing={1}>
				<AvatarGroup max={3}>
					<Avatar sx={{ backgroundColor: "primary.light" }}>BW</Avatar>
					<Avatar sx={{ backgroundColor: "success.light" }}>CK</Avatar>
					<Avatar
						src="https://randomuser.me/portraits/women/79.jpg"
						alt="Jane Doe"
					/>
					<Avatar
						src="https://randomuser.me/portraits/women/75.jpg"
						alt="Jane Doe"
					/>
				</AvatarGroup>
			</Stack>
			<Stack
				direction="row"
				spacing={1}>
				<Avatar
					sx={{ backgroundColor: "primary.light", width: 48, height: 48 }}>
					BW
				</Avatar>
				<Avatar
					variant="rounded"
					sx={{ backgroundColor: "success.light", width: 35, height: 35 }}>
					CK
				</Avatar>
			</Stack>
		</Stack>
	);
};

export default MuiAvatar;
