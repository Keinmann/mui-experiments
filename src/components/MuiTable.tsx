import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from '@mui/material';
import React from 'react';

const MuiTable = () => {
	return (
		<TableContainer
			component={Paper}
			sx={{ maxHeight: '300px' }}>
			<Table
				aria-label='simple table'
				stickyHeader>
				<TableHead>
					<TableRow>
						<TableCell>Id</TableCell>
						<TableCell>Name</TableCell>
						<TableCell>Surname</TableCell>
						<TableCell align='center'>Email</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{tableData?.map((row) => (
						<TableRow
							key={row.id}
							sx={{
								'&:last-child td, &:last-child th': { border: 0 },
							}}>
							<TableCell>{row.id}</TableCell>
							<TableCell>{row.first_name}</TableCell>
							<TableCell>{row.last_name}</TableCell>
							<TableCell align='center'>{row.email}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default MuiTable;

const tableData = [
	{
		id: 1,
		first_name: 'Shay',
		last_name: 'Hickeringill',
		email: 'shickeringill0@google.ru',
		gender: 'Female',
		ip_address: '78.128.93.118',
	},
	{
		id: 2,
		first_name: 'Onofredo',
		last_name: 'Beauly',
		email: 'obeauly1@noaa.gov',
		gender: 'Male',
		ip_address: '135.32.82.122',
	},
	{
		id: 3,
		first_name: 'Win',
		last_name: 'Shetliff',
		email: 'wshetliff2@nhs.uk',
		gender: 'Male',
		ip_address: '225.109.121.54',
	},
	{
		id: 4,
		first_name: 'Ramonda',
		last_name: 'McBlain',
		email: 'rmcblain3@wikia.com',
		gender: 'Female',
		ip_address: '154.213.1.101',
	},
	{
		id: 5,
		first_name: 'Basia',
		last_name: 'Marriage',
		email: 'bmarriage4@telegraph.co.uk',
		gender: 'Polygender',
		ip_address: '92.83.20.49',
	},
	{
		id: 6,
		first_name: 'Reyna',
		last_name: 'Kleiser',
		email: 'rkleiser5@typepad.com',
		gender: 'Female',
		ip_address: '190.203.59.69',
	},
	{
		id: 7,
		first_name: 'Morgan',
		last_name: 'Hotton',
		email: 'mhotton6@apache.org',
		gender: 'Male',
		ip_address: '124.191.125.143',
	},
	{
		id: 8,
		first_name: 'Fayina',
		last_name: 'Easterling',
		email: 'feasterling7@home.pl',
		gender: 'Genderfluid',
		ip_address: '50.203.12.195',
	},
	{
		id: 9,
		first_name: 'Lynde',
		last_name: 'Lumley',
		email: 'llumley8@pagesperso-orange.fr',
		gender: 'Female',
		ip_address: '233.173.77.45',
	},
	{
		id: 10,
		first_name: 'Tabb',
		last_name: 'Wolfart',
		email: 'twolfart9@typepad.com',
		gender: 'Male',
		ip_address: '179.217.98.81',
	},
];
