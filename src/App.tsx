import React from 'react';
import './App.css';
import { MuiResponsiveness } from './components/MuiResponsiveness';
import { createTheme, colors, ThemeProvider } from '@mui/material';
// import { MuiTabs } from './components/MuiTabs';
// import { MuiTimeLine } from './components/MuiTimeLine';
// import { MuiBottomNaviation } from './components/MuiBottomNaviation';
// import MuiAvatar from './components/MuiAvatar';
// import MuiBadge from './components/MuiBadge';
// import MuiList from './components/MuiList';
// import MuiSpeedDial from './components/MuiSpeedDial';
// import { MuiDrawer } from './components/MuiDrawer';
// import MuiBreadCrumbs from './components/MuiBreadCrumbs';
// import MuiLink from './components/MuiLink';
// import { MuiNavBar } from './components/MuiNavBar';
// import { MuiImageList } from './components/MuiImageList';
// import { MuiCard } from './components/MuiCard';
// import { MuiAccordion } from './components/MuiAccordion';
// import { MuiLayout } from './components/MuiLayiout';
// import { MuiTypography } from './components/MuiTypography';
// import { MuiButton } from './components/MuiButton';
// import { MuiTextField } from './components/MuiTextField';
// import { MuiSelect } from './components/MuiSelect';
// import { MuiRadioButton } from './components/MuiRadiioButton';
// import { MuiCheckbox } from './components/MuiCheckbox';
// import { MuiSwitch } from './components/MuiSwitch';
// import { MuiRating } from './components/MuiRating';
// import { MuiAutocomplete } from './components/MuiAutocomplete';
// import MuiChip from './components/MuiChip';
// import MuiTooltip from './components/MuiTooltip';
// import MuiTable from './components/MuiTable';
// import { MuiAlert } from './components/MuiAlert';
// import { MuiSnackBar } from './components/MuiSnackBar';
// import { MuiDialog } from './components/MuiDialog';
// import { MuiProgress } from './components/MuiProgress';
// import { MuiSkeleton } from './components/MuiSkeleton';
// import { MuiLoadingButton } from './components/MuiLoadingButton';

const theme = createTheme({
	status: {
		danger: '#e53e3e',
	},
	palette: {
		secondary: {
			main: colors.orange[500],
		},
		neutral: {
			main: colors.grey[500],
			darker: colors.grey[700],
		},
	},
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<div className='App'>
				{/* <MuiTypography /> */}
				{/* <MuiButton /> */}
				{/* <MuiTextField /> */}
				{/* <MuiSelect /> */}
				{/* <MuiRadioButton /> */}
				{/* <MuiCheckbox /> */}
				{/* <MuiSwitch /> */}
				{/* <MuiRating /> */}
				{/* <MuiAutocomplete /> */}
				{/* <MuiLayout /> */}
				{/* <MuiCard /> */}
				{/* <MuiAccordion /> */}
				{/* <MuiImageList /> */}
				{/* <MuiNavBar /> */}
				{/* <MuiLink /> */}
				{/* <MuiBreadCrumbs /> */}
				{/* <MuiDrawer /> */}
				{/* <MuiSpeedDial /> */}
				{/* <MuiBottomNaviation /> */}
				{/* <MuiAvatar /> */}
				{/* <MuiBadge /> */}
				{/* <MuiList /> */}
				{/* <MuiChip /> */}
				{/* <MuiTooltip /> */}
				{/* <MuiTable /> */}
				{/* <MuiAlert /> */}
				{/* <MuiSnackBar /> */}
				{/* <MuiDialog /> */}
				{/* <MuiProgress /> */}
				{/* <MuiSkeleton /> */}
				{/* <MuiLoadingButton /> */}
				{/* <MuiTabs /> */}
				{/* <MuiTimeLine /> */}
				<MuiResponsiveness />
			</div>
		</ThemeProvider>
	);
}

export default App;
