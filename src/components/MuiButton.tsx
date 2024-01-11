import {
	Stack,
	Button,
	IconButton,
	ButtonGroup,
	ToggleButtonGroup,
	ToggleButton,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import { useState } from 'react';

export const MuiButton = () => {
	const [formats, setFormats] = useState<string[] | null>(null);
	console.log({ formats });
	const handleFormatChange = (
		_event: React.MouseEvent<HTMLElement>,
		updatedFormats: string[] | null
	) => {
		setFormats(updatedFormats);
	};
	return (
		<Stack spacing={4}>
			<Stack
				spacing={2}
				direction='row'>
				<Button
					variant='text'
					href='https://google.com'>
					Text
				</Button>
				<Button variant='outlined'>outlined</Button>
				<Button variant='contained'>contained</Button>
			</Stack>
			<Stack
				spacing={2}
				direction='row'>
				<Button
					variant='text'
					color='primary'>
					primary
				</Button>
				<Button
					variant='outlined'
					color='secondary'>
					secondary
				</Button>
				<Button
					variant='contained'
					color='error'>
					error
				</Button>
				<Button
					variant='contained'
					color='warning'>
					warning
				</Button>
				<Button
					variant='contained'
					color='success'>
					success
				</Button>
				<Button
					variant='contained'
					color='info'>
					info
				</Button>
			</Stack>
			<Stack
				spacing={2}
				display='block'
				direction='row'>
				<Button
					variant='contained'
					size='small'>
					small
				</Button>
				<Button
					variant='contained'
					size='medium'>
					medium
				</Button>
				<Button
					variant='contained'
					size='large'>
					large
				</Button>
			</Stack>
			<Stack
				spacing={2}
				direction='row'>
				<Button
					variant='contained'
					startIcon={<SendIcon />}
					disableRipple
					onClick={() => {
						alert('clicked');
					}}>
					Send
				</Button>{' '}
				<Button
					variant='contained'
					endIcon={<SendIcon />}
					disableElevation>
					Send
				</Button>
				<IconButton
					aria-label='send'
					color='success'
					size='small'>
					<SendIcon />
				</IconButton>
			</Stack>
			<Stack direction='row'>
				<ButtonGroup
					variant='outlined'
					orientation='vertical'
					size='small'
					color='secondary'
					aria-label='alignment button group'>
					<Button>Left</Button>
					<Button>Center</Button>
					<Button>Right</Button>
				</ButtonGroup>
			</Stack>
			<Stack direction='row'>
				<ToggleButtonGroup
					aria-label='text-formatting'
					value={formats}
					onChange={handleFormatChange}
					size='small'
					color='success'>
					<ToggleButton
						value='bold'
						aria-label='bold'>
						<FormatBoldIcon />
					</ToggleButton>
					<ToggleButton
						value='italic'
						aria-label='italic'>
						<FormatItalicIcon />
					</ToggleButton>
					<ToggleButton
						value='underlined'
						aria-label='underlined'>
						<FormatUnderlinedIcon />
					</ToggleButton>
				</ToggleButtonGroup>
			</Stack>
		</Stack>
	);
};
