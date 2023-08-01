"use client";
import React, { useState } from "react";
import "./side.bar.scss";
import {
	MessageBadge,
	NotificationBadge,
	EscrowBadge,
	OrderBadge,
} from "../badge/badge";
import { Platform } from "./accordion/accordion";
import { IoSettingsSharp } from "react-icons/io5";
import { LuHelpCircle } from "react-icons/lu";
import { BiSolidMessageDetail } from "react-icons/bi";
import { RiLogoutBoxLine } from "react-icons/ri";
import { Mode } from "../menu/dark mode/dark.mode";
import UserSideBar from "./user side bar/user.side.bar";
import { PageNav } from "./page nav/page.nav";

export const SideBar = ({ sideBar, setSideBar }) => {
	const [user, setuser] = useState(false);
	const [page, setpage] = useState(false);

	return (
		<div
			className={
				sideBar
					? "side-bar-container side-bar-open"
					: "side-bar-container"
			}
		>
			<div className="side-bar-wrapper">
				<div className="side-bar-title">
					<div className="side-bar-logo">
						<h1>mart</h1>
					</div>
					<div
						className="side-bar-toggle"
						onClick={() => {
							setSideBar(!sideBar);
						}}
					>
						x
					</div>
				</div>

				<div className="side-bar-user-wrapper">
					{user ? (
						<div className="side-bar-user-links">
							<div
								className="user-btn"
								onClick={() => {
									setuser(!user);
								}}
							>
								<h6>Log in</h6>
							</div>

							<div
								className="user-btn"
								onClick={() => {
									setuser(!user);
								}}
							>
								<h6>Sign up</h6>
							</div>
							<PageNav />
						</div>
					) : (
						<div className="side-bar-profile">
							<UserSideBar
								page={page}
								setpage={setpage}
								user={user}
								setuser={setuser}
							/>

							<PageNav />

							<div className="divider"></div>

							<div className="profile-links">
								<NotificationBadge />
								<h6>Notifications</h6>
							</div>
							<div className="profile-links">
								<MessageBadge />
								<h6>Messages</h6>
							</div>
							<div className="profile-links">
								<OrderBadge />
								<h6>Oders</h6>
							</div>
							<div className="profile-links">
								<EscrowBadge />
								<h6>Escrow</h6>
							</div>
						</div>
					)}
				</div>

				<div className="divider"></div>

				<div className="side-bar-heading">
					<h5>Platform</h5>
				</div>

				<Platform />

				<div className="divider"></div>

				<div className="side-bar-heading">
					<h5>General</h5>
				</div>

				<div className="side-bar-general">
					<div className="general-links">
						<IoSettingsSharp className="side-bar-icon" />
						<h6>Settings</h6>
					</div>

					<Mode />

					<div className="general-links">
						<LuHelpCircle className="side-bar-icon" />
						<h6>Help</h6>
					</div>

					<div className="general-links">
						<BiSolidMessageDetail className="side-bar-icon" />
						<h6>Contact us</h6>
					</div>

					<div className="general-links">
						<RiLogoutBoxLine className="side-bar-icon" />
						<h6>Log out</h6>
					</div>
				</div>
			</div>
		</div>
	);
};
