import { Mail } from '@mui/icons-material';
import {
	Avatar,
	Box,
	Divider,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from '@mui/material';
import React from 'react';

const MuiList = () => {
	return (
		<Box sx={{ width: '400px', bgcolor: '#efefef' }}>
			<List disablePadding>
				<ListItem disablePadding>
					<ListItemButton>
						<ListItemIcon>
							<Avatar>
								<Mail />
							</Avatar>
						</ListItemIcon>
						<ListItemText
							primary='List item 1'
							secondary='Secondary text'
						/>
					</ListItemButton>
				</ListItem>
				<Divider />
				<ListItem disablePadding>
					<ListItemButton>
						<ListItemIcon>
							<Avatar>
								<Mail />
							</Avatar>
						</ListItemIcon>
						<ListItemText
							primary='List item 2'
							secondary='Secondary text'
						/>
					</ListItemButton>
				</ListItem>
				<Divider />
				<ListItem disablePadding>
					<ListItemButton>
						<ListItemIcon>
							<Avatar>
								<Mail />
							</Avatar>
						</ListItemIcon>
						<ListItemText
							primary='List item 2'
							secondary='Secondary text'
						/>
					</ListItemButton>
				</ListItem>
			</List>
		</Box>
	);
};

export default MuiList;
