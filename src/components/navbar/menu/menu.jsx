"use client";

import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./menu.scss";
import { Mode } from "./dark mode/dark.mode";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";

export default function MainMenu() {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div className="menu">
			<div
				id="basic-button"
				aria-controls={open ? "basic-menu" : undefined}
				aria-haspopup="true"
				aria-expanded={open ? "true" : undefined}
				onClick={handleClick}
			>
				<MoreVertIcon className="more-icon" />
			</div>
			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				className="custom-menu-list"
				MenuListProps={{
					"aria-labelledby": "basic-button",
				}}
			>
				<MenuItem onClick={handleClose}>
					<div className="menu-list">
						<HelpOutlineRoundedIcon className="menu-icon" />
						<p>Help</p>
					</div>
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<Mode />
				</MenuItem>
			</Menu>
		</div>
	);
}
