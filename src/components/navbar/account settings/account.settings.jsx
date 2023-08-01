"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import "./account.settings.scss";
import Image from "next/image";
import { Mode } from "../menu/dark mode/dark.mode";
import { AccountNav } from "./account nav/account.nav";
import { useState } from "react";

export const AccountSettings = () => {
	const [settings, setSettings] = useState(false);
	const [nav, setNav] = useState(false);

	const openModal = () => {
		setSettings(!settings);

		setTimeout(() => {
			setNav(!nav);
		}, 50);
	};

	const closeModal = () => {
		setSettings(!settings);

		setNav(!nav);
	};
	return (
		<div className="account-settings">
			<div
				className={
					settings
						? "account-settings-background account-settings-background-open"
						: "account-settings-background"
				}
				onClick={closeModal}
			/>
			<div className="profile-container" onClick={openModal}>
				<Image
					src="https://i.postimg.cc/VLT3vYV3/profile.jpg"
					fill={true}
					alt="avatar"
					className="profile"
				/>

				<div
					onClick={closeModal}
					className={
						settings
							? "settings-modal settings-modal-open"
							: "settings-modal"
					}
				>
					{nav && <AccountNav />}
				</div>
			</div>
		</div>
	);
};
