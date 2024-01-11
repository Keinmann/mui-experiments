import { Speed } from "@mui/icons-material";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import CopyIcon from "@mui/icons-material/FileCopyOutlined";
import ShareIcon from "@mui/icons-material/Share";
import PrintIcon from "@mui/icons-material/Print";
import EditIcon from "@mui/icons-material/Edit";

const MuiSpeedDial = () => {
	return (
		<SpeedDial
			ariaLabel="navigation speed dial"
			sx={{ position: "absolute", bottom: 16, right: 16 }}
			icon={<SpeedDialIcon openIcon={<EditIcon />} />}>
			<SpeedDialAction
				onClick={() => {
					alert("Copy");
				}}
				icon={<CopyIcon />}
				tooltipTitle="Copy"
			/>
			<SpeedDialAction
				onClick={() => {
					alert("Print");
				}}
				icon={<PrintIcon />}
				tooltipTitle="Print"
			/>
			<SpeedDialAction
				onClick={() => {
					alert("Share");
				}}
				tooltipOpen //Always showw tooltip
				icon={<ShareIcon />}
				tooltipTitle="Share"
			/>
		</SpeedDial>
	);
};

export default MuiSpeedDial;
