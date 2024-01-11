import { Favorite } from '@mui/icons-material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Tab } from '@mui/material';
import React, { useState } from 'react';

export const MuiTabs = () => {
	const [value, setValue] = useState('1');
	const handleChange = (event: React.SyntheticEvent, newValue: string) => {
		setValue(newValue);
	};
	return (
		<Box>
			<TabContext value={value}>
				<Box sx={{ borderBottom: 1, borderColor: 'divider', width: '300px' }}>
					<TabList
						variant='scrollable'
						scrollButtons='auto'
						// centered
						textColor='secondary'
						indicatorColor='secondary'
						aria-label='Tabs example'
						onChange={handleChange}>
						<Tab
							iconPosition='start'
							icon={<Favorite />}
							label='Tab 1'
							value='1'
						/>
						<Tab
							disabled
							label='Tab 2'
							value='2'
						/>
						<Tab
							label='Tab 3'
							value='3'
						/>
						<Tab
							label='Tab 4'
							value='4'
						/>
						<Tab
							label='Tab 5'
							value='5'
						/>
						<Tab
							label='Tab 6'
							value='6'
						/>
					</TabList>
				</Box>
				<TabPanel value='1'>Panel 1</TabPanel>
				<TabPanel value='2'>Panel 2</TabPanel>
				<TabPanel value='3'>Panel 3</TabPanel>
				<TabPanel value='4'>Panel 4</TabPanel>
				<TabPanel value='5'>Panel 5</TabPanel>
				<TabPanel value='6'>Panel 6</TabPanel>
			</TabContext>
		</Box>
	);
};
